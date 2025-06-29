from django.core.cache import cache
from .models import *
import logging
import requests
from decimal import Decimal
from django.conf import settings
import secrets
import uuid

# Currency converter
def convert_currency(amount, from_currency, to_currency):
    """
    Convert the given amount from one currency to another using stored exchange rates.
    """

    try:
        amount = Decimal(amount)
        fetch_exchange_rates()
        rates = cache.get('exchange_rates')
        if not rates:
            # Fetch exchange rates from the database if not cached
            currencies = Currencies.objects.filter(symbol__in=['USD', 'EUR', 'GBP'])
            rates = {currency.symbol: currency.exchange_rate for currency in currencies}
            cache.set('exchange_rates', rates, timeout=12 * 60 * 60)  # Cache for 12 hours

        if from_currency == to_currency:
            return round(amount, 2)

        if from_currency == 'GBP':
            converted_amount = amount * rates[to_currency]
        elif to_currency == 'GBP':
            converted_amount = amount / rates[from_currency]
        else:
            # Convert via GBP as an intermediary
            amount_in_gbp = amount / rates[from_currency]
            converted_amount = amount_in_gbp * rates[to_currency]
        
        return round(converted_amount, 2)

    except Exception as e:
        print(f"Error occured during conversion: {e}")

# Transaction reference generator 
def generate_reference(length=20):
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))

# Fetch exchange rates
def fetch_exchange_rates(user=None):
    cache_key = 'exchange_rates'
    cache_timeout = 12 * 60 * 60

    exchange_rates = cache.get(cache_key)
    if exchange_rates:
        gbp_to_usd = exchange_rates['USD']
        gbp_to_eur = exchange_rates['EUR']
        update_user_balances(gbp_to_usd, gbp_to_eur)
        return exchange_rates
    

    api_key = settings.EXCHANGE_KEY
    url = f'https://v6.exchangerate-api.com/v6/{api_key}/latest/GBP'
    try:
        response = requests.get(url).json()
    except requests.ConnectionError:
        logger.error('Could not fetch the latest exchange rates: ', exc_info=True)
        return None
    if response['result'] == 'success':
        gbp_to_usd = Decimal(response['conversion_rates']['USD'])
        gbp_to_eur = Decimal(response['conversion_rates']['EUR'])

        exchange_rates = {
            'USD': gbp_to_usd,
            'EUR': gbp_to_eur,
        }
        
        # Cache the data
        cache.set(cache_key, exchange_rates, cache_timeout)

        Currencies.objects.update_or_create(
            symbol='USD',
            defaults={
            'exchange_rate': gbp_to_usd, 
            'name': 'US Dollar',
            'code': '$'
            })
        Currencies.objects.update_or_create(
            symbol='EUR', 
            defaults={
            'exchange_rate': gbp_to_eur,
            'name': 'Euro',
            'code': '€'
            })
        Currencies.objects.update_or_create(
            symbol='GBP',
            defaults={
            'exchange_rate': 1,
            'name': 'British Pound',
            'code': '£'
        })
        update_user_balances(gbp_to_usd, gbp_to_eur) 
        
        return exchange_rates
    print(str(response))
    return None

def fetch_crypto_rates():
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
                    print(f"✅ Updated exchange rate: 1 {symbol} = {rate} {quote_currency.symbol}")

        except requests.exceptions.RequestException as e:
            print(f"❌ Error fetching exchange rates: {e}")

# update user balances for other currencies
def update_user_balances(gbp_to_usd, gbp_to_eur):
    for balance in Balances.objects.all():
        usd_balance, created = USDBalance.objects.get_or_create(balance=balance)
        eur_balance, created = EURBalance.objects.get_or_create(balance=balance)

        usd_balance.deposits = balance.deposits * gbp_to_usd
        usd_balance.bonus = balance.bonus * gbp_to_usd
        usd_balance.profits = balance.profits * gbp_to_usd
        usd_balance.save()

        eur_balance.deposits = balance.deposits * gbp_to_eur
        eur_balance.bonus = balance.bonus * gbp_to_eur
        eur_balance.profits = balance.profits * gbp_to_eur
        eur_balance.save()


def safe_decimal(value, default=0):
    try:
        if value is None or value == "":
            raise ValueError("Received None or empty string")

        return Decimal(str(value))
    except Exception as e:
        print(f"❌ Invalid decimal value: {value} ({e})") 
        return Decimal(default)

# Send telegram message
def send_telegram_message(message):
    token = settings.TELEGRAM_BOT_TOKEN
    chat_id = settings.LUMISTAKES_ADMIN_CHAT_ID
    payload = {
        'chat_id': chat_id,
        'text': message,
    }
    url = f'https://api.telegram.org/bot{token}/sendMessage'

    response = requests.post(url, data=payload)

    if response.status_code == 200:
        print('Telegram message sent successfully')
        return True
    else:
        print(f'Error sending Telegram message: {response.text}')
        return False

def get_referral_code():
    for _ in range(30):
        referral_code = uuid.uuid4()
        if not Referrals.objects.filter(referral_id=referral_code).exists():
            return referral_code
    return None