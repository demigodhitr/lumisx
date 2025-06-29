from django import template
import datetime
from django.utils.timezone import now
from decimal import Decimal
from ..models import Currencies
from django.core.cache import cache
from ..helpers import convert_currency

register = template.Library()

@register.filter
def space(card_number):
    card_number = ''.join(card_number.split()) 
    formatted_number = ' '.join(card_number[i:i+4] for i in range(0, len(card_number), 4))
    return formatted_number


@register.filter
def dash(number):
    number = ''.join(number.split()) 
    new_formatted = ' - '.join(number[i:i+4] for i in range(0, len(number), 4))
    return new_formatted


@register.filter
def mask_number(card_number):
    if len(card_number) > 4:
        return '*' * (len(card_number) - 4) + card_number[-4:]
    return card_number

@register.filter
def time_since(value):
    if not isinstance(value, datetime.datetime):
        return ''

    now_time = now()
    
    # If the value is naive, make it aware with current timezone
    if not value.tzinfo:
        value = now_time.tzinfo.localize(value)

    diff = now_time - value

    if diff.total_seconds() < 0:
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


@register.filter
def startswith(value, args):
    value = str(value)
    return str(value).startswith(str(args))


@register.filter
def uppercase(value):
    return value.upper()

@register.filter
def in_list(value, arg):
    return value in arg.split(',')


@register.filter
def converter(amount, currencies):
    try:
        from_currency, to_currency = currencies.split("_")
        return convert_currency(amount, from_currency, to_currency)
    except ValueError as e:
        print(e)
        print("from: " + from_currency + ", to: " + to_currency)
        return f"Error: Invalid conversion {currencies}"
