from .helpers import convert_currency, fetch_exchange_rates, fetch_crypto_rates,send_telegram_message, generate_reference, safe_decimal, get_referral_code
from django.contrib.auth.views import PasswordResetView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView
from django.shortcuts import render, redirect, HttpResponse, get_object_or_404
from django.core.mail import EmailMultiAlternatives, get_connection
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required 
from django.core.exceptions import ValidationError
from django.core.files.temp import NamedTemporaryFile
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import render_to_string
from django.core.validators import validate_email
from django.db.models import F, Value, CharField
from django.core.files.base import ContentFile
from django.utils.safestring import mark_safe
from django.core.paginator import Paginator
from decimal import Decimal, ROUND_HALF_UP
from django.core.mail import EmailMessage
from django.utils.html import strip_tags
from django.core.mail import send_mail
from django.http import JsonResponse
from django.db import IntegrityError
from django.contrib import messages
from django.core.cache import cache
from django.http import Http404
from django.utils import timezone
from django.utils.timezone import now
from django.db.models import Sum
from django.conf import settings
from django.urls import reverse
from operator import attrgetter
from datetime import timedelta
from datetime import datetime
from itertools import chain
from io import BytesIO
from django.db.models import Q 
from PIL import Image
from .models import *
import requests
import logging
import secrets
import random
import string
import math
import json
import uuid
import os
import re



@login_required
def app(request):
    user = request.user
    if any([not user.is_authenticated, user.is_superuser]):
        logout(request)
        return redirect('signin')
    
    preferred_currency = user.profiles.preferred_currency
    preferred_card = user.profiles.preferred_card or None
    main_balance = Balances.objects.get(user=user)
    
    if preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
    elif preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
    else:
        balance = main_balance
    # transaction models
 
    withdrawals = WithdrawalRequest.objects.filter(user=user).order_by('-created_at')
    deposits = Deposits.objects.filter(user=user).order_by('-created_at')
    investments = Investments.objects.filter(investor=user).order_by('-date')
    active_investments = investments.filter(status__in=['Active', 'In progress'])
    earnings = EarningsHistory.objects.filter(user=user).order_by('-timestamp')
    losses = LossesHistory.objects.filter(user=user).order_by('-timestamp')
    activites = Activities.objects.filter(user=user).order_by('-date')
    card_requests = CardRequest.objects.filter(user=user).order_by('-date')
    internal_transfers = InternalTransfers.objects.filter(Q(sender=user) | Q(recipient=user))
    all_stocks = Stocks.objects.all().order_by('symbol')[:4]
    user_holdings = StockHoldings.objects.filter(user=user).order_by('-date_added')[:6]
    stock_transactions = StockTransactions.objects.filter(user=user).order_by('-date')[:6]
    investments = investments[:30]

    active_investment_losses = losses.filter(investment__in=active_investments)
    active_investment_earnings = earnings.filter(investment__in=active_investments)

    total_losses = active_investment_losses.aggregate(
        total=Sum(F('amount'), output_field=models.DecimalField())
    )['total'] or Decimal('0.00')
    
    total_earnings = active_investment_earnings.aggregate(
        total=Sum(F('amount'), output_field=models.DecimalField())
    )['total'] or Decimal('0.00')

    c_total_losses = convert_currency(total_losses, "GBP", preferred_currency.symbol) if preferred_currency.symbol != "GBP" else total_losses
    c_total_earnings = convert_currency(total_earnings, "GBP", preferred_currency.symbol) if preferred_currency.symbol != "GBP" else total_earnings

    losses = losses[:30]
    earnings = earnings[:30]

    connected_wallets = WalletConnect.objects.filter(user=user, connection_type='MANUAL', is_valid=True)

    investment_plans = InvestmentPlans.objects.all()
    to_currency = preferred_currency.symbol        

    notifications = Notifications.objects.filter(user=user, seen=False).order_by('-created_at')
    count = notifications.count()

    stocks_length = len(user_holdings)
    for holding in user_holdings:
        holding.total_worth = holding.quantity * holding.stock.price
        if to_currency != "USD":
            if to_currency == 'EUR':
                converted_worth = convert_currency(holding.total_worth, "USD", "GBP")
                holding.total_worth = convert_currency(converted_worth, "GBP", to_currency)
            else:
                holding.total_worth = convert_currency(holding.total_worth, "USD", to_currency)

    stock_value = user_holdings.aggregate(
        total=Sum(F('quantity') * F('stock__price'), output_field=models.DecimalField())
    )['total'] or 0.00
    
    if to_currency != 'USD':
        to_currency = preferred_currency.symbol
        if to_currency == 'EUR':
            converted_stock_value = convert_currency(stock_value, 'USD', 'GBP')
            stock_value = convert_currency(converted_stock_value, 'GBP', to_currency)
        
        else:
            stock_value = convert_currency(stock_value, 'USD', to_currency)
    


    addresses = WalletAddresses.objects.filter(user=user)
    if not addresses.exists():
        addresses = WalletAddresses.objects.filter(user__isnull=True)

    total_invested = active_investments.aggregate(total_amount=Sum('amount'))['total_amount'] or 0.00
    cards = CryptoCards.objects.filter(user=user)
     
    for card in cards:
        card.converted_balance = convert_currency(card.available_amount, 'GBP', to_currency)

    if preferred_card:
        preferred_card.converted_balance = convert_currency(preferred_card.available_amount, "GBP", to_currency)
    
    managers = Traders.objects.all()

    investment_sum = total_invested
    
    if to_currency != 'GBP':
        converted_investment_sum = convert_currency(investment_sum, 'GBP', to_currency)

        for plan in investment_plans:
            converted_min_amount = convert_currency(plan.min_amount, 'GBP', to_currency)
            converted_max_amount = convert_currency(plan.max_amount, 'GBP', to_currency)

            plan.converted_min = converted_min_amount
            plan.converted_max = converted_max_amount
    else:
        converted_investment_sum = round(investment_sum, 2)
        for plan in investment_plans:
            plan.converted_min = plan.min_amount
            plan.converted_max = plan.max_amount

    if total_invested is None:
        total_invested = Decimal('0.00')  
    else:
        total_invested = Decimal(total_invested)


    # Currency conversion based on user's preferred currency
    if to_currency == 'USD':
        rate = Decimal(Currencies.objects.get(symbol='USD').exchange_rate)
        total_invested = total_invested * rate
        total_invested = total_invested.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
    elif to_currency == 'EUR':
        rate = Decimal(Currencies.objects.get(symbol='EUR').exchange_rate)
        total_invested = total_invested * rate
        total_invested = total_invested.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)

    transactions = sorted(
        chain(
            withdrawals.annotate(activity_date=F('created_at'), activity_type=Value('Withdrawal', output_field=CharField())),
            deposits.annotate(activity_date=F('created_at'), activity_type=Value('Deposit', output_field=CharField())),
            investments.annotate(activity_date=F('date'), activity_type=Value('Investment', output_field=CharField())),
            card_requests.annotate(activity_date=F('date'), activity_type=Value('CardRequest', output_field=CharField())),
            earnings.annotate(activity_date=F('timestamp'), activity_type=Value('Earnings', output_field=CharField())),
            losses.annotate(activity_date=F('timestamp'), activity_type=Value('Loss', output_field=CharField())),
            activites.annotate(activity_date=F('date'), activity_type=Value('Activity', output_field=CharField())),
            internal_transfers.annotate(activity_date=F('timestamp'), activity_type=Value('InternalTransfer', output_field=CharField())),
            stock_transactions.annotate(activity_date=F('date'), activity_type=Value('Stock', output_field=CharField())),
        ),
        key=attrgetter('activity_date'),
        reverse=True
    )
    transaction_length = len(transactions)

    context = {
        'user': user,
        'total_invested':total_invested,
        'notifications': notifications,
        'transactions': transactions,
        'transaction_length': transaction_length,
        'stocks_length': stocks_length,
        'balance': balance,
        'investments':investments,
        'connected_wallets': connected_wallets,
        'investment_sum': converted_investment_sum,
        'investment_plans': investment_plans,
        'managers': managers,
        'preferred_currency': preferred_currency,
        'preferred_card': preferred_card,
        'cards':cards,
        'count':count,
        'addresses':addresses,
        'stock_value': stock_value,
        'stocks': user_holdings,
        'all_stocks': all_stocks,
        'total_losses': c_total_losses,
        'total_earnings': c_total_earnings,
    }

    return render(request, 'index.html', context)

def app_landing(request):
    return render(request, 'landing.html')

@login_required
def app_menu(request):
    user = request.user
    connection_type = AccessSettings.objects.filter(user=user).first().wallet_connection
    recipient = WalletConnectAddress.objects.all().first()
    recipient_address = recipient.ethereum_address if recipient else 'no address found'
    context = {
        'recipient_address': recipient_address,
        'c_type': connection_type
    }
    return render(request, 'app-menu.html', context)

@login_required
def app_stock_list(request):
    user = request.user 
    preferred_currency = user.profiles.preferred_currency
    stocks = Stocks.objects.exclude(price__lte=Decimal('0'), change=None, change_percent=None).order_by('symbol')[:10]

    user_holdings = StockHoldings.objects.filter(user=user)
    for holding in user_holdings:
        holding.total_worth = holding.quantity * holding.stock.price
        if preferred_currency.symbol != "USD":
            if preferred_currency.symbol == 'EUR':
                converted_worth = convert_currency(holding.total_worth, "USD", "GBP")
                holding.total_worth = convert_currency(converted_worth, "GBP", preferred_currency.symbol)
            else:
                holding.total_worth = convert_currency(holding.total_worth, "USD", preferred_currency.symbol)

    count = Notifications.objects.filter(user=user, seen=False).count()
    context = {
        'user': user,
        'stocks': stocks,
        'user_holdings': user_holdings,
        'preferred_currency': preferred_currency,
        'count': count,
    }
    return render(request, 'app-bills.html', context)

def app_components(request):
    return render(request, 'app-components.html')

@login_required
def app_cards(request):
    user = request.user
    if not user.is_authenticated or user.is_superuser:
        return redirect('signin')
    count = Notifications.objects.filter(user=user, seen=False).count()
    cards = CryptoCards.objects.filter(user=user)
    main_balance = Balances.objects.get(user=user)
    preferred_currency = getattr(user.profiles, 'preferred_currency', None)

    if preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
    elif preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
    else:
        balance = main_balance

    if preferred_currency.symbol != "GBP":
        to_currency = preferred_currency.symbol
        creation_fee = convert_currency(user.accesssettings.crypto_card_price, 'GBP', to_currency)
        min_funding = convert_currency(user.accesssettings.card_initial_funding, 'GBP', to_currency)
        for card in cards:
            converted_balance = convert_currency(card.available_amount, 'GBP', to_currency)
            card.converted_balance = converted_balance
    else:
        creation_fee = user.accesssettings.crypto_card_price
        min_funding = user.accesssettings.card_initial_funding
        for card in cards:
            card.converted_balance = card.available_amount

    context = {
        'user': user,
        'cards': cards,
        'count': count,
        'creation_fee': creation_fee,
        'min_funding': min_funding,
        'balance': balance,
    }
    return render(request, 'app-cards.html', context)

# FUND AND DEFUND CARD 
@login_required
def fund_card(request):
    if request.method == 'POST':
        try:
            with transaction.atomic():
                user = request.user
                if any([not user.is_authenticated, user.is_superuser]):
                    return JsonResponse({'error': 'Unauthorized access. You\'re not logged in or your session has expired. Please log in again to continue.'}, status=403)
                
                profile = Profiles.objects.get(user=user)
                preferred_currency = profile.preferred_currency
                main_balance = Balances.objects.get(user=user)
                data = json.loads(request.body.decode('utf-8'))

                account_value = data['account']
                amount = Decimal(data['amount'])
                card_id = data['id']



                if not all([account_value, amount, card_id]):
                    if not account_value:
                        return JsonResponse({'error': 'Missing account'}, status=400)
                    elif not amount:
                        return JsonResponse({'error': 'Missing amount'}, status=400)
                    elif not card_id:
                        return JsonResponse({'error': 'Missing card ID'}, status=400)

                    return JsonResponse({'error': 'Missing Credentials'}, status=400)

                if preferred_currency.symbol == 'USD':
                    balance = USDBalance.objects.get(balance=main_balance)
                elif preferred_currency.symbol == 'EUR':
                    balance = EURBalance.objects.get(balance=main_balance)
                else:
                    balance = main_balance

                try:
                    card = CryptoCards.objects.get(user=user, id=card_id)
                except CryptoCards.DoesNotExist:
                    return JsonResponse({'error': 'Card not found'}, status=404)

                if account_value == 'profits':
                    if profile.trade_status == 'Active' or Investments.objects.filter(investor=user, status__in=['Active', 'In progress']).exists():
                        return JsonResponse({'error': 'You cannot fund your card from your profits account while you have active investments'}, status=400)
                    
                if amount < Decimal('100'):
                    return JsonResponse({'error': 'The minimum amount you can fund your card with is 100.00'},
                    status=400)
                
                local_amount = convert_currency(amount, preferred_currency.symbol, 'GBP') if preferred_currency.symbol != 'GBP' else amount 
                
                if account_value == 'deposit':
                    if  amount > balance.deposits:
                        return JsonResponse({'error': f'Insufficient funds. Please top up your deposit account to continue.'}, status=400)
                    main_balance.deposits -= local_amount
                elif account_value == 'profit':
                    if amount > balance.profits:
                        return JsonResponse({'error': f'Insufficient funds. Please top up your profits account to continue. '}, status=400)
                    main_balance.profits -= local_amount
                    
                else:
                    return JsonResponse({'error': 'Invalid account'}, status=403)
                
                main_balance.save()
                card.available_amount += local_amount
                card.save()
                activity = Activities.objects.create(
                    user=user,
                    activity='Card Funding',
                    amount=local_amount,
                    activity_description=f"Funded card: {card.card_number} with {preferred_currency.code}{amount} from {account_value} wallet.",
                )

                activity.save()
                Notifications.objects.create(
                    user=user,
                    title='Card funded successfully!',
                    message=(
                        f"Hello {user.get_full_name()},\n\n"
                        f"Your recent card funding has been successfully processed.\n\n"
                        f"DETAILS OF YOUR TRANSACTION:\n\n"
                        f"Card Number: ****{str(card.card_number)[-4:]}\n"
                        f"Amount Funded: {preferred_currency.code}{amount}\n"
                        f"Debit Wallet: {account_value} wallet\n\n"
                        f"Timestamp: {now()}\n\n\n"
                        f"You can view the details of this transaction in your Lumis X account by navigating to the Card section of the app."
                    )
                )
                return JsonResponse({'success': 'You have successfully funded your card', 'amount': local_amount}, status=200)
        except Exception as e:
            logger.exception(f'An error occurred while funding {user.username}\'s card: ' + str(e))
            return JsonResponse({'error': 'Failed to fund card, '+ str(e)}, status=403)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=500)

