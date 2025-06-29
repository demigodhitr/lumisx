import requests
from django.core.management.base import BaseCommand
from django.conf import settings
from django.core.cache import cache
from lumisx.models import Stocks, CryptoExchangeRate, Currencies
from decimal import Decimal
import time

class Command(BaseCommand):
    help = "Fetch and update crypto exchange rates and stock prices"

    # Cache keys
    PRIMARY_SORT_KEY = 'stock_fetch_primary_sort'
    SECONDARY_SORT_KEY = 'stock_fetch_secondary_sort'
    PAGE_KEY = 'stock_fetch_page'

    PAGE_SIZE = 5000  # Number of stocks to process per batch

    def handle(self, *args, **kwargs):
        # 1: Fetch and update crypto exchange rates
        self.fetch_exchange_rates()

        # 2: Fetch and update stock prices
        self.fetch_stock_prices()

    def fetch_exchange_rates(self):
        """Fetch crypto exchange rates from CoinGecko and update the database."""
        fiat_currencies = ['usd', 'gbp', 'eur']
        crypto_currencies = {
            'bitcoin': 'BTC',
            'ethereum': 'ETH',
            'tether': 'USDT'
        }

        api_url = f"https://api.coingecko.com/api/v3/simple/price?ids={','.join(crypto_currencies.keys())}&vs_currencies={','.join(fiat_currencies)}"

        try:
            response = requests.get(api_url, timeout=10)
            response.raise_for_status()
            data = response.json()

            for crypto, symbol in crypto_currencies.items():
                for fiat in fiat_currencies:
                    rate = Decimal(str(data[crypto][fiat]))
                    quote_currency = Currencies.objects.get(symbol=fiat.upper())

                    # Update or create the exchange rate entry
                    CryptoExchangeRate.objects.update_or_create(
                        base_currency=symbol,
                        quote_currency=quote_currency,
                        defaults={'rate': rate}
                    )
                    self.stdout.write(self.style.SUCCESS(f"✅ Updated exchange rate: 1 {symbol} = {rate} {quote_currency.symbol}"))

        except requests.exceptions.RequestException as e:
            self.stderr.write(self.style.ERROR(f"❌ Error fetching exchange rates: {e}"))

    def fetch_stock_prices(self):
        """Fetch and update stock prices from Finnhub."""
        api_key = settings.FINNHUB_API_KEY
        if not api_key:
            self.stderr.write(self.style.ERROR("Finnhub API key is missing."))
            return

        # Get or initialize sort states from cache (alternating between 'asc' and 'desc')
        primary_sort = cache.get(self.PRIMARY_SORT_KEY, 'desc')  # Default to 'desc' on first run
        secondary_sort = cache.get(self.SECONDARY_SORT_KEY, 'latest')
        current_page = cache.get(self.PAGE_KEY, 0)

        # Switch sorting order on every run
        primary_sort = 'desc' if primary_sort == 'asc' else 'asc'
        cache.set(self.PRIMARY_SORT_KEY, primary_sort, timeout=None)  

        # Determine the ordering based on the current sort direction
        order_by = 'symbol' if primary_sort == 'asc' else '-symbol'
        stocks_queryset = Stocks.objects.all().order_by(order_by)

        # Apply pagination based on secondary sort
        if secondary_sort == 'latest':
            start = current_page * self.PAGE_SIZE
            end = start + self.PAGE_SIZE
            stocks = stocks_queryset[start:end]
        else:
            total = stocks_queryset.count()
            start = max(0, total - (current_page + 1) * self.PAGE_SIZE)
            end = start + self.PAGE_SIZE
            stocks = stocks_queryset[start:end]

        if not stocks.exists():
            self.stdout.write(self.style.WARNING("No stocks found in this batch."))
            self._update_sort_states(primary_sort, secondary_sort, 0)
            return

        if secondary_sort == 'latest':
            stocks = stocks_queryset[:5000]
        else:
            stocks = stocks_queryset[-5000:]

        if not stocks.exists():
            self.stdout.write(self.style.WARNING("No stocks found in this batch."))
            self._update_sort_states(primary_sort, secondary_sort, 0)
            return

        base_url = "https://finnhub.io/api/v1/quote"
        headers = {"X-Finnhub-Token": api_key}

        success_count = 0
        batch_success_count = 0  

        for stock in stocks:
            symbol = stock.symbol.upper()
            try:
                response = requests.get(f"{base_url}?symbol={symbol}", headers=headers, timeout=10)
                response.raise_for_status()
                data = response.json()

                stock.price = self._safe_decimal(data.get("c"))
                stock.change = self._safe_decimal(data.get("d"))
                stock.change_percent = self._safe_decimal(data.get("dp"))
                stock.low = self._safe_decimal(data.get("l", stock.low))
                stock.high = self._safe_decimal(data.get("h", stock.high))
                stock.save()

                success_count += 1
                batch_success_count += 1
                self.stdout.write(self.style.SUCCESS(f"✅ Updated {stock.symbol}: {stock.price}"))

                # After every 25 successful updates, sleep for 30 seconds
                if batch_success_count >= 25:
                    self.stdout.write(self.style.WARNING(f"💤 Reached {batch_success_count} updates. Sleeping for 30 seconds..."))
                    time.sleep(30)
                    batch_success_count = 0

            except requests.exceptions.RequestException as e:
                self.stderr.write(self.style.ERROR(f"❌ Failed to fetch {stock.symbol}: {str(e)}"))
            except Exception as e:
                self.stderr.write(self.style.ERROR(f"❌ Failed to update {stock.symbol}: {str(e)}"))

        # Update page cache for next fetch
        next_page = current_page + 1
        total_pages = (stocks_queryset.count() + self.PAGE_SIZE - 1) // self.PAGE_SIZE

        if next_page >= total_pages:
            next_page = 0  # Reset to 0 if all stocks are processed
        cache.set(self.PAGE_KEY, next_page, timeout=None)

        self.stdout.write(self.style.SUCCESS(
            f"Completed batch with {success_count}/{len(stocks)} successful updates."
        ))

    def _safe_decimal(self, value, default=0):
        """Convert value to Decimal safely."""
        try:
            if value is None or value == "":
                raise ValueError("Empty value")
            return Decimal(str(value))
        except Exception:
            return Decimal(default)

    def _update_sort_states(self, primary_sort, secondary_sort, next_page):
        """Update cache with new sort states."""
        # Switch between 'asc' and 'desc' on primary sort based on secondary sort
        new_secondary_sort = 'latest' if secondary_sort == 'oldest' else 'oldest'
        new_primary_sort = 'desc' if primary_sort == 'asc' else 'asc'

        # Update the sort states and page cache
        cache.set(self.PRIMARY_SORT_KEY, new_primary_sort, timeout=None)
        cache.set(self.SECONDARY_SORT_KEY, new_secondary_sort, timeout=None)
        cache.set(self.PAGE_KEY, next_page, timeout=None)
