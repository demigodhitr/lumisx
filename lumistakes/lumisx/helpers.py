from django.core.cache import cache
from .models import *
import logging
import datetime
from django.utils.timezone import now
import requests, random, time
from decimal import Decimal, ROUND_HALF_UP
from django.conf import settings
import secrets
import uuid

RATES_SOFT_TTL = 10 * 60   # 10 minutes = OK for pricing
RATES_HARD_TTL = 2 * 60 * 60  # 2 hours = stale safety net
RATES_LOCK_TTL = 30

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

def _now_ts() -> int:
    return int(time.time())

def _jitter_delay(base: float) -> float:
    return base * random.uniform(0.8, 1.2)

def fetch_crypto_rates():
    """
    Fetch crypto exchange rates from CoinGecko and persist into CryptoExchangeRate.
    - Soft TTL: only one fetch per 10 minutes (by default).
    - Lock: one worker refreshes while others skip.
    - Retries: handles 429 (Too Many Requests) with Retry-After/backoff.
    - Stale-if-error: keeps and uses last good JSON (for up to 2h).
    """

    fiat_currencies = ['usd', 'gbp', 'eur']
    crypto_currencies = {
        'bitcoin': 'BTC',
        'ethereum': 'ETH',
        'tether': 'USDT'
    }

    # Cache keys
    base_key   = "cg:simple_price:btcethusdt:usdgbpeur"
    data_key   = f"{base_key}:data"   # cached JSON payload
    ts_key     = f"{base_key}:ts"     # epoch seconds of last success
    lock_key   = f"{base_key}:lock"

    # 1) If fetched recently (soft TTL), skip network entirely
    cached = cache.get(data_key)
    last_ts = cache.get(ts_key) or 0
    now = _now_ts()
    if cached is not None and (now - last_ts) < RATES_SOFT_TTL:
        return cached

    # 2) Try to become the refresher
    got_lock = cache.add(lock_key, "1", timeout=RATES_LOCK_TTL)
    if not got_lock:
        if cached is not None and (now - last_ts) < RATES_HARD_TTL:
            return cached
        return None

    try:

        ids = ",".join(crypto_currencies.keys())
        vs  = ",".join(fiat_currencies)
        api_url = f"https://api.coingecko.com/api/v3/simple/price?ids={ids}&vs_currencies={vs}"

        max_retries = 3
        for attempt in range(max_retries):
            try:
                r = requests.get(api_url, timeout=10)
                if r.status_code == 429:
                    retry_after = r.headers.get("Retry-After")
                    if retry_after:
                        try:
                            delay = float(retry_after)
                        except ValueError:
                            delay = min(2 ** attempt, 30)
                    else:
                        delay = min(2 ** attempt, 30)
                    time.sleep(_jitter_delay(delay))
                    continue

                r.raise_for_status()
                data = r.json()

                # 4) Persist to DB 
                for crypto, symbol in crypto_currencies.items():
                    for fiat in fiat_currencies:
                        rate = Decimal(str(data[crypto][fiat]))
                        quote_currency = Currencies.objects.get(symbol=fiat.upper())
                        CryptoExchangeRate.objects.update_or_create(
                            base_currency=symbol,
                            quote_currency=quote_currency,
                            defaults={'rate': rate}
                        )
                        

                cache.set(data_key, data, RATES_HARD_TTL)
                cache.set(ts_key, _now_ts(), RATES_HARD_TTL)
                return data

            except requests.RequestException as e:
                # Any network error: retry with exponential backoff
                if attempt < max_retries - 1:
                    time.sleep(_jitter_delay(min(2 ** attempt, 30)))
                    continue
                # Retries exhausted — fall through to stale-if-error
                print(f"❌ Error fetching exchange rates (final): {e}")

        # 6)  keep UI running with last data.
        if cached is not None and (now - last_ts) < RATES_HARD_TTL:
            try:
                for crypto, symbol in crypto_currencies.items():
                    for fiat in fiat_currencies:
                        rate = Decimal(str(cached[crypto][fiat]))
                        quote_currency = Currencies.objects.get(symbol=fiat.upper())
                        CryptoExchangeRate.objects.update_or_create(
                            base_currency=symbol,
                            quote_currency=quote_currency,
                            defaults={'rate': rate}
                        )
            except Exception as e:
                print(f"⚠️ Failed to apply stale cached rates: {e}")

            return cached
        return None

    finally:
        if got_lock:
            cache.delete(lock_key)
            


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

def round_safe(value, places=2):

    try:
        d = Decimal(str(value))
    except Exception:
        d = Decimal("0")

    quantize_str = "1." + ("0" * places)  # e.g. "1.00" for 2 dp
    return d.quantize(Decimal(quantize_str), rounding=ROUND_HALF_UP)

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


def time_since(value):
    if not isinstance(value, datetime.datetime):
        return ''

    now_time = now()
    
    # If the value is naive, make it aware with current timezone
    if not value.tzinfo:
        value = now_time.tzinfo.localize(value)

    diff = now_time - value

    if diff.total_seconds() <= 5:
        return 'just now'

    if diff.days == 0 and diff.seconds < 60:
        seconds = diff.seconds
        return f'{seconds} sec{"s" if seconds != 1 else ""} ago'
    if diff.days == 0 and diff.seconds < 3600:
        minutes = diff.seconds // 60
        return f'{minutes} min{"s" if minutes != 1 else ""} ago'
    if diff.days == 0 and diff.seconds < 86400:
        hours = diff.seconds // 3600
        return f'{hours} hour{"s" if hours != 1 else ""} ago'
    if diff.days < 30:
        days = diff.days
        return f'{days} day{"s" if days != 1 else ""} ago'
    if diff.days >= 30:
        return value.strftime('%d %b , %Y').upper()

    return ''
