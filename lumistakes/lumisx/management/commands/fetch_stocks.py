import requests
from django.core.management.base import BaseCommand
from lumisx.models import Stocks
from django.utils.timezone import now
from django.conf import settings
import time

API_KEY = settings.POLYGON_API_KEY  
BASE_URL = "https://api.polygon.io/v3/reference/tickers"
MAX_STOCKS = 10000  #  10,000 stocks

class Command(BaseCommand):
    help = "Fetch 10,000 stocks from Polygon and store them in the DB."

    def handle(self, *args, **options):
        try:
            self.stdout.write(self.style.SUCCESS(f"Fetching stocks from Polygon..."))

            total_stored = 0  # Counter for tracking stored stocks
            page_url = f"{BASE_URL}?market=stocks&active=true&limit=1000&apiKey={API_KEY}"

            while page_url and total_stored < MAX_STOCKS:
                response = requests.get(page_url)
                if response.status_code != 200:
                    self.stdout.write(self.style.ERROR(f"Error fetching stocks: {response.text}"))
                    break

                try:
                    data = response.json()
                    stocks_data = data.get("results", [])
                except ValueError:
                    self.stdout.write(self.style.ERROR(f"Invalid JSON response: {response.text}"))
                    break

                if not stocks_data:
                    self.stdout.write(self.style.WARNING("No stocks found."))
                    break

                for stock in stocks_data:
                    if total_stored >= MAX_STOCKS:
                        break  # Stop if the limit is reached

                    symbol = stock.get("ticker")
                    name = stock.get("name", "N/A")
                    currency_name = stock.get("currency_name", "N/A")

                    if not symbol:
                        self.stdout.write(self.style.WARNING(f"Skipping invalid stock entry: {stock}"))
                        continue

                    _, created = Stocks.objects.update_or_create(
                        symbol=symbol,
                        defaults={
                            "name": name,
                            "price": 0.00,  
                            "change": None,
                            "change_percent": None,
                            "currency": currency_name,
                            "last_updated": now(),
                        },
                    )

                    total_stored += 1  # Increment counter

                    if created:
                        self.stdout.write(self.style.SUCCESS(f"Added {symbol} [{total_stored}/{MAX_STOCKS}]"))
                    else:
                        self.stdout.write(self.style.WARNING(f"Updated existing stock {symbol} [{total_stored}/{MAX_STOCKS}]"))

                        
                    if total_stored % 4999 == 0 and total_stored != 0:
                        self.stdout.write(self.style.WARNING("Sleeping for 60 seconds to avoid rate limit..."))
                        time.sleep(60)

                # Get the next page URL if available
                page_url = data.get("next_url")
                if page_url:
                    page_url += f"&apiKey={API_KEY}"  # Append API key to next page URL

            self.stdout.write(self.style.SUCCESS(f"Finished fetching stocks. Total stored: {total_stored}/{MAX_STOCKS}"))

        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error fetching stocks: {e}"))