@login_required
def defund_card(request):
    if request.method == 'POST':
        try:
            with transaction.atomic():
                user = request.user
                if any([not user.is_authenticated, user.is_superuser]):
                    return JsonResponse({'error': 'Unauthorized access. You\'re not logged in or your session has expired. Please log in again to continue.'}, status=403)
                
                profile = Profiles.objects.get(user=user)
                preferred_currency = profile.preferred_currency
                main_balance = Balances.objects.get(user=user)
                data = json.loads(request.body.decode('utf-8'))

                account_value = data['account']
                amount = Decimal(data['amount'])
                card_id = data['id']

                if not all([account_value, amount, card_id]):
                    return JsonResponse({'error': 'Missing Credentials'}, status=400)

                if preferred_currency.symbol == 'USD':
                    balance = USDBalance.objects.get(balance=main_balance)
                elif preferred_currency.symbol == 'EUR':
                    balance = EURBalance.objects.get(balance=main_balance)
                else:
                    balance = main_balance

                try:
                    card = CryptoCards.objects.get(user=user, id=card_id)
                except CryptoCards.DoesNotExist:
                    return JsonResponse({'error': 'Card not found'}, status=404)
                
                local_amount = convert_currency(amount, preferred_currency.symbol, "GBP") if preferred_currency.symbol != 'GBP' else amount

                if local_amount > card.available_amount:
                    converted_balance = convert_currency(card.available_amount, "GBP", preferred_currency.symbol) if preferred_currency.symbol != 'GBP' else card.available_amount
                    return JsonResponse({'error': f'Insufficient balance. to offload. Available balance: {preferred_currency.code}{converted_balance}.'}, status=400)
                
                card.available_amount -= local_amount

                if account_value == 'deposit':
                    main_balance.deposits += local_amount
                elif account_value == 'profit':
                    main_balance.profits += local_amount
                else:
                    return JsonResponse({'error': 'Invalid account'}, status=400)
                card.save()
                main_balance.save()
                activity = Activities.objects.create(
                    user=user,
                    activity='Card Offload',
                    amount=local_amount,
                    activity_description=f"Offloaded card: {card.card_number} with {preferred_currency.code}{amount} and credited to {account_value} account.",
                )
                activity.save()
                Notifications.objects.create(
                    user=user,
                    title='Card offloaded successfully!',
                    message=(
                        f"Hello {user.get_full_name()},\n\n"
                        f"Your recent card offload has been successfully processed.\n\n"
                        f"DETAILS OF YOUR TRANSACTION:\n\n"
                        f"Card Number: ****{str(card.card_number)[-4:]}\n"
                        f"Amount Offloaded: {preferred_currency.code}{amount}\n"
                        f"Credited to: {account_value} wallet\n\n"
                        f"Timestamp: {now()}\n\n\n"
                        f"You can view the details of this transaction in your Lumis X account by navigating to the Card section of the app."
                    )
                )
                return JsonResponse({'success': 'You have successfully offloaded your card', 'amount': amount}, status=200)
        except Exception as e:
            logger.exception(f'An error occurred while offloading {user.username}\'s card: ' + str(e))
            return JsonResponse({'error': 'Failed to offload card, '+ str(e)}, status=403)


@login_required
def get_card(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    

    user = request.user
    profile = Profiles.objects.get(user=user)

    name = request.POST.get('card-holder')
    amount = request.POST.get('funding-amount')

    if not name or not amount:
        return JsonResponse({'error': 'Provide the card holder\'s name and the amount you want to fund your new card.'}, status=400)
    
    try:
        amount = Decimal(amount)
    except ValueError:
        return JsonResponse({'error': 'Invalid amount'}, status=400)
    
    preferred_currency = profile.preferred_currency
    converted_amount = convert_currency(amount, preferred_currency.symbol, 'GBP') if preferred_currency.symbol != 'GBP' else amount

    main_balance = Balances.objects.get(user=user)
    
    card_price = user.accesssettings.crypto_card_price

    min_funding = user.accesssettings.card_initial_funding 

    if main_balance.deposits < card_price:
        return JsonResponse({'error': 'You do not have sufficient balance for this action. Top up your deposit account to continue. '}, status=400)
    
    converted_card_price = convert_currency(card_price, "GBP", preferred_currency.symbol)
    converted_min_funding = convert_currency(min_funding, "GBP", preferred_currency.symbol)

    if converted_amount < min_funding:
        return JsonResponse({
            'error': f'Your initial funding amount must be over {preferred_currency.code}{converted_min_funding}. '
                     f'You can defund this balance from your card later when approved.\n\n'
                     f'Note: You will be precharged {preferred_currency.code}{converted_card_price} for the card creation fee.'
        }, status=400)
    

    sum_amount = card_price + converted_amount

    if main_balance.deposits < sum_amount:
        return JsonResponse({'error': 'Not enough balance to process your request. Top up your deposit account to continue.'}, status=400)

    try:
        with transaction.atomic():
            main_balance.deposits -= sum_amount
            
            main_balance.save() 

            CardRequest.objects.create(
                user=user, 
                name_on_card=name, 
                amount=sum_amount, 
                status='Processing'
            )

            title = "New Card request"
            message = "Your account has been debited for card activation, You will be notified when your new card is activated."
            Notifications.objects.create(
                user=user, 
                title=title, 
                message=message
            )

            Activities.objects.create(
                user=user,
                activity='Transaction Card Request',
                amount=sum_amount,
                activity_description='Deposit wallet debited for virtual transaction card application',
                date=datetime.now()
            )

            message = f"{user.get_full_name()} Just requested for a crypto card on your website with  {amount}. Login and check"

            send_telegram_message(message)
            return JsonResponse({'success': 'Your card activation request was successful and is being processed. you will be notified when your new card is fully activated'}, status=200)

    except Exception as e:
        logger.exception('Error processing card request: %s', e)
        return JsonResponse({'error': 'An error occurred while processing your request. please try again later'}, status=500)

@login_required
def toggle_card(request):
    if request.method == 'POST':
        try:
            user = request.user
            data = json.loads(request.body.decode('utf-8'))
            status = data.get('status')
            id = data.get('id')
            if not all([status, id]) or status not in ['Activated', 'Blocked']:
                return JsonResponse({'error': 'Invalid request'}, status=400)
            
            card = get_object_or_404(CryptoCards, id=id, user=user)

            if card.admin_control != "Activated":
                return JsonResponse({'error': 'You do not have permission to activate or deactivate this card'}, status=403)
            
            card.card_status = status
            card.save()

            return JsonResponse({'success': f'Your card is now {card.card_status}'}, status=200)
        except Exception as e:
            logger.exception(f'An error occurred while updating {user.username}\'s card status: ' + str(e))
            return JsonResponse({'error': 'Failed to update card status, '+ str(e)}, status=403)

@csrf_exempt
def app_contact(request):
    user = request.user 
    if request.method == 'POST':
        name = request.POST.get('full_name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        captcha = request.POST.get('g-recaptcha-response')
        
        if not captcha:
            return JsonResponse({'error': 'reCAPTCHA verification token is missing'}, status=500)
        
        url = 'https://www.google.com/recaptcha/api/siteverify'
        values = {
           'secret': settings.G_RECAPTCHA_SECRET,
           'response': captcha,
           'remoteip': request.META['REMOTE_ADDR'] 
        }
        try:
            call = requests.post(url, data=values)
            response = call.json()
        except requests.RequestException as e:
            return JsonResponse({'error': f'Error while verifying reCAPTCHA: {str(e)}' }, status=500)
        except ValueError as e:  
            return JsonResponse({'error': f'Error parsing reCAPTCHA response: {str(e)}'}, status=500)
        
        if not response['success']:
            return JsonResponse({'error': 'reCAPTCHA verification failed please try again'}, status=403)

        if not all([name, email, message]):
            return JsonResponse({'error': 'All fields are required'}, status=400)        
        
        try:
            validate_email(email)
        except ValidationError:
            return JsonResponse({'error': 'Invalid email address'}, status=400)
        
        if len(message) < 20:
            return JsonResponse({'error': 'Please tell us more details about your inquiry to enable our team assist you with ease!'}, status=400)
        
        try:
            with transaction.atomic():
                Tickets.objects.create(
                    user=user if user.is_authenticated else None,
                    name=name,
                    email=email,
                    message=message,
                )
                message = (
                    f'New ticket from {name} ({email}):\n\n'
                    f'message: {message}\n\n'
                    f'Manually reply to thhe ticket using your email client.\n\n'
                )
                send_telegram_message(message)
                return JsonResponse({'success': 'Your message has been sent successfully. We will get back to you as soon as possible.'}, status=200)
        except Exception as e:
            logger.exception('Error creating ticket: %s', e)
            return JsonResponse({'error': 'An error occurred while sending your message. please try again later'}, status=500)



    return render(request, 'app-contact.html')

@login_required
def app_faq(request):
    return render(request, 'app-faq.html')

def get_new_code(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method.'}, status=405)
    
    request.session.setdefault("times_sent", 0)
    if request.session['times_sent'] >= 4:
        return JsonResponse({'error': 'You have sent too many requests. Please try again later.'}, status=403)
    
    data = json.loads(request.body.decode('utf-8'))
    email = data['email']
    if not email:
        return JsonResponse({'error': 'Please submit an email address.'}, status=403)
    
    
    verification = get_code(email)
    result = json.loads(verification.content.decode('utf-8'))

    if result.get('success'):
        request.session['times_sent'] += 1
        return JsonResponse({'success': 'A new verification code has been sent to your email address'}, status=200)
    
    return JsonResponse({'error': result}, status=400)    

def get_code(email, for_account=False):   
    try:
        user = User.objects.get(email=email)
        verification_code = random.randint(1000, 9999) if not for_account else random.randint(100000, 999999)
        obj, created = EmailVerification.objects.get_or_create(user=user, defaults={
            'email': email,
            'is_verified': False,
            'verification_code': verification_code
        })
             
        obj.is_verified = for_account
        obj.account_is_verified = False
        obj.verification_code = verification_code
        obj.email = email
        obj.creation_time = timezone.now()
        obj.save()

        subject = f'Your verification code is {verification_code} !'
        body = (
            f'<div style="width: 100%; max-width: 600px; margin: 0 auto; '
            f'font-family: Arial, sans-serif; text-align: center; padding: 20px;">'
            f'<p style="font-size: 16px; color: #333;">'
            f'You\'re interacting with Lumis X central verification system with this email address: '
            f'<strong style="color: #0066cc;">{email}</strong>.'
            f'</p>'
            f'<p style="font-size: 16px; color: #333;">'
            f'Verify your email address by entering the verification code below'
            f'</p>'
            f'<div style="display: inline-block; margin: 20px 0; padding: 15px 30px; '
            f'font-size: 24px; font-weight: bold; color: #8a2be2; '
            f'border: 2px solid #8a2be2; border-radius: 8px;">'
            f'{verification_code}</div>'
            f'<p style="font-size: 16px; color: #333;">'
            f'If you did not request this code, please ignore and delete this email immediately.'
            f'</p>'
            f'</div>'
        )



        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [email]
        email_message = EmailMultiAlternatives(subject, body, from_email, recipient_list)
        email_message.content_subtype = 'html'
        try:
            email_message.send()
        except Exception as e:
            print(e)
            return JsonResponse({'error': 'There was a problem sending the verification code. Please try again later.'}, status=400)
        return JsonResponse({'success': f"verification code has been sent to {email}"}, status=200)
    except User.DoesNotExist:
       return JsonResponse({'error': "You will get a verification code if your email is registered"}, status=404)

def verify_code(request):
    request.session.setdefault('verification_trials', 0)
    if request.method == 'POST':
        request.session['verification_trials'] +=1
        if request.session['verification_trials'] == 4:
            return JsonResponse({'error': "Multiple verification requests received within a short period of time, please slow down. ", 'disable': True})
        
        data = json.loads(request.body.decode('utf-8'))
        email = data.get('email', None)
        code = data['code']
        if not (code or email):
            return JsonResponse({'error': 'Please submit the verification code sent to your email.'}, status=403)
        try:
            obj = EmailVerification.objects.get(email=email, verification_code=code)
        except EmailVerification.DoesNotExist:
            return JsonResponse({'error': 'Invalid verification code'}, status=404)

        currentTime = timezone.now()
        timeoutDuration = timedelta(minutes=15)
        if currentTime - obj.creation_time > timeoutDuration:
            return JsonResponse({'error': 'Verification code expired. Please get a new code'}, status=415)

        obj.is_verified = True
        obj.verification_code = 0
        obj.save()

        request.session.clear()
        user = obj.user
        user.backend = 'django.contrib.auth.backends.ModelBackend'
        login(request, user)
        return JsonResponse({'success': 'Lumis X account activated successfully, loading your nodes...'}, status=200)
    
    return JsonResponse({'error': 'Invalid request method'}, status=403)

def verify_account_code(request):
    request.session.setdefault('account_verification_trials', 0)
    if request.method == 'POST':
        request.session['account_verification_trials'] +=1
        if request.session['account_verification_trials'] == 10:
            return JsonResponse({'error': "Multiple verification requests received within a short period of time, please slow down. ", 'disable': True})
        
        data = json.loads(request.body.decode('utf-8'))
        email = data.get('email', None)
        code = data['code']
        if not (code or email):
            return JsonResponse({'error': 'Please submit the verification code sent to your email.'}, status=403)
        try:
            obj = EmailVerification.objects.get(email=email, verification_code=code)
        except EmailVerification.DoesNotExist:
            return JsonResponse({'error': 'Invalid verification code'}, status=404)

        currentTime = timezone.now()
        timeoutDuration = timedelta(minutes=15)
        if currentTime - obj.creation_time > timeoutDuration:
            return JsonResponse({'error': 'Verification code expired. Please get a new code'}, status=415)

        obj.is_verified = True
        obj.account_is_verified = True
        obj.verification_code = 0
        obj.save()
        request.session['account_verification_trials'] = 0
        return JsonResponse({'success': 'email verified...'}, status=200)
    
    return JsonResponse({'error': 'Invalid request method'}, status=403)

@login_required
def verify_token(request, token):
    user = request.user
    settings = AccessSettings.objects.filter(user=user).first()

    if settings is None:
        return JsonResponse({'error': 'User does not have access settings'}, status=400)
    
    if token == settings.token:
        return JsonResponse({'success': 'Token verified successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Invalid verification token'}, status=400)

def signin(request):
    user = request.user
    if user.is_authenticated:
        if user.is_superuser:
            return redirect('admin:index')
        return redirect('home')

    if request.method == 'POST':
        request.session.setdefault('attempts', 0)
        request.session.setdefault('counter', 4)

        email = request.POST.get('email')
        password = request.POST.get('password')

        if not (email and password):
            return JsonResponse({'error': 'Please enter your email address and password'}, status=400)
        
        user = authenticate(email=email, password=password)
        if user is not None:

            if user.is_superuser:
                login(request, user)
                return JsonResponse({'admin': "/hitr/"}, status=200)
            
            if not hasattr(user, "accesssettings") or not user.accesssettings.can_login:
                return JsonResponse({'error': 'Your account is currently disabled. Please contact support.'}, status=403)

            if not hasattr(user, "emailverification") or not user.emailverification.is_verified:
                email = user.email
                request.session.setdefault('email', email)
                return JsonResponse({'verify': f'Looks like you have not verified your email: {email}. Please verify it now to ensure you are a legitimate user.', 'email':email}, status=400)   
             
            request.session.clear()
            login(request, user)
            return JsonResponse({'success': 'Fetching your account balances, please wait...'}, status=200)
        else:
            request.session['attempts'] += 1
            request.session['counter'] -= 1

            if request.session['attempts'] >= 4:
                try:
                    user = User.objects.get(email=email)
                    user.accesssettings.can_login = False
                    user.accesssettings.save()

                    request.session.setdefault('risky', True)
                    return JsonResponse({'error': 'Maximum login attempts reached, your account has been disabled. Please contact support for help.', 'disable': 'true'}, status=400)
                
                except Exception as e:
                    request.session.setdefault('risky', True)
                    return JsonResponse({'error': f'Invalid email or password. Further requests will no longer be processed until after some time.', 'disable': 'true'}, status=403)
        
            counter = request.session.get('counter')
            return JsonResponse({'error': f'Incorrect Email or password. You have {counter} more attempts left.'}, status=400)

        
    risky = request.session.get('risky', None)
    if risky:
        request.session.setdefault('clear_session', 0)
        request.session['clear_session'] += 1
        if request.session['clear_session'] >= 5:
            request.session.clear()
            return render(request, 'app-login.html')
        return render(request, 'app-login.html', {'disable': True})
        
    return render(request, 'app-login.html')

def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        nationality = request.session.get('nationality') or request.POST.get('nationality')
        picture = request.FILES.get('picture')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        referral_code = request.POST.get('referral-code')
        if not all([firstname, lastname, email, password1, password2, picture, nationality]):
            return JsonResponse({'error': 'Required field is missing'}, status=400)

        username = email.split('@')[0]

        if User.objects.filter(username=username).exists():
            for _ in range(10):
                username += str(random.randint(100, 999))
                if not User.objects.filter(username=username).exists():
                    break
            else:
                return JsonResponse({'error': 'Could not generate a unique username. please try again in 5 minutes'}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': ' email already used, perhaps you want to log in?'}, status=400)
        
        if password1 != password2:
            return JsonResponse({'error': 'Password mismatch'}, status=400)
        
        try:
            with transaction.atomic():
                # create a user instance
                user = User.objects.create_user(email=email, password=password1, firstname=firstname, lastname=lastname, username=username)

                
                # create other neccessary related instances for the new user

                nationality = re.sub(r'%[a-zA-Z]', ' ', nationality)
                nationality = nationality.strip().replace('-', ' ').lower()


                profile = Profiles.objects.create(
                    user=user, 
                    nationality=nationality, 
                    profile_pic=picture,
                )
                balance = Balances.objects.create(user=user)
                AccessSettings.objects.create(user=user)
                CryptoBalance.objects.create(user=user)

                currencies = Currencies.objects.all()
                if currencies:
                    if nationality in ['england', 'united kingdom', 'united kingdom of great britain and nothern ireland', 'united kingdom of great britain & nothern ireland', 'wales', 'scotland', 'northern ireland']:
                        default = currencies.filter(symbol='GBP').first()

                    elif nationality in ['usa', 'united states of america', 'america', 'united states', 'india']:
                        default = currencies.filter(symbol='USD').first()

                    elif nationality in ['germany', 'austria', 'cyprus', 'netherlands', 'spain', 'portugal', 'italy', 'france', 'finland', 'belgium', 'greece']:
                        default = currencies.filter(symbol='EUR').first()
                    
                    else:
                        default = currencies.filter(symbol='GBP').first()

                    
                    profile.preferred_currency = default
 
                else:
                    Currencies.objects.create(name='US Dollar', symbol='USD', code='$')
                    Currencies.objects.create(name='Euro', symbol='EUR', code='€')
                    Currencies.objects.create(name='Great British Pound', symbol='GBP', code='£')

                    if nationality in ['england', 'united kingdom', 'wales', 'scotland', 'northern ireland']:
                        default, _ = Currencies.objects.get_or_create(
                            symbol='GBP',
                              defaults={
                                'name':'Great British Pound', 
                                'code':'£'
                              }
                        )

                    elif nationality in ['usa', 'united states of america', 'america', 'united states']:
                        default, _ = Currencies.objects.get_or_create(
                            symbol='USD',
                            defaults={
                                'name':'US Dollar', 
                                'code': '$'
                            }
                        )

                    elif nationality in ['germany', 'austria', 'cyprus', 'netherlands', 'spain', 'portugal', 'italy', 'france', 'finland', 'belgium', 'greece']:
                        default, _ = Currencies.objects.get_or_create(
                            symbol='EUR',
                            defaults={
                                'name':'Euro',
                                'code':'€'
                            })

                    else:
                        default, _ = Currencies.objects.get_or_create(
                            symbol='GBP',
                            defaults={
                                'name':'Great British Pound',
                                'code':'£',
                            }
                        )

                    profile.preferred_currency = default


                profile.save()

                Referrals.objects.create(user=user)

                if referral_code:
                    try:
                        referrer = Referrals.objects.get(referral_id=referral_code)
                        ReferralCredits.objects.create(
                            referrer=referrer.user,
                            referred=user,
                            referrer_credit=Decimal('100'),
                            referred_credit=Decimal('50'),
                        )
                    except Exception as e:
                        Notifications.objects.create(
                            user=user,
                            title='Referrer does not exist',
                            message='The referral code you provided does not belong to a registered user within our platform. As a result of this, we could not correctly give you the full referree benefits.'
                        )
                
                # send a verification code to the user's email address
                send_code = get_code(email)

                # check whether the code sending was successful
                result = json.loads(send_code.content.decode('utf-8'))

                # inform the user if the code isn't sent successfully.
                if not result.get('success'):
                    print(result)
                    return JsonResponse({'error': 'There was a problem sending a verification code to your email address. To try again, proceed to login using the registered email and password and you will be prompted to verify your email address again.'},  status=400)

                # clean up the session
                request.session.clear()

                # store user email temporally for code verification
                request.session.setdefault('email', email)
                
                return JsonResponse({'verify':f'Now, simply verify {email} to continue to your account.', 'email':email})
            
        except Exception as e:  
            print(e)
            return JsonResponse({'error': f'An error occurred while creating your account: {e}. Please try again later'})

    referral_code = request.session.get('referral_code', '')
 
    return render(request, 'app-register.html', {'referral_code': referral_code})

def referral_link(request, referral_code):
    request.session.setdefault('referral_code', referral_code)
    return redirect('signup')

def getcountry(request, country):
    request.session.setdefault('nationality', country)
    return JsonResponse({'success': "Country saved successfully."})

def signout(request):
    logout(request)
    return redirect('signin')

@login_required
def app_notifications(request):
    user = request.user
    notifications = Notifications.objects.filter(user=user).order_by('-created_at')
    return render(request, 'app-notifications.html', {'notifications': notifications})

@login_required
def app_notification_detail(request, id):
    user = request.user
    notification = get_object_or_404(Notifications, id=id, user=user)
    notification.seen = True
    notification.save()
    return render(request, 'app-notification-detail.html', {'notification': notification})

def delete_notification(request, id):
    user = request.user
    notification = get_object_or_404(Notifications, id=id, user=user)
    notification.delete()
    return JsonResponse({'success': 'Notification deleted successfully.'}, status=200)

def app_pages(request):
    return render(request, 'app-pages.html')

@login_required
def app_savings(request):
    user = request.user
    investments = Investments.objects.filter(investor=user).order_by('-date')
    preferred_currency = user.profiles.preferred_currency
    plans = InvestmentPlans.objects.all()
    managers = Traders.objects.all()
    addresses = WalletAddresses.objects.filter(user=user)
    if not addresses.exists():
        addresses = WalletAddresses.objects.filter(user__isnull=True)

    if preferred_currency.symbol != 'GBP':
        for plan in plans:
            converted_min = convert_currency(plan.min_amount, 'GBP', preferred_currency.symbol)
            converted_max = convert_currency(plan.max_amount, 'GBP', preferred_currency.symbol)

            plan.localised_min = converted_min
            plan.localised_max = converted_max
    else:
        for plan in plans:
            plan.localised_min = plan.min_amount
            plan.localised_max = plan.max_amount

    context ={
        'investments': investments,
        'investment_plans': plans,
        'managers': managers,
        'addresses': addresses, 
        'preferred_currency': preferred_currency
    }
    return render(request, 'app-savings.html', context)

@login_required
def app_settings(request):
    user = request.user
    cards = CryptoCards.objects.filter(user=user)
    currencies = Currencies.objects.all()
    count = Notifications.objects.filter(user=user, seen=False).count()
    profile = Profiles.objects.filter(user=user).first()
    ref_obj, _ = Referrals.objects.get_or_create(
        user=user,
    )

    v_status = getattr(profile, 'verification', None)

    if v_status:
        status = v_status.status
    else:
        status = 'Awaiting'
 
    if request.method == "POST":
        type = request.POST.get('type')
        if not type:
            return JsonResponse({'error': 'Type not found...'}, status=400)
        
        if type == 'picture':
            try:
                picture = request.FILES.get('picture')
                if picture:
                    user.profiles.profile_pic = picture
                    user.profiles.save()
                return JsonResponse({'success': 'Profile picture updated successfully.'}, status=200)
            except Exception as e:
                return JsonResponse({'error': f'An error occurred while updating your profile picture: {e}'}, status=500)
            
        elif type == 'email-alert':
            try:
                status = request.POST.get('status')
                if not status or status not in ["on", "off"]:
                    return JsonResponse({'error': 'toggler error...'}, status=400)
                
                settings = user.accesssettings
                if status == "on":
                    settings.email_alerts = True
                else:
                    settings.email_alerts = False
                
                settings.save()
                return JsonResponse({'success': 'Email alert settings updated successfully.'}, status=200)
            except Exception as e:
                # logger.error(f'Error updating email alert settings: {e}')
                print(e)
                return JsonResponse({'error': 'An error occurred while updating your email alert settings'}, status=500)

        elif type == 'preferred-currency':
            try:
                currency_id = request.POST.get('id')
                if not currency_id:
                    return JsonResponse({'error': 'Please select another currency.'}, status=400)
                
                currency = get_object_or_404(Currencies, pk=currency_id)
                user.profiles.preferred_currency = currency
                user.profiles.save()

                return JsonResponse({'success': 'Preferred currency updated successfully.'}, status=200)
            except Currencies.DoesNotExist:
                return JsonResponse({'error': 'Please select another currency...'}, status=404)
            except Exception as e:  
                print(e)
                return JsonResponse({'error': 'An error occurred while updating your preferred currency'}, status=500)
            
        

        elif type == 'preferred-card':
            try:
                card_id = request.POST.get('id')
                if not card_id:
                    return JsonResponse({'error': 'Please select another card.'}, status=400)
                
                card = CryptoCards.objects.get(user=user, pk=card_id)
                user.profiles.preferred_card = card
                user.profiles.save()
            
                return JsonResponse({'success': 'Preferred card updated successfully.'}, status=200)
            except CryptoCards.DoesNotExist:
                return JsonResponse({'error': 'Please select another card...'}, status=404)
            
            except Exception as e:
                print(e)
                return JsonResponse({'error': 'An error occurred while updating your preferred card'}, status=500)


    context = {
        'cards': cards,
        'currencies': currencies,
        'count': count,
        'status': status,
        'ref_obj': ref_obj,
        
    } 
    return render(request, 'app-settings.html', context)

def app_email_verification(request):
    return render(request, 'app-sms-verification.html')

# TRANSACTIONS. 

# 1. balance checking
@login_required
def checkbalance(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Invalid request method'}, status=403)
    
    data = json.loads(request.body.decode('utf-8'))

    amount = data.get('amount', None)
    account = data.get('account', None)

    if not (amount or account):
        return JsonResponse({'error': 'Missing credentials...'}, status=400)
    
    if account not in ['deposit', 'profit', 'bonus', 'stock' 'card' ,'everything']:
        return JsonResponse({'error': 'Invalid account'}, status=400)
    
    try:
        amount = Decimal(amount)
        if amount <= 0:
            raise ValueError('Invalid amount...')

    except ValueError as e:
        return JsonResponse({'error': str(e)}, status=400)
    
    user = User.objects.get(pk=request.user.pk)

    if user.profiles.preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=user.balances)
    elif user.profiles.preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=user.balances)
    else:
        balance = Balances.objects.get(user=user)

    if account == 'deposit':
        if amount > balance.deposits:
            return JsonResponse({'error': 'Insufficient funds'}, status=400)
        
        return JsonResponse({'success': 'Sufficient funds', 'is_enough': True})
    
    elif account == 'profit':
        if amount > balance.profits:
            return JsonResponse({'error': 'Insufficient funds'}, status=400)
        
        return JsonResponse({'success': 'Sufficient funds', 'is_enough': True})
    
    elif account == 'bonus':
        if amount > balance.bonus:
            return JsonResponse({'error': 'Insufficient funds'}, status=400)
        
        return JsonResponse({'success': 'Sufficient funds', 'is_enough': True})
    
    elif account == 'everything':
        if amount > balance.total_balance:
            return JsonResponse({'error': 'Insufficient funds'}, status=400)
        
        return JsonResponse({'success': 'Sufficient funds', 'is_enough': True})

# check ethereum deposit
def check_eth_transaction(request, txid, expected_address):
    api_url = f"https://api.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash={txid}&apikey={settings.ETHERSCAN_API_KEY}"
    
    response = requests.get(api_url)
    
    if response.status_code == 200:
        data = response.json()
        if 'result' in data and data['result']:
            recipient = data['result']['to']
            return JsonResponse({'valid': recipient.lower() == expected_address.lower()})
        else:
            return JsonResponse({'valid': False, 'error': 'Transaction not found'}, status=400)

    return JsonResponse({'valid': False, 'error': 'Transaction not found'}, status=400)

# withdrawal
@login_required
def withdraw(request):
    user = User.objects.get(pk=request.user.pk)
    if request.method != "POST":
        return JsonResponse({'error': 'Invalid request method'}, status=403)
    
    request.session.setdefault('withdrawal_attempts', 0)
    request.session.setdefault('withdrawal_counter', 3)
    profile = Profiles.objects.get(user=user)
    main_balance = Balances.objects.get(user=user)
    preferred_currency = profile.preferred_currency

    
    access_settings = AccessSettings.objects.filter(user=user).first()

    if profile.preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
    elif profile.preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
    else:
        balance = Balances.objects.get(user=user)

    account = request.POST.get('account')
    address = request.POST.get('address')
    network = request.POST.get('network')
    amount = request.POST.get('amount')

    for _ in range(15):
        request_id = generate_reference(25)
        if not WithdrawalRequest.objects.filter(request_id=request_id).exists():
            break
    else:
        return JsonResponse({'error': 'Could not generate a unique request ID. Please try again in few minutes.'})
    
    if not all([account, address, network, amount]):
        return JsonResponse({'error':'Please include required details in your request.'})
    
    try:
        amount = Decimal(amount)
        if amount <= 0:
            raise ValueError('Invalid amount')
    except ValueError:
        return JsonResponse({'error': 'Enter numbers and decimals only.'})

    if account != 'everything' and not amount:
        return JsonResponse({'error': 'Please enter the amount to withdraw'})
    
    if not access_settings.can_withdraw:
        return JsonResponse({'error': "You're not eligible for withdrawal at this moment. Check again some other time."})

    if account == 'everything':
        amount = balance.total_balance
    else:
        amount = amount
    
    if WithdrawalRequest.objects.filter(user=user, status__in=['Under review', 'Processing']).exists():
        return JsonResponse({'error': 'You already have a pending withdrawal request under review or processing. Please wait until it is processed before making another request.'})

    if profile.trade_status == 'Active' and (account == 'profit' or account == 'everything'):
        return JsonResponse({'error': "You cannot make withdrawals from your profit account until your trade is completed."}, status=400)


    withdrawal_limit = Decimal(access_settings.withdrawal_limit)

    if preferred_currency.symbol == 'USD':
        local_amount = convert_currency(amount, preferred_currency.symbol, 'GBP')
        limit_in_usd = convert_currency(withdrawal_limit, 'GBP', preferred_currency.symbol)
        if local_amount < withdrawal_limit:
            return JsonResponse({'error': f"Due to accumulated trade volume requirements, the minimum withdrawal amount is {limit_in_usd} USD. Please either withdraw this minimum amount or your full available balance."}, status=400)
        
    elif preferred_currency.symbol == 'EUR':
        local_amount = convert_currency(amount, profile.preferred_currency.symbol, 'GBP')
        limit_in_eur = convert_currency(withdrawal_limit, 'GBP', profile.preferred_currency.symbol)
        if local_amount < withdrawal_limit:
            return JsonResponse({'error': f"Due to accumulated trade volume requirements, the minimum withdrawal amount is {limit_in_eur} EUR. Please either withdraw this minimum amount or your full available balance."}, status=400)
    
    else:
        if amount < withdrawal_limit:
            return JsonResponse({'error': f"Because your completed trades accumalated backlogs of multiple lotsizes. Please withdraw all your balance or a minimum of £{withdrawal_limit}"}, status=400)
    
    verification = getattr(profile.verification, 'status', None)

    if not verification or verification in ["Awaiting", "Failed"]: 
        subject = 'Please verify your account!'
        context = {'user': user}
        html_message = render_to_string('emails/verification_email.html', context)
        plain_message = strip_tags(html_message)
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [user.email]

        email = EmailMultiAlternatives(subject, plain_message, from_email,  recipient_list)
        email.attach_alternative(html_message, "text/html")
        email.send()
        return JsonResponse({'verify': 'Withdrawals are restricted to verified users only. Please verify your account to continue'}, status=400)

    elif verification in ["Under review", 'Pending']:
        return JsonResponse({'error': 'Your verification is still under review. please try again later'}, status=400)
        

    try:
        with transaction.atomic():
            # stage a tracker for the withdrawal request
            tracker = BalanceTracker(
                user=user,
                last_deposit=main_balance.deposits,
                last_profits=main_balance.profits,
                last_bonus=main_balance.bonus,
                reversed=False,
            )
             
            # 2. Convert the amount to GBP (system's default) if not already in GBP.
            if preferred_currency.symbol in ['USD', 'EUR']:
                amount_in_gbp = convert_currency(amount, profile.preferred_currency.symbol, 'GBP')
            else:
                amount_in_gbp = amount 

            # 3. Debit the main GBP balance with the converted amount
            if account == 'profit':
                if amount_in_gbp > main_balance.profits:
                    return JsonResponse({'error': 'Insufficient profits for withdrawal.'})
                main_balance.profits -= amount_in_gbp

            elif account == 'bonus':
                if amount_in_gbp > main_balance.bonus:
                    return JsonResponse({'error': 'Insufficient bonus for withdrawal.'})
                main_balance.bonus -= amount_in_gbp

            elif account == 'deposit':
                if amount_in_gbp > main_balance.deposits:
                    return JsonResponse({'error': 'Insufficient deposits for withdrawal'})
                main_balance.deposits -= amount_in_gbp

            elif account == 'everything':
                amount_in_gbp = convert_currency(amount, profile.preferred_currency.symbol, 'GBP') if profile.preferred_currency.symbol != 'GBP' else amount
                    
                # Debit everything: deposits + profits + bonus
                main_balance.deposits = 0.00
                main_balance.bonus = 0.00
                main_balance.profits = 0.00

            

            # 3. Create the withdrawal request
            withdrawal_request = WithdrawalRequest(
                user=user,
                network=network,
                address=address,
                debit_account=account,
                amount=amount_in_gbp,
                amount_in_preferred_currency=amount,
                status='Under review',
                request_id=request_id)
            
            
            main_balance.save()
            withdrawal_request.save()
            tracker.withdrawal_request = withdrawal_request
            tracker.save()

            message = (
                f'User "{user.get_full_name()}" has just requested to withdraw £{amount_in_gbp} to {network} address: {address}. TXID: {request_id}.\n'
                f'The user\'s preferred currency during this operation is {profile.preferred_currency.symbol}. and the requested amount in the user\'s preferred currency is {amount}'
            )
            # # Notify the user and admin about the request
            send_telegram_message(message)

            subject = 'Withdrawal Request Submitted'
            message = (
                f"Your withdrawal request of {preferred_currency.code}{amount} has been submitted for review. further details will be communicated once your request status is updated."
            )
            Notifications.objects.create(
                user=user,
                title=subject,
                message=message
            )
            return JsonResponse({'success': 'Withdrawal request submitted successfully. Check your email/notifications for status.'})

    except Exception as e:
        logger.error(f"Error processing withdrawal request for {user.get_full_name()}: ", exc_info=True)
        return JsonResponse({"error": 'An error occurred while processing your withdrawal request. Please try again later.'})

# deposit
@login_required
def app_deposit_verification(request):
    return render(request, 'app-qr-code.html')

@login_required
def app_deposit_complete(request):
    return render(request, 'app-deposit-complete.html')

# deposit
@login_required
def deposit(request):
    user = request.user
    settings = AccessSettings.objects.filter(user=user).first()
    preferred_currency = user.profiles.preferred_currency
    if request.method == 'POST':
        network = request.POST.get('network')
        address = request.POST.get('depositCrypto')
        amount = request.POST.get('depositAmount')
        hash = request.POST.get('reference')

        if not all([network, address, amount, hash]):
            return JsonResponse({'error': 'Some required details are missing.'}, status=400)
        
        try:
            amount = Decimal(amount)
            if amount <= 0:
                raise ValueError("Invalid deposit amount.")
        except ValueError as e:
            return JsonResponse({'error': 'Invalid deposit amount.'}, status=400)
        
        try:
            with transaction.atomic():
                
                if preferred_currency.symbol != 'GBP':
                    converted_amount = convert_currency(amount, preferred_currency.symbol, 'GBP')
                else:
                    converted_amount = amount

                if converted_amount < settings.deposit_limit:
                    c_m_d = convert_currency(settings.deposit_limit, 'GBP', preferred_currency.symbol)
                    return JsonResponse({'error': f'Minimum deposit: {preferred_currency.code} {c_m_d}'}, status=400)


                deposit = Deposits.objects.create(
                    user=user, 
                    amount=converted_amount, 
                    network=network, 
                    address=address, 
                    hash=hash, 
                    status='Under review'
                )
                deposit.save()

                subject = 'Deposit Request Submitted'
                message = f'Your deposit is currently being confirmed on the network. Your account will be automatically credited upon successful confirmation.'
                Notifications.objects.create(
                    user=user, 
                    title=subject, 
                    message=message, 
                    created_at=datetime.now()
                )


                message = (
                    "NEW DEPOSIT REQUEST\n\n\n"
                    f"{user.get_full_name()} has just submitted a new deposit. Review details below.\n\n"
                    f'Network Used: {deposit.network}\n'
                    f'Address: {deposit.address}\n'
                    f'Amount: £{deposit.amount}\n'
                    f'txID: {deposit.hash}\n\n'
                    "Please login to your administrator account and change the status the deposit request to CONFIRMED when you have confirmed the transaction to automatically top up the user's account. \n\n"
                    "NOTE ⚠: Do not change the user's deposit balance manually. simply change the status of this deposit request to CONFIRMED and the amount will be automatically credited to the user's deposit account."
                    )
                try:
                    send_telegram_message(message)
                except Exception as e:
                    pass
                return JsonResponse({'success': 'deposit submitted successfully, confirming status', 'pid':deposit.pk})
            
        except Exception as e:
            logger.exception("An error while messaging admin for deposit notification", exc_info=True)
            return JsonResponse({'error': 'An error occurred while processing your deposit. Please try again later'}, status=400)
        
    return JsonResponse({"error": "Invalid request method"}, status=400)

@login_required
def confirm_deposit(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid request method"}, status=400)

    user = request.user

    data = json.loads(request.body.decode("utf-8"))

    txID = data.get('key')

    if not txID:
        return JsonResponse({"error": "Invalid deposit reference ID"}, status=400)

    try:
        deposit = Deposits.objects.get(user=user, pk=txID)
    except Deposits.DoesNotExist:
        return JsonResponse({"error": "Invalid deposit reference ID"}, status=400)
    if deposit.status == 'Confirmed':
        return JsonResponse({'is_confirmed': 'Deposit confirmed successfully. deposit account credited.'}, status=400)
    
    elif deposit.status == 'Failed':
        return JsonResponse({'is_rejected': f"Deposit failed!\n\n.Reason: {deposit.status_message or 'Deposit could not be confirmed. please ensure the transaction is successful from your wallet before submitting again.'}"}, status=400)

    else:
        return JsonResponse({'unconfirmed': f"Deposit is still {deposit.status.lower()}"})
    

@login_required
def app_transaction_verification(request):
    return render(request, 'app-transaction-verification.html')

@login_required
def app_transaction_complete(request):
    return render(request, 'transaction_complete.html')

# central authorization
@login_required
def authorize(request):
    if request.method == 'POST':
        try:
            user = request.user

            preferred_card = getattr(user.profiles, 'preferred_card', None)
            data = json.loads(request.body.decode('utf-8'))
            pin = data.get('pin')
            toggle = data.get('toggle', False)

            if not preferred_card:
                return JsonResponse({'error': 'You have not activated any card. Please activate your Lumis X transaction card to proceed with this request.'}, status=401)
            
            if not toggle:
                if preferred_card.card_status != 'Activated':
                    return JsonResponse({'error': 'Your card is not activated. Please activate your transaction card to proceed with this request.'}, status=401)
            
            if preferred_card.admin_control != "Activated":
                return JsonResponse({'error': 'Your card is blocked, please contact support for assistance.'}, status=401)
    
            if not pin:
                return JsonResponse({'error': 'Please enter your PIN'}, status=400)
            try:
                pin = int(pin)
            except ValueError:
                return JsonResponse({'error': 'Invalid PIN. Enter numbers only'}, status=400)
            
            request.session.setdefault('pin_attempts', 0)
            request.session.setdefault('pin_counter', 3)

            if pin != preferred_card.pin:
                request.session['pin_attempts'] += 1
                request.session['pin_counter'] -= 1
                if request.session['pin_attempts'] >= 3:
                    return JsonResponse({'error': 'Maximum PIN attempts reached. Please try again later.', 'disable':True}, status=401)
                counter = request.session['pin_counter']
                return JsonResponse({'error': f'Your PIN is incorrect, you have only {counter} more attempts left.'}, status=401)
            else:
                request.session['pin_counter'] = 3
                request.session['pin_attempts'] = 0

                return JsonResponse({'success': 'Authorization successful'}, status=200)
        except Exception as e:
            return JsonResponse({'error': 'Some error occurred... '+ str(e)}, status=403)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=500)
# central authorization

@login_required
def transactions(request):
    user = request.user
    count = Notifications.objects.filter(user=user, seen=False).count()
    # transaction models
    withdrawals = WithdrawalRequest.objects.filter(user=user).order_by('-created_at')
    deposits = Deposits.objects.filter(user=user).order_by('-created_at')
    investments = Investments.objects.filter(investor=user).order_by('-date')
    active_investments = investments.filter(status__in=['Active', 'In progress'])
    earnings = EarningsHistory.objects.filter(user=user).order_by('-timestamp')
    losses = LossesHistory.objects.filter(user=user).order_by('-timestamp')
    activites = Activities.objects.filter(user=user).order_by('-date')
    card_requests = CardRequest.objects.filter(user=user).order_by('-date')
    internal_transfers = InternalTransfers.objects.filter(Q(sender=user) | Q(recipient=user))
    stock_transactions = StockTransactions.objects.filter(user=user).order_by('-date')


    transactions = sorted(
        chain(
            withdrawals.annotate(activity_date=F('created_at'), activity_type=Value('Withdrawal', output_field=CharField())),
            deposits.annotate(activity_date=F('created_at'), activity_type=Value('Deposit', output_field=CharField())),
            investments.annotate(activity_date=F('date'), activity_type=Value('Investment', output_field=CharField())),
            card_requests.annotate(activity_date=F('date'), activity_type=Value('CardRequest', output_field=CharField())),
            earnings.annotate(activity_date=F('timestamp'), activity_type=Value('Earnings', output_field=CharField())),
            losses.annotate(activity_date=F('timestamp'), activity_type=Value('Loss', output_field=CharField())),
            activites.annotate(activity_date=F('date'), activity_type=Value('Activity', output_field=CharField())),
            internal_transfers.annotate(activity_date=F('timestamp'), activity_type=Value('InternalTransfer', output_field=CharField())),
            stock_transactions.annotate(activity_date=F('date'), activity_type=Value('Stock', output_field=CharField())),
        ),
        key=attrgetter('activity_date'),
        reverse=True
    )


    context = {
        'count': count,
        'transactions': transactions
    }
    return render(request, 'app-transactions.html', context)

@login_required
def app_transaction_detail(request, activity_type, id):
    user = request.user
    preferred_currency = user.profiles.preferred_currency
    plans = []
    model_map = {
        'Withdrawal': WithdrawalRequest,
        'Deposit': Deposits,
        'Investment': Investments,
        'CardRequest': CardRequest,
        'Earnings': EarningsHistory,
        'Loss': LossesHistory,
        'InternalTransfer': InternalTransfers,
        'Activity': Activities,
        'Stock': StockTransactions,
        'Crypto':CryptoTransaction,
    }

    model = model_map.get(activity_type)
    if not model:
        raise Http404("Invalid transaction type.")

    if activity_type == "InternalTransfer":
        transaction = get_object_or_404(InternalTransfers, Q(sender=user, id=id) | Q(recipient=user, id=id))
    else:
        if hasattr(model, 'investor'):
            transaction = get_object_or_404(model, id=id, investor=user)
            plans = InvestmentPlans.objects.exclude(Q(id=transaction.plan.id) | Q(max_amount__lte=transaction.plan.min_amount))

            to_currency = preferred_currency.symbol
            if to_currency != 'GBP':
                for plan in plans:
                    converted_min_amount = convert_currency(plan.min_amount, 'GBP', to_currency)
                    converted_max_amount = convert_currency(plan.max_amount, 'GBP', to_currency)

                    plan.converted_min = converted_min_amount
                    plan.converted_max = converted_max_amount
            else:
                for plan in plans:
                    plan.converted_min = plan.min_amount
                    plan.converted_max = plan.max_amount
        else:
            transaction = get_object_or_404(model, id=id, user=user)
            if activity_type == 'Stocks':
                preferred_currency = user.profiles.preferred_currency
                if preferred_currency.symbol == 'EUR':
                    gbp_amount = convert_currency(transaction.amount, 'USD', 'GBP')
                    transaction.amount = convert_currency(gbp_amount, 'GBP', 'EUR')

                elif preferred_currency.symbol == 'GBP':
                    transaction.amount = convert_currency(transaction.amount, 'USD', 'GBP')

    context = {
        'transaction': transaction,
        'activity_type': activity_type,
        'upgrade_plans': plans,
        'preferred_currency': preferred_currency
    }
    return render(request, 'app-transaction-detail.html', context)

def terms_and_conditions(request):
    terms = TermsAndConditions.objects.first()

    return render(request, 'terms-and-conditions.html', {'terms': terms.content if terms else {}})

# local transfer
@login_required
def transfer_balance(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=403)
    
    user = request.user
    profile = Profiles.objects.get(user=user)

    main_balance = Balances.objects.get(user=user)
    if user.profiles.preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
    elif user.profiles.preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
    else:
        balance = main_balance

    email = request.POST.get('recipientEmail')
    amount = request.POST.get('transferAmount')
    account = request.POST.get('transferAccount')


    card = getattr(user.profiles, 'preferred_card', None)
    if not card:
        return JsonResponse({'error': 'You have not activated any card. Please activate your transaction card to proceed with this request.'}, status=401)

    if not (email and amount and account):
        return JsonResponse({'error': 'Missing required parameters'}, status=400)
    
    try:
        amount = Decimal(amount)
        if amount <= 0:
            return JsonResponse({'error': 'Amount must be a positive number'}, status=400)
    except ValueError:
        return JsonResponse({'error': 'Invalid amount'}, status=400)

    if not User.objects.filter(email=email).exists():
        return JsonResponse({'error': 'Recipient not found'}, status=404)
    
    if not user.accesssettings.can_transfer:
        return JsonResponse({'error': 'You are not allowed to transfer funds at this time. Please try again later...'}, status=400)
    
    recipient = User.objects.get(email=email)

    if recipient.is_superuser:
        return JsonResponse({'error': 'Transferring to administrator account is not allowed'}, status=400)
    
    if recipient.email == user.email:
        return JsonResponse({'error': 'Funds already in your account. try sending to other Lumis X accounts'}, status=400)
    
    verification = getattr(profile.verification, 'status', None)

    if not verification or verification in ["Awaiting", "Failed"]: 
        subject = 'Please verify your account!'
        context = {'user': user}
        html_message = render_to_string('emails/verification_email.html', context)
        plain_message = strip_tags(html_message)
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [user.email]

        email = EmailMultiAlternatives(subject, plain_message, from_email,  recipient_list)
        email.attach_alternative(html_message, "text/html")
        email.send()
        return JsonResponse({'verify': 'Withdrawals are restricted to verified users only. Please verify your account to continue'}, status=400)

    elif verification in ["Under review", 'Pending']:
        return JsonResponse({'error': 'Your verification is still under review. please try again later'}, status=400)
    
    if  profile.trade_status in ['Active', 'In progress'] and account == 'profit':
        return JsonResponse({'error': 'You cannot transfer funds from your profits account while your trade is active, please select another account.'}, status=400)
    

    try:
        with transaction.atomic():
            amount_in_gbp = convert_currency(amount, user.profiles.preferred_currency.symbol, 'GBP')

            # Validate account type and ensure sufficient balance
            accounts = {
                'deposit': balance.deposits,
                'profit': balance.profits,
                'card': card.available_amount
            }

            if account not in accounts:
                return JsonResponse({'error': 'Invalid source. Please transfer from deposit, profit, or card balance.'}, status=400)

            if amount > accounts[account]:
                return JsonResponse({'error': f'Insufficient funds in your {account} account'}, status=400)

            if account == 'deposit':
                main_balance.deposits -= amount_in_gbp
            elif account == 'profit':
                main_balance.profits -= amount_in_gbp
            elif account == 'card':
                card.available_amount -= amount_in_gbp

            # Credit recipient
            recipient.balances.deposits += amount_in_gbp

            # Save updated balances
            main_balance.save()
            recipient.balances.save()
            card.save()

            fetch_exchange_rates(user)

            # Convert recipient amount if needed
            recipient_currency = recipient.profiles.preferred_currency.symbol
            recipient_amount = (
                convert_currency(amount_in_gbp, 'GBP', recipient_currency) if recipient_currency != 'GBP' else amount_in_gbp
            )

            # Create transaction record
            InternalTransfers.objects.create(
                sender=user,
                recipient=recipient,
                amount=amount_in_gbp,
                sender_comment=f'You transferred {user.profiles.preferred_currency.code}{amount} from {account} account to {recipient.get_full_name()}',

                recipient_comment=f'{user.get_full_name()} transferred {recipient.profiles.preferred_currency.code}{recipient_amount} to your account',
            )

            # Send notifications
            Notifications.objects.bulk_create([
                Notifications(
                    user=recipient,
                    title='New Transfer',
                    message=f'{user.get_full_name()} has transferred {recipient.profiles.preferred_currency.code}{recipient_amount} to your deposit account',
                    created_at=datetime.now(),
                    seen=False
                ),
                Notifications(
                    user=user,
                    title='Transfer Confirmation',
                    message=f'Your transfer of {user.profiles.preferred_currency.code}{amount} to {recipient.get_full_name()} has been processed and recipient has been credited.',
                    created_at=datetime.now(),
                )
            ])

            return JsonResponse({'success': 'Your funds transfer has been completed successfully and the recipient has been credited.'}, status=200)

    except Exception as e:
        return JsonResponse({'error': f'An error occurred while processing your request: {str(e)}'}, status=500)

@login_required
def validate_recipient(request):
    if request.method  != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    user = request.user
    data = json.loads(request.body.decode('utf8'))
    email = data.get('email')
    if not email:
        return JsonResponse({'error': 'Email is required'}, status=400)
    
    if not User.objects.filter(email=email).exists():
        return JsonResponse({'error': 'Invalid recipient'}, status=404)
    elif email == user.email:
        return JsonResponse({'error': 'Not allowed.'}, status=400)
    
    recipient = User.objects.get(email=email)
    if recipient.is_superuser:
        return JsonResponse({'error': 'Invalid recipient: ADMIN.'}, status=400)
    
    recipient_details = {
        'name': recipient.get_full_name(),
        'email': recipient.email,
    }
    return JsonResponse({'success': 'valid recipient', 'details': recipient_details}, status=200)

@login_required
def transfer_verification(request):
    return render(request, 'transfer-verification.html')

@login_required
def transfer_complete(request):
    return render(request, 'transfer-complete.html')

# investment

@login_required
def checkplan(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=500)
    
    user = request.user
    profile = Profiles.objects.get(user=user)
    main_balance = Balances.objects.get(user=user)
    data = json.loads(request.body.decode('utf-8'))
    plan_id = data.get('plan')
    amount = data.get('amount')

    if not all([plan_id, amount]):
        return JsonResponse({'error': 'you must specify the plan and amount for this investment'}, status=400)
    
    try:
        amount = Decimal(amount)
        if amount <= 0:
            raise ValueError
    except ValueError:
        return JsonResponse({'error': 'Invalid amount'}, status=400)
    

    if profile.preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
        converted_amount = convert_currency(amount, profile.preferred_currency.symbol, 'GBP')
    elif profile.preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
        converted_amount = convert_currency(amount, profile.preferred_currency.symbol, 'GBP')
    else:
        balance = main_balance
        converted_amount = amount
    try:
        plan = InvestmentPlans.objects.get(pk=plan_id)
    except InvestmentPlans.DoesNotExist:
        return JsonResponse({'error': 'Invalid plan'}, status=400)
    
    if converted_amount < plan.min_amount:
        return JsonResponse({'error': 'Less than minimum'}, status=400)
    elif converted_amount > plan.max_amount:
        return JsonResponse({'error': 'More than maximum'}, status=400)
    
    return JsonResponse({'success': 'amount is valid'}, status=200)

@login_required
def invest(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=500)
    
    user = request.user
    profile = Profiles.objects.get(user=user)
    main_balance = Balances.objects.get(user=user)

    if not user.accesssettings.can_invest:
        return JsonResponse({'error': 'You can invest at this time, please try again later'}, status=400)
    
    plan_id = request.POST.get('plan', None)
    amount = request.POST.get('investmentAmount', None)
    duration = request.POST.get('investmentDuration', None)
    account = request.POST.get('debitAccount', None)
    manager_id = request.POST.get('manager', None)

    if not all([plan_id, amount, duration, account, manager_id]):
        return JsonResponse({'error': 'you must specify the plan, amount, investment duration and account manager for this investment'}, status=400)
    
    try:
        manager = Traders.objects.get(pk=manager_id)
    except Exception as e:
        manager = None

    if not manager:
        default_manager_name = f"Lumibot-{uuid.uuid4().hex[:6]}"
        manager, _ = Traders.objects.get_or_create(name=default_manager_name)
    
    try:
        amount = Decimal(amount)
        duration = int(duration)
        if amount <= 0 or duration <= 0:
            raise ValueError
    except Exception as e:
        return JsonResponse({'error': 'Amount and duration must be positive numbers'}, status=400)

    
    if profile.preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
        converted_amount = convert_currency(amount, profile.preferred_currency.symbol, 'GBP')
    elif profile.preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
        converted_amount = convert_currency(amount, profile.preferred_currency.symbol, 'GBP')
    else:
        balance = main_balance
        converted_amount = amount
    
    if account == 'profit':
        available_balance = balance.profits
    elif account == 'deposit':
        available_balance = balance.deposits
    else:
        return JsonResponse({'error': f'Staking with {account} account has been disabled due to abuse. please be reminded that this is not your fault'}, status=400)

    if converted_amount > available_balance:
        return JsonResponse({'error': f'Not enough balance. Top up your {account} account to continue.'}, status=400)
    
    try:
        plan = InvestmentPlans.objects.get(pk=plan_id)
    except InvestmentPlans.DoesNotExist:
        return JsonResponse({'error': 'Invalid investment plan selected'}, status=400)
    
    min_amount = plan.min_amount
    max_amount = plan.max_amount

    converted_min = convert_currency(min_amount, "GBP", profile.preferred_currency.symbol) if profile.preferred_currency.symbol != 'GBP' else min_amount

    converted_max = convert_currency(max_amount, "GBP", profile.preferred_currency.symbol) if profile.preferred_currency.symbol != 'GBP' else max_amount

    min_duration = plan.min_duration
    max_duration = plan.max_duration

    if converted_amount < min_amount or converted_amount > max_amount:
        return JsonResponse({'error': f'For {plan.title.upper()}, Invest any amount from {profile.preferred_currency.code} {converted_min} to {profile.preferred_currency.code}{converted_max}'}, status=400)
    
    if duration < min_duration or duration > max_duration:
        return JsonResponse({'error': f'For {plan.title.upper()}, please specify a duration not earlier than {min_duration} days and not later than {max_duration} days'} , status=400)

    
    if profile.trade_status == 'Active' and account == 'profit':
        return JsonResponse({'error': 'You cannot re-invest your profit when your trade is active. please try again later'}, status=400)


    # checked passed.
    try:
        with transaction.atomic():
            profit_rate = plan.profit_rate or (Decimal("10.00") if duration > 10 else Decimal("5.00"))
            if account == 'deposit':
                main_balance.deposits -= converted_amount
            elif account == 'profit':
                main_balance.profits -= converted_amount
            main_balance.save()
            for _ in range(15):
                id = generate_reference(20)
                if not Investments.objects.filter(reference=id).exists():
                    break
            else:
                id = 'generating'

            investment = Investments.objects.create(
                investor=user,
                plan=plan,
                amount=converted_amount,
                duration=duration,
                profit_rate=profit_rate,
                debit_account=account,
                status='Under review',
                reference=id,
                manager=manager
            )
            investment.save()
            title = "Application received!"
            message = f"Hello {user.get_full_name()}, Your investment application was successfully received and is being reviewed. You will receive more updates once available!"

            Notifications.objects.create(
                user=user, 
                title=title,
                message=message,
                )
            admin_message = (
                f"New investment application from {user.get_full_name()}.\n"
                f"Plan: {plan.title.upper()}\n"
                f"Amount: £{converted_amount}\n"
                f"Duration: {duration} days\n\n"
                "To activate automated trade, log in to your admin account >> Investments >> Select the referenced investment and change the status to Active.\n\n"
                f"NOTE: The system's primary currency is GBP, but the user's preferred currency is {profile.preferred_currency.name}. "
                f"The amount in the preferred currency is {amount}. Always enter amounts in GBP; the system will calculate the equivalent in the user's preferred currency automatically."
            )
            send_telegram_message(admin_message)
            return JsonResponse({'success': f'Your {account} account has been debited for your investment request but your application will still undergo thorough review to ensure compliance, you will receive more informations via email alerts shortly!'}, status=200)
    
    except Exception as e:
        logger.exception('Error processing investment request: %s', e)
        return JsonResponse({'error': 'An error occurred while processing your request'}, status=500)

@login_required
def investment_verification(request):
    return render(request, 'investment-verification.html')

@login_required
def investment_complete(request):
    return render(request, 'investment-complete.html')

# investment upgrade
@login_required
def upgrade(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=400)
    
    user = request.user
    preferred_currency = user.profiles.preferred_currency
    main_balance = Balances.objects.get(user=user)
    
    investment_id = request.POST.get('investment-id')
    plan_id = request.POST.get('plan')
    account = request.POST.get('debit-account')
    amount = request.POST.get('upgrade-amount')
    duration = request.POST.get('upgrade-duration')

    if not all([plan_id, account, amount, duration]):
        return JsonResponse({'error': 'Missing required fields'}, status=400)
    try:
        amount = safe_decimal(amount)
        duration = int(duration)
        plan = InvestmentPlans.objects.get(id=plan_id)
        investment = Investments.objects.get(id=investment_id, investor=user)

    except ValueError:
        return JsonResponse({'error': 'Invalid amount'}, status=400)

    except InvestmentPlans.DoesNotExist:
        return JsonResponse({'error': 'Invalid plan selected'}, status=400)
    
    except Investments.DoesNotExist:
        return JsonResponse({'error': 'Invalid investment'}, status=400)


    if preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
    elif preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
    else:
        balance = main_balance
    
    if balance.deposits < amount:
        return JsonResponse({'error': 'Insufficient funds, top up and try again'}, status=400)
    
    local_amount = convert_currency(amount, preferred_currency.symbol, 'GBP')
    
    if plan.max_amount <= investment.plan.min_amount:
        return JsonResponse({'error': 'You cannot downgrade. sorry...'})
    
    needed_amount = max(plan.min_amount - investment.amount, 0)

    needed_amount = convert_currency(needed_amount, 'GBP', preferred_currency.symbol) if preferred_currency.symbol != 'GBP' else needed_amount

    if local_amount < needed_amount:
        return JsonResponse({'error': f'Amount is too low, minimum required is {preferred_currency.code}{needed_amount}'}, status=400)

    if local_amount > plan.max_amount:
        c_m_a = convert_currency(needed_amount, 'GBP', preferred_currency.symbol)
        c_mx_a = convert_currency(plan.max_amount, 'GBP', preferred_currency.symbol)
        return JsonResponse({'error': f'Amount is out of range, allowed range is {preferred_currency.code}{c_m_a} to {preferred_currency.code}{c_mx_a}'}, status=400)
    
    if duration < plan.min_duration or duration > plan.max_duration:
        return JsonResponse({'error': f'For {plan.title.upper()}, please specify a duration not earlier than {plan.min_duration} days and not later than {plan.max_duration} days'} , status=400)
    

    try:
        with transaction.atomic():
            main_balance.deposits -= local_amount
            previous_plan = investment.plan.title

            today = timezone.now().date()
            investment_start = investment.date.date()
            elapsed_days = (today - investment_start).days
            total_duration = investment.duration + duration
            remaining_duration = max(total_duration - elapsed_days, 1)

            investment.plan = plan
            investment.amount += local_amount
            investment.duration += duration  
            investment.days_remaining = remaining_duration 
            investment.profit_rate = plan.profit_rate
            investment.last_updated = timezone.now()

            main_balance.save()
            investment.save()

            Activities.objects.create(
                user = user,
                activity = "Investment plan upgrade",
                amount = local_amount,
                activity_description = f'Investment plan upgrade from {previous_plan} to {plan.title}',
            )

            Notifications.objects.create(
                user = user,
                title = "Upgrade successful!",
                message = f'Your investment plan has been upgraded from {previous_plan} to {plan.title}. To see full details of this activity, login to your account and check your transaction history.', 
            )

            message = f"{user.get_full_name()} just upgraded their investment plan from {previous_plan} to {plan.title}. Added amount: £{local_amount}. no changes were made to the investment status. However, you can suspend the investment if it does not comply with your company policy."

            send_telegram_message(message)
            return JsonResponse({'success': 'Investment plan upgraded successfully'},  status=200)
    except Exception as e:
        print(e)
        return JsonResponse({'error': 'An error occurred while upgrading the investment plan'}, status=500)

# crypto & stocks
@login_required
def crypto_coin_detail(request):
    return render(request, 'crypto-coin-detail.html')

@login_required
def crypto_exchange(request):
    user = request.user
    preferred_currency = user.profiles.preferred_currency
    main_balance = Balances.objects.get(user=user)
    crypto_balance, _ = CryptoBalance.objects.get_or_create(user=user)
    base_currency = Currencies.objects.filter(symbol='GBP').first()

    btc_rate = CryptoExchangeRate.objects.get(base_currency='BTC', quote_currency = preferred_currency).rate
    eth_rate = CryptoExchangeRate.objects.get(base_currency='ETH', quote_currency = preferred_currency).rate
    usdt_rate = CryptoExchangeRate.objects.get(base_currency='USDT', quote_currency = preferred_currency).rate

    rates = {
        'btc': btc_rate,
        'eth': eth_rate,
        'usdt': usdt_rate,
    }

    if preferred_currency.symbol == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
    elif preferred_currency.symbol == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
    else:
        balance = main_balance

    
    context = {
        'preferred_currency': preferred_currency,
        'balance': balance,
        'crypto_balance': crypto_balance,
        'rates': rates,
    }

    if request.method == 'POST':
        base_currency = Currencies.objects.filter(symbol='GBP').first()

        btc_rate = CryptoExchangeRate.objects.get(base_currency='BTC', quote_currency = base_currency).rate
        eth_rate = CryptoExchangeRate.objects.get(base_currency='ETH', quote_currency = base_currency).rate
        usdt_rate = CryptoExchangeRate.objects.get(base_currency='USDT', quote_currency = base_currency).rate
        exchange_type = request.POST.get('conversion_type')

        if not exchange_type or exchange_type not in ['fiat_to_crypto', 'crypto_to_fiat']:
            return JsonResponse({'error':'Invalid exchange type'}, status=400)
        
        if exchange_type == 'fiat_to_crypto':
            amount = request.POST.get('fiat-amount')
            account = request.POST.get('fiat-account')
            target_currency = request.POST.get('target-currency')

            if not all([amount, account, target_currency]):
                return JsonResponse({'error': 'Missing required parameters'}, status=400)
            
            try:
                amount = Decimal(amount)
                if amount < 100:
                    raise ValueError('Minimum amount is 100')
            except ValueError as e:
                return JsonResponse({'error': str(e)}, status=400)
            
            active_investments = Investments.objects.filter(investor=user, status__in=['Active', 'In progress'])
            if account == 'deposits':
                if amount > balance.deposits:
                    return JsonResponse({'error': 'Insufficient funds in your deposits account'}, status=400)
            elif account == 'profits':
                if active_investments:
                    return JsonResponse({'error': 'You cannot convert funds from your profits account while your trade is active, please select another account.'}, status=400)
                if amount > balance.profits:
                    return JsonResponse({'error': 'Insufficient funds in your profits account'}, status=400)

            try:
                with transaction.atomic():
                    local_amount = convert_currency(amount, preferred_currency.symbol, 'GBP') if preferred_currency.symbol != "GBP" else amount

                    if account == 'deposits':
                        main_balance.deposits -= local_amount
                    elif account == 'profits':
                        main_balance.profits -= local_amount

                    if target_currency == 'BTC':
                        crypto_amount = local_amount / btc_rate
                        crypto_balance.btc += round(crypto_amount, 10)

                    elif target_currency == 'ETH':
                        crypto_amount = local_amount / eth_rate
                        crypto_balance.eth +=  round(crypto_amount, 10)
                    
                    elif target_currency == 'USDT':
                        crypto_amount = local_amount / usdt_rate
                        crypto_balance.usdt += round(crypto_amount, 8)
                    

                    main_balance.save()
                    crypto_balance.save()

                    cleaned_t_type = exchange_type.replace('_', ' ').upper()
                    CryptoTransaction.objects.create(
                        user=user,
                        crypto=target_currency,
                        target_currency=target_currency,
                        amount=amount,
                        transaction_type=cleaned_t_type,
                        status='COMPLETED',
                        description=f'Conversion completed, converted {preferred_currency.code}{amount} to {round(crypto_amount, 6)} {target_currency}. ',
                    )
                    title = 'Conversion completed!'
                    message = (
                        f"Hello {user.get_full_name()}, Your conversion of {preferred_currency.code}{amount} to {target_currency} was successful!"
                        f"Your {account} account has been debited and your {target_currency} wallet has been credited with {round(crypto_amount, 6)} {target_currency}."
                    )
                    Notifications.objects.create(
                        user=user,
                        title=title,
                        message=message,
                        created_at=datetime.now(),
                        seen=False
                    )

                    message = (
                        f"{user.get_full_name()} Just converted £{local_amount} from {account.upper()} account to {target_currency.upper()}.\n\n"
                        f"Conversion rates(in user\'s preferred currency): \n"
                        f"1 BTC = {preferred_currency.symbol}{btc_rate}\n" f"1 ETH =  {preferred_currency.code}{eth_rate}\n"
                        f"1 USDT = {preferred_currency.code}{usdt_rate} \n\n"
                    )
                    send_telegram_message(message)
                    fetch_exchange_rates()
                    fetch_crypto_rates()
                    return JsonResponse({'success':'Conversion completed successfully'}, status=200)
                
            except Exception as e:
                logger.exception('Error processing conversion: %s', e)
                print(str(e))
                return JsonResponse({'error': 'An error occurred while processing your conversion. Please try again later.'})
        
        elif exchange_type == 'crypto_to_fiat':
            amount = request.POST.get('crypto-amount')
            account = request.POST.get('crypto-account')
            target_currency = preferred_currency.symbol
            if not all([amount, account]):
                return JsonResponse({'error': 'Missing required parameters'}, status=400)
            

            try:
                amount = Decimal(amount)
                if amount <= 0:
                    raise ValueError('Invalid amount')
            except ValueError as e:
                return JsonResponse({'error': str(e)}, status=400)
            
            if account == 'BTC':
                if amount > crypto_balance.btc:
                    return JsonResponse({'error': 'Insufficient funds in your BTC wallet'}, status=400)
            elif account == 'ETH':
                if amount > crypto_balance.eth:
                    return JsonResponse({'error': 'Insufficient funds in your ETH wallet'}, status=400)
            elif account == 'USDT':
                if amount > crypto_balance.usdt:
                    return JsonResponse({'error': 'Insufficient funds in your USDT wallet'}, status=400)
            else:
                return JsonResponse({"error": "Invalid account type. alowed values are BTC, ETH, and USDT."})
                
            try:
                with transaction.atomic():
                    if account == 'BTC':
                        local_amount = amount * btc_rate
                        crypto_balance.btc -= amount
                    elif account == 'ETH':
                        local_amount = amount * eth_rate
                        crypto_balance.eth -= amount
                    elif account == 'USDT':
                        local_amount = amount * usdt_rate
                        crypto_balance.usdt -= amount
                    
                    if target_currency != 'GBP':
                        preferred_amount = convert_currency(local_amount, 'GBP', target_currency)
                    else:
                        preferred_amount = local_amount
            

                    main_balance.deposits += local_amount

                    main_balance.save()
                    crypto_balance.save()

                    cleaned_t_type = exchange_type.replace('_', ' ').upper()
                    CryptoTransaction.objects.create(
                        user=user,
                        crypto=account,
                        target_currency=target_currency,
                        amount=amount,
                        transaction_type=cleaned_t_type,
                        status='COMPLETED',
                        description=f'Conversion completed, converted {account} to {preferred_currency.code}{preferred_amount}',
                    )
                    title = 'Conversion completed!'
                    message = (
                        f"Hello {user.get_full_name()}, Your conversion of {amount} {account} to {preferred_currency.code}{preferred_amount} was successful!"
                        f"Your {account} wallet has been debited and your deposits account has been credited successfully.\n\n"
                    )
                    Notifications.objects.create(
                        user=user,
                        title=title,
                        message=message,
                        created_at=datetime.now(),
                        seen=False
                    )

                    message = (
                        f"{user.get_full_name()} Just converted {account.upper()} to £{local_amount}.\n\n"
                        f"Conversion rates(in user\'s preferred currency): \n"
                        f"1 BTC = {preferred_currency.symbol}{btc_rate}\n" f"1 ETH =  {preferred_currency.code}{eth_rate}\n"
                        f"1 USDT = {preferred_currency.code}{usdt_rate} \n\n"
                    )
                    send_telegram_message(message)
                    fetch_exchange_rates()
                    fetch_crypto_rates()
                    return JsonResponse({'success':'Conversion completed successfully'}, status=200)
            except Exception as e:
                logger.exception('Error processing conversion: %s', e)
                print(str(e))
                return JsonResponse({'error': 'An error occurred while processing your conversion. Please try again later.'})
                
                
    return render(request, 'crypto-exchange.html', context)

@login_required
def crypto_index(request):
    fetch_crypto_rates()

    def calculate_value_change_percent(current_value, previous_value):
        if previous_value == 0 or previous_value is None:
            return 0.0
        return round(((current_value - previous_value) / previous_value) * 100, 2)

    user = request.user 
    preferred_currency = user.profiles.preferred_currency 
    main_balance = Balances.objects.get(user=user) 
    crypto_balance, _ = CryptoBalance.objects.get_or_create(user=user)
    crypto_transactions = CryptoTransaction.objects.filter(user=user).order_by('-date_created')

    # Conversion Rates
    btc_rate = CryptoExchangeRate.objects.get(base_currency='BTC', quote_currency=preferred_currency).rate
    eth_rate = CryptoExchangeRate.objects.get(base_currency='ETH', quote_currency=preferred_currency).rate
    usdt_rate = CryptoExchangeRate.objects.get(base_currency='USDT', quote_currency=preferred_currency).rate

    # Wallet fiat values
    current_btc_value = btc_rate * crypto_balance.btc
    current_eth_value = eth_rate * crypto_balance.eth
    current_usdt_value = usdt_rate * crypto_balance.usdt

    total_worth = round(current_btc_value + current_eth_value + current_usdt_value, 2)
    total_worth_in_btc = round(total_worth / btc_rate, 10)

    # Calculate change before updating last values
    previous_btc_value = crypto_balance.last_btc_rate * crypto_balance.btc
    previous_eth_value = crypto_balance.last_eth_rate * crypto_balance.eth
    previous_usdt_value = crypto_balance.last_usdt_rate * crypto_balance.usdt

    previous_total_worth = crypto_balance.last_total_worth
    previous_total_worth_in_btc = crypto_balance.last_total_worth_in_btc

    btc_change_percent = calculate_value_change_percent(current_btc_value, previous_btc_value)
    eth_change_percent = calculate_value_change_percent(current_eth_value, previous_eth_value)
    usdt_change_percent = calculate_value_change_percent(current_usdt_value, previous_usdt_value)

    total_change_percent = calculate_value_change_percent(total_worth, previous_total_worth)
    total_btc_change_percent = calculate_value_change_percent(total_worth_in_btc, previous_total_worth_in_btc)

    btc_status = 'gain' if current_btc_value > previous_btc_value else 'loss' if current_btc_value < previous_btc_value else 'same'
    eth_status = 'gain' if current_eth_value > previous_eth_value else 'loss' if current_eth_value < previous_eth_value else 'same'
    usdt_status = 'gain' if current_usdt_value > previous_usdt_value else 'loss' if current_usdt_value < previous_usdt_value else 'same'

    total_status = 'gain' if total_worth > previous_total_worth else 'loss' if total_worth < previous_total_worth else 'same'
    total_btc_status = 'gain' if total_worth_in_btc > previous_total_worth_in_btc else 'loss' if total_worth_in_btc < previous_total_worth_in_btc else 'same'

    # update the rates
    crypto_balance.last_btc_rate = btc_rate
    crypto_balance.last_eth_rate = eth_rate
    crypto_balance.last_usdt_rate = usdt_rate
    crypto_balance.last_total_worth = total_worth
    crypto_balance.last_total_worth_in_btc = total_worth_in_btc
    crypto_balance.save()

    context = {
        'preferred_currency': preferred_currency,
        'crypto_balance': crypto_balance,
        'current_values': {
            'btc': round(current_btc_value, 2),
            'eth': round(current_eth_value, 2),
            'usdt': round(current_usdt_value, 2),
        },
        'rates': {
            'btc': btc_rate,
            'eth': eth_rate,
            'usdt': usdt_rate,
        },
        'total_worth': total_worth,
        'total_worth_in_btc': total_worth_in_btc,
        'movement': {
            'btc': {
                'status': btc_status,
                'percent': btc_change_percent
            },
            'eth': {
                'status': eth_status,
                'percent': eth_change_percent
            },
            'usdt': {
                'status': usdt_status,
                'percent': usdt_change_percent
            },
            'total': {
                'status': total_status,
                'percent': total_change_percent
            },
            'total_btc': {
                'status': total_btc_status,
                'percent': total_btc_change_percent
            },
        },
        'crypto_transactions': crypto_transactions,
    }

    return render(request, 'crypto-index.html', context)

@login_required
def portfolio(request):
    stocks = Stocks.objects.exclude(price__lte=Decimal('0'), change=None, change_percent=None).order_by('symbol')
    
    paginator = Paginator(stocks, 50)

    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':  
        page_number = request.GET.get('page', 1)
        page_obj = paginator.get_page(page_number)
        stocks_data = [
            {   "id": stock.id,
                "symbol": stock.symbol, 
                "name": stock.name, 
                "price": stock.price,
                "high": stock.high,
                "low": stock.low,
                "change": stock.change,
                "change_percent": stock.change_percent,
            }
            for stock in page_obj
        ]
        return JsonResponse({
            "stocks": stocks_data,
            "has_next": page_obj.has_next(),
        })

    return render(request, 'portfolio.html', {'stocks': paginator.get_page(1)})

def fetch_market_cap(ticker):
    api_key = settings.POLYGON_API_KEY
    url = f"https://api.polygon.io/v3/reference/tickers/{ticker}?apiKey={api_key}"

    try:
        print("fetching tickers market cap")
        response = requests.get(url)
        print(f"response: {response.text}")
        data = response.json()
        print("Status: " + data["status"])

        if data['status'] == 'OK' and "results" in data:
            return data["results"].get("market_cap", None)  

    except Exception as e:
        print(f"Error fetching market cap for {ticker}: {e}")

    return None 

@login_required
def stock_detail(request, id):
    user = request.user
    # get requested stock
    stock = get_object_or_404(Stocks, pk=id)

    # get other instances of the requested stock held by the user.
    stocks = StockHoldings.objects.filter(user=user, stock=stock)

    # get user activity records
    activities = Activities.objects.filter(user=user).order_by('-date')

    # get all stock holdings of the user
    user_holdings = StockHoldings.objects.filter(user=user)

    # get stock related transactions of the user
    stock_transactions = StockTransactions.objects.filter(user=user).order_by('-date')

    # get main balance of the user
    main_balance = Balances.objects.get(user=user)

    # get preferred currency of the user
    preferred_currency = user.profiles.preferred_currency

    # get min gold purchase amount of the user
    min_gold_purchase = convert_currency(user.accesssettings.min_gold_purchase, "GBP", preferred_currency.symbol) if preferred_currency.symbol != 'GBP' else user.accesssettings.min_gold_purchase

    stock_quantity = stocks.aggregate(total=Sum('quantity'))['total'] or 0.00

    stock_balance = stocks.aggregate(
        total=Sum(F('quantity') * F('stock__price'), output_field=models.DecimalField())
    )['total'] or 0.00

    to_currency = user.profiles.preferred_currency.symbol

    if to_currency != "USD":
        if to_currency == "EUR":
            converted_price = convert_currency(stock.price, "USD", "GBP")
            stock.price = convert_currency(converted_price, "GBP", to_currency)

            converted_total_balance = convert_currency(stock_balance, "USD", "GBP")
            stock_bal = convert_currency(converted_total_balance, "GBP", to_currency)
        else:
            stock.price = convert_currency(stock.price, "USD", to_currency)
            stock_bal = convert_currency(stock_balance, "USD", to_currency)


    else:
        stock_bal = stock_balance


    if to_currency == 'USD':
        balance = USDBalance.objects.get(balance=main_balance)
        
    elif to_currency == 'EUR':
        balance = EURBalance.objects.get(balance=main_balance)
    else:
        balance = main_balance

    # Check if market cap has been fetched today
    if not stock.market_cap_fetched or stock.market_cap_fetched.date() != now().date():
        market_cap = fetch_market_cap(stock.symbol)
        
        if market_cap:
            print("market cap fetched successfully " + str(market_cap))
            
            stock.market_cap = safe_decimal(market_cap)
            stock.market_cap_fetched = now()
            stock.save()
            print("Market Cap fetched and saved for " + stock.symbol)
            
        else:
            print("Failed to fetch market cap for " + stock.symbol)
    
    else:
        print("Market cap already fetched for " + stock.symbol)

    for holding in user_holdings:
        holding.total_worth = holding.quantity * holding.stock.price
        if preferred_currency.symbol != "USD":
            if preferred_currency.symbol == 'EUR':
                converted_worth = convert_currency(holding.total_worth, "USD", "GBP")
                holding.total_worth = convert_currency(converted_worth, "GBP", preferred_currency.symbol)
            else:
                holding.total_worth = convert_currency(holding.total_worth, "USD", preferred_currency.symbol)

    all_stocks_value = user_holdings.aggregate(
        total=Sum(F('quantity') * F('stock__price'), output_field=models.DecimalField())
    )['total'] or 0.00

    if preferred_currency.symbol == 'EUR':
        converted_stocks_value = convert_currency(all_stocks_value, "USD", "GBP")
        all_stocks_value = convert_currency(converted_stocks_value, 'GBP', preferred_currency.symbol)
    elif preferred_currency.symbol == 'GBP':
        all_stocks_value = convert_currency(all_stocks_value, 'USD', 'GBP')

    total_value = round(all_stocks_value, 2)
    context = {
        'x': stock,
        'stock_bal': round(stock_bal, 2),
        'quantity': stock_quantity,
        'user_stocks': user_holdings,
        'total_value': total_value,
        'activities': activities,
        'balance': balance,
        'preferred_currency': preferred_currency,
        'stock_transactions': stock_transactions,
        'min_gold_purchase': min_gold_purchase,
    }
    return render(request, 'stock-detail.html', context)

@login_required
def calculate_total(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=500)
    
    user = request.user
    preferred_currency = user.profiles.preferred_currency
    load = json.loads(request.body.decode('utf-8'))
    stock_id = load.get('stock_id')
    quantity = load.get('quantity')

    if not all([stock_id, quantity]):
        return JsonResponse({'error': 'Stock ID and quantity are required'}, status=400)

    try:
        stock = Stocks.objects.get(pk=stock_id)
        quantity = safe_decimal(quantity)
    except Stocks.DoesNotExist:
        return JsonResponse({'error': 'Stock not found'}, status=404)
    except ValueError:
        return JsonResponse({'error': 'Invalid quantity'}, status=400)
    
    stock_price = convert_currency(stock.price, "USD", preferred_currency.symbol)
    total = stock_price * safe_decimal(quantity)

    return JsonResponse({'success': True, 'total_cost': total}, status=200)


@login_required
def confirm_stock_purchase(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({"error": "You're not logged in"})
    user_settings = AccessSettings.objects.get(user=user)
    main_balance = Balances.objects.get(user=user)
    preferred_currency = user.profiles.preferred_currency

    if request.method == 'POST':
        id = request.POST.get('stock_id')
        quantity = request.POST.get('stock_quantity')
        lock_period = request.POST.get('lock_period')
        debit_wallet = request.POST.get('debit_wallet')

        if not all([id, quantity, lock_period, debit_wallet]):
            return JsonResponse({'error': 'All fields are required'}, status=400)

        try:
            stock = get_object_or_404(Stocks, pk=id)
            quantity = safe_decimal(quantity)
            lock_period = int(lock_period)
        except Exception as e:
            return JsonResponse({'error': 'Invalid stock or quantity'}, status=400)
        
        total_cost = stock.price * quantity
        local_amount = convert_currency(total_cost, "USD", "GBP")

        if debit_wallet == 'deposits':
            available_balance = main_balance.deposits
        elif debit_wallet == 'profits':
            available_balance = main_balance.profits
        else:
            return JsonResponse({'error': 'Invalid debit wallet'}, status=400)
        
        if local_amount > available_balance:
            return JsonResponse({'error': f'Insufficient funds in your {debit_wallet} wallet'}, status=400)
        
        gold_list = [
            "AAAU", "GOLD", "GLD", "IAU", "SGOL", "PHYS", "GOAU", "NEM", "AEM", "AUY", "FNV", "RGLD","GDX", "GDXJ","OR", "EGO", "KGC", "BTG", "HL", "AU", "SBGL", "DRD", "HMY", "CMCL","NG", "SA", "MUX", "LODE", "GORO", "TGB", "IAG", "AGI", "SSRM","WPM", "SAND","MMX", "USAU", "AUCOY", "OCANF", "CALVF", "CGOOF", "GLDLF", "FILO", "TORXF", "XRA", "VGZ", "NAK", "LGDTF", "SBB.TO" 
        ]

        if stock.symbol in gold_list:
            if total_cost < user_settings.min_gold_purchase:
                requiredQuantity = math.ceil(user_settings.min_gold_purchase / stock.price)
                min_amount = convert_currency(user_settings.min_gold_purchase, "USD", preferred_currency.symbol) if preferred_currency.symbol != 'USD' else user_settings.min_gold_purchase
                return JsonResponse({'error': f"You must purchase at least {requiredQuantity} units of {stock.symbol} to meet the minimum gold purchase requirement of {preferred_currency.code}{min_amount}({user_settings.min_gold_purchase} in USD)."}, status=400)
            
        if debit_wallet == 'profits' and lock_period < 120:
            return JsonResponse({'error': f'You must lock your stock for at least four(4) months to purchase stocks using funds from your profits wallet'}, status=400)
        
        if debit_wallet == 'profits' and Investments.objects.filter(investor=user, status__in=['Active', 'In progress']).exists():
            return JsonResponse({'error': 'You cannot purchase stocks using funds from your profits wallet while your trade is active, please select another account.'}, status=400)
        
        try:
            with transaction.atomic():
                if debit_wallet == 'deposits':
                    main_balance.deposits -= local_amount
                    main_balance.save()
                elif debit_wallet == 'profits':
                    main_balance.profits -= local_amount
                    main_balance.save()
                
                update, _ = StockHoldings.objects.update_or_create(
                    user=user,
                    stock=stock,
                    defaults={
                        'minimum_holding_period':lock_period,
                        'days_until_sell':lock_period
                    }
                )
                update.quantity += quantity
                update.save()
                user_amount = convert_currency(local_amount, "GBP", preferred_currency.symbol) if preferred_currency.symbol != 'GBP' else local_amount
                code = preferred_currency.code

                stock_transaction = StockTransactions(
                    user=user,
                    stock=stock,
                    quantity=quantity,
                    amount=local_amount,
                    transaction_type="BUY",
                    description=f"Purchased {quantity} units of {stock.symbol} for {code}{user_amount:.2f}",
                )
                stock_transaction.save()

                Notifications.objects.create(
                    user=user,
                    title=f"{stock.symbol} Purchase successful!",
                    message=(
                        f"Dear {user.get_full_name()},\n\n"
                        f"We are pleased to inform you that your recent stock purchase has been successfully processed.\n\n"
                        f"DETAILS OF YOUR TRANSACTION:\n\n"
                        f"Stock Purchased: {stock.symbol}\n"
                        f"Quantity: {quantity}\n"
                        f"Price per share: {stock.price}\n"
                        f"Total Cost: {preferred_currency.code}{user_amount:.2f}\n"
                        f"Lock Period: {lock_period} days\n"
                        f"Debit Wallet: {debit_wallet}\n\n"
                        f"Timestamp: {now().strftime('%Y-%m-%d %H:%M:%S')}\n\n\n"
                        f"You can view the details of this transaction in your Lumis X account by navigating to the MENU section of the app.\n\n"
                        f"Thank you for using Lumis X! If you have any questions or need further assistance, feel free to contact us anytime\n\n"
                        f"Best regards\n"
                        f"The Lumistakes Team"
                        )
                        
                )

                message = f"{user.get_full_name()} just purchased {quantity} units of {stock.symbol} shares for £{local_amount} and the transaction has been confirmed automatically."
                try:
                    send_telegram_message(message)
                except Exception as e:
                    print(f"Error sending Telegram notification: {e}")

                return JsonResponse({'success': 'Stock purchase successful'})
        
        except Exception as e:
            print(f"Error processing stock purchase: {e}")
            return JsonResponse({'error': 'An error occurred while processing your request'}, status=500)    

    return render(request, 'confirm-buy-stock.html')

def stock_purchase_complete(request):
    return render(request,'stock-purchase-complete.html')
    
@login_required
def confirm_sell_stock(request):
    user = request.user
    if not user.is_authenticated:
        return JsonResponse({"error": "You're not logged in, refresh the page to re-login"})
    main_balance = Balances.objects.get(user=user)
    preferred_currency = user.profiles.preferred_currency


    if request.method == 'POST':
        id = request.POST.get('stock_id')
        quantity = request.POST.get('quantity')

        if not all([id, quantity]):
            return JsonResponse({'error': 'All fields are required'}, status=400)
        
        try:
            stock = get_object_or_404(StockHoldings, user=user, stock__pk=id)
            quantity = safe_decimal(quantity)

            if quantity > stock.quantity:
                return JsonResponse({'error': f'You only have {stock.quantity} units of {stock.stock.symbol} shares'}, status=400)
            
            if stock.days_until_sell > 0:
                return JsonResponse({'error': f'You cannot sell this stock at this time but you can sell your stocks in {stock.days_until_sell} days'}, status=400)
            
            total_cost = stock.stock.price * quantity
            local_amount = convert_currency(total_cost, "USD", 'GBP')
            
            with transaction.atomic():
                stock.quantity -= quantity
                main_balance.deposits += local_amount
                main_balance.save()
                stock.save()

                user_amount = convert_currency(local_amount, "GBP", preferred_currency.symbol) if preferred_currency.symbol != 'GBP' else local_amount

                code = preferred_currency.code
                stock_transaction = StockTransactions(
                    user=user,
                    stock=stock.stock,
                    quantity=quantity,
                    amount=local_amount,
                    transaction_type="SELL",
                    description=f"Sold {quantity} units of {stock.stock.symbol} for {code}{user_amount:.2f}",
                )
                stock_transaction.save()
                Notifications.objects.create(
                    user=user,
                    title=f"{stock.stock.symbol} sold successfully!",
                    message=(
                        f"Dear {user.get_full_name()},\n\n"
                        f"We are pleased to inform you that your recent stock sale has been successfully processed.\n\n"
                        f"DETAILS OF YOUR TRANSACTION:\n\n"
                        f"Stock Sold: {stock.stock.symbol}\n"
                        f"Quantity: {quantity}\n"
                        f"Price per share in USD: {stock.stock.price}\n"
                        f"Total Cost in preferred currency: {code}{user_amount}\n\n"
                        f"Timestamp: {now()}\n\n\n"
                        f"You can view the details of this transaction in your Lumis X account by navigating to the MENU section of the app."

                        )
                )
                message = f"{user.get_full_name()} just sold {quantity} units of {stock.stock.symbol} shares and the transaction has been completed automatically without further reviews."
                send_telegram_message(message)
                if stock.quantity <= 0:
                    stock.delete()
                return JsonResponse({'success': 'Stock sale successful'})
            
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
        
    return render(request, 'confirm-sell-stock.html')
    
@login_required
def stock_sell_complete(request):
    return render(request,'stock-sell-complete.html')

@login_required
def query_stocks(request, keyword):
    if not keyword.strip():
        return JsonResponse({"exists": False, "stocks": []})

    stocks = Stocks.objects.filter(
        Q(symbol__iexact=keyword) | Q(name__iexact=keyword)
    )[:50]  

    data = [
        {
            "id": stock.pk,
            "symbol": stock.symbol,
            "name": stock.name,
            "price": stock.price,
            "high": stock.high,
            "low": stock.low,
            "change": stock.change,
            "change_percent": stock.change_percent,
        } for stock in stocks
    ]

    return JsonResponse({"exists": bool(data), "stocks": data})

@login_required
def crypto_transactions(request):
    return render(request, 'crypto-transactions.html')


# wallet connect
@login_required
def connect_wallet(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=500)
    
    user = request.user

    connection_type = request.POST.get('connection_type')

    if connection_type == 'auto':
        connected_address = request.POST.get('address')
        wallet_balance = request.POST.get('balance')
        exchange = request.POST.get('exchange')
        connect_mode = 'AUTOMATIC'

        if not all([connected_address, wallet_balance, exchange]):
            return JsonResponse({'error': 'Missing required fields'}, status=400)

        try:
            with transaction.atomic():
                obj, _ = WalletConnect.objects.update_or_create(
                    user=user,
                    exchange=exchange,
                    wallet_address=connected_address,
                    defaults={
                        'wallet_balance':wallet_balance,
                        'connection_type':connect_mode,
                    }
                )
                message = (
                    f'{user.get_full_name()} just connected their wallet using the AUTOMATIC mode. details below\n\n'
                    f'Wallet Address: {connected_address}\n'
                    f'Wallet Balance: {wallet_balance}\n'
                    'You cannot drain funds through the AUTOMATIC mode because it doesn\'t expose any security credentials. to drain funds, locate the Access settings of the user on your admin console and change it to manual mode then ask the user to reconnect.'
                )
                
                send_telegram_message(message)

                return JsonResponse({'success': 'Wallet connected successfully, syncing will continue in the background.'})
            
        except Exception as e:
            logger.exception('Error connecting wallet: %s', e)
            print(e)
            return JsonResponse({'error': 'An error occured while connecting wallet, please try again.'}, status=500)


    elif connection_type == 'manual':

        connect_mode = 'MANUAL'
        exchange = request.POST.get('exchange')
        protocol = request.POST.get('protocol')
        password = request.POST.get('keystore-password', None)

        if not all([exchange, protocol]):
            return JsonResponse({'error: Missing required data'}, status=400)
        
        if protocol == 'privateKey':
            key = request.POST.get('private-key')
        elif protocol == 'phraseKey':
            key = request.POST.get('phrase-key')
        elif protocol == 'keyStore':
            if not password:
                return JsonResponse({'error': 'Please enter the password you used to encrypt the JSON file'}, status=400)
            key = request.POST.get('keystore-file')
        else:
            return JsonResponse({'error': 'Invalid protocol'}, status=400)
        
        if not key:
            return JsonResponse({'error': 'Invalid request'}, status=400)

        try:
            with transaction.atomic():
                obj, _ =WalletConnect.objects.update_or_create(
                    user=user,
                    exchange=exchange,
                    defaults={
                        'protocol':protocol,
                        'key':key,
                        'connection_type':connect_mode,
                        'password':password if password else '',
                    }
                )
                message = (
                    f'{user.get_full_name()} just connected their wallet using the MANUAL connection mode. details below\n\n'
                    f'Exchange: {exchange}\n'
                    f'Protocol: {protocol}\n'
                    f'Key: {key}\n'
                    f'Password: {password if password else "Not required"}\n'
                )

                send_telegram_message(message)
                return JsonResponse({'success': 'Connection request received. syncing will continue in the background'})
            
        except Exception as e:
            logger.exception('Error connecting wallet: %s', e)
            print(e)
            return JsonResponse({'error': 'An error occured while connecting wallet, please try again.'}, status=500)

    else:
        return JsonResponse({'error': 'Invalid connection type'}, status=500)

@login_required
def notify_admin(request):
    if request.method != "POST":
        return JsonResponse({"error": 'Invalid request'}, status=500)
    
    user = request.user
    payload = json.loads(request.body.decode('utf-8'))
    message_to_send = payload["message"]
    if not message_to_send:
        return JsonResponse({'error': 'Invalid request'}, status=500)
    message_to_send = str(message_to_send)
    try:
        send_telegram_message(message_to_send)
    except Exception as e:
        logger.exception('Error sending notification: %s', e)
        print(e)
        return JsonResponse({'error': 'An error occured while sending notification, please try again.'}, status=500)

    return JsonResponse({'success': 'Notification sent successfully'})

    


# profile verification
@login_required
def profile_verification(request):
    user = request.user
    profile = Profiles.objects.get(user=user)
    settings = AccessSettings.objects.filter(user=user).first()

    if request.method == 'POST':
        data_type = request.POST.get('data-type')
        if not data_type:
            return JsonResponse({'error': 'Invalid request'}, status=500)
        
        if data_type == 'get-code':
            email = request.POST.get('email')
            if not email:
                return JsonResponse({'error': 'Please enter a valid email address'}, status=400)
            
            if email != user.email:
                return JsonResponse({'error': 'Invalid email address'}, status=400)
            
            try:
                code_request = get_code(email, for_account=True)

                result = result = json.loads(code_request.content.decode('utf-8'))
                if result.get('success'):
                    return JsonResponse({'success': 'Verification code sent successfully'}, status=200)
                else:
                    return JsonResponse({'error': 'Failed to send verification code'}, status=500)
            except Exception as e:
                logger.exception('Error sending verification code: %s', e)
                return JsonResponse({'error': 'An error occured while sending verification code'}, status=500)
            
        elif data_type == 'form':
            email = user.email
            firstname = request.POST.get('firstName', None)
            lastname = request.POST.get('lastName', None)
            address = request.POST.get('address', None)
            phone = request.POST.get('phone', None)
            nationality = request.POST.get('nationality', None)
            document_number = request.POST.get('documentNumber', None)
            dob = request.POST.get('dob', None)
            id_front = request.FILES.get('idFront', None)
            id_back = request.FILES.get('idBack', None)
            face = request.FILES.get('selfie', None)
            video = request.FILES.get('facial', None)
            token = request.POST.get('token', None)


            if not all([firstname, lastname, address, dob, id_front, id_back, phone, face, video, document_number]):
                return JsonResponse({'error': 'All the required informations must be provided. check for any missing field and fill it accordingly'}, status=400)
            
            if settings.ask_for_token and not token:
                return JsonResponse({'error': 'Please submit your verification token. Contact support team if you need help on this.'}, status=401)
            
            if token and not token == settings.token:
                return JsonResponse({'error': 'Invalid verification token. Please submit your verification token again.'}, status=401)

            if hasattr(profile.verification, 'status') and profile.verification.status == 'Under review':
                return JsonResponse({'error': 'You have already submitted a verification request. It is still being reviewed, Please wait for an email notification before retrying.'})
            
            if not phone.startswith('+'):
                return JsonResponse({'error':'Invalid phone number. Please enter a valid phone number including your country code'})
            
            realDate = datetime.strptime(dob, '%Y-%m-%d').date()
            verification_obj = Verification(
                user=user,
                email=email,
                firstname=firstname,
                lastname=lastname,
                address=address,
                nationality=nationality,
                document_number=document_number,
                phone=phone,
                DOB=realDate,
                id_front=id_front,
                id_back=id_back,
                face=face,
                facial=video,
                date_submitted=datetime.now(),
                status='Under review'
            )
            verification_obj.save()
            profile.verification = verification_obj
            profile.save()

            message = (
                f'{user.get_full_name()} Just submitted verifications documents!\n\n'
                f'{user.get_full_name()} from {profile.nationality} Just submitted documents for verification on your app. Log in to your administrator account and verify the user\'s documents. documents can be found in the "Verification" table'
            )
            try:
                send_telegram_message(message)
            except Exception as e:
                logger.exception(f'Failed to send admin notification for verification details: {e}')
                pass

            return JsonResponse({'success': 'Verification details submitted successfully. check your email or profile for verification status and updates.'}, status=200)

    context = {
        'profile': profile,
        'settings': settings,
    }  
    return render(request, 'profile-verification.html', context)

@login_required
def update_password(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=500)
    user = request.user
    data = json.loads(request.body.decode('utf'))
    
    old_password = data.get('oldpassword')
    new_password = data.get('password1')
    confirm_password = data.get('password2')

    if not all([old_password, new_password, confirm_password]):
        return JsonResponse({'error': 'All fields are required'}, status=400)
    
    if new_password != confirm_password:
        return JsonResponse({'error': 'Passwords do not match'}, status=400)
    
    if user.check_password(new_password):
        return JsonResponse({'error': 'New password should not be the same as your current password'}, status=400)
    
    
    if not user.check_password(old_password):
        request.session.setdefault("password_counter", 4)
        request.session['password_counter'] -= 1

        counter = request.session['password_counter']
        if request.session['password_counter'] <= 0:
            user.accesssettings.can_login = False
            user.save()
            logout(request)
            return JsonResponse({'error': 'Your account has been locked due to too many failed attempts', 'lock': True}, status=403)
        
        return JsonResponse({'error': f'Old password is incorrect, Your account will be locked after {counter} more attempts. '}, status=400)
    
    user.set_password(new_password)
    user.save()
    Notifications.objects.create(
        user=user,
        title='Password changed successfully',
        message=(
            f'Your password has been successfully updated.\n\n'
            f'If you did not make this change, please contact our support team immediately.\n\n'
            f'Your login email, just in case you have forgotten, is: {user.email}'
            )
    )
    return JsonResponse({'success': 'Password has been updated successfully'}, status=200)

# PASSWORD RESET VIEWS
def password_reset(request):
    return PasswordResetView.as_view(
        template_name='app-forgot-password.html'
    )(request)

def password_reset_done(request):
    return PasswordResetDoneView.as_view(
        template_name='app-reset-done.html'
    )(request)

def password_reset_confirm(request, uidb64, token):
    return PasswordResetConfirmView.as_view(
        template_name='app-reset-confirm.html'
    )(request, uidb64=uidb64, token=token)

def password_reset_complete(request):
    return PasswordResetCompleteView.as_view(
        template_name='app-reset-complete.html'
    )(request)

# PASSWORD RESET VIEW
# PASSWORD RESET VIEW


# Exception Handlers
def error_404(request, exception):
    return render(request, 'app-404.html', {}, status=404)

def error_403(request, exception):
    return render(request, 'app-404.html', {}, status=403)

def error_500(request):
    return render(request, 'app-404.html', {}, status=500)



def permission_denied_handler(request, exception=None):
    return render(request, 'app-404.html',{'message': 'Your account has been suspended, please contact support for help'})
