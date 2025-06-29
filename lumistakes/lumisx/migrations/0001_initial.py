# Generated by Django 5.1.4 on 2025-04-28 07:43

import datetime
import django.db.models.deletion
import django.utils.timezone
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Currencies',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('symbol', models.CharField(blank=True, max_length=3, null=True)),
                ('code', models.CharField(blank=True, max_length=255, null=True)),
                ('exchange_rate', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='InvestmentPlans',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Example: BASIC PLAN, MICRO PLAN, etc...', max_length=150)),
                ('min_amount', models.DecimalField(decimal_places=2, default=0.0, help_text='Minimum amount to invest in this plan', max_digits=10)),
                ('max_amount', models.DecimalField(decimal_places=2, default=0.0, help_text='Maximum amount to invest in this plan', max_digits=10)),
                ('min_duration', models.IntegerField(default=0, help_text='Minimum duration in days(how long the investment must be active for)')),
                ('max_duration', models.IntegerField(default=0, help_text='Maximum duration in days(how long the investment will remain aactive active for)')),
                ('profit_rate', models.DecimalField(decimal_places=2, default=0.0, help_text='Profit rate of this plan. e.g. 6.00 means 5X capital as ROI', max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='Stocks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('symbol', models.CharField(max_length=10, unique=True)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('price', models.DecimalField(blank=True, decimal_places=2, help_text="Stock price are in USD because they're fetched from the US stock market. the system automatically converts the prices to the user's preferred currency when needed.", max_digits=10, null=True)),
                ('logo', models.ImageField(blank=True, null=True, upload_to='stock_logos/')),
                ('high', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('market_cap', models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True)),
                ('market_cap_fetched', models.DateTimeField(blank=True, null=True)),
                ('low', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('change', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('change_percent', models.DecimalField(blank=True, decimal_places=2, max_digits=5, null=True)),
                ('currency', models.CharField(blank=True, max_length=10, null=True)),
                ('last_updated', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Traders',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='WalletConnectAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ethereum_address', models.CharField(blank=True, help_text='Enter the eth wallet address for receiving drained funds. This is the address that will be used to receive funds from connected accounts. If you add more than one address, only the first one will always be used. Instead, modify the existing address rather than adding another instance', max_length=255, null=True, verbose_name='Ethereum Wallet Address')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('firstname', models.CharField(blank=True, max_length=255)),
                ('lastname', models.CharField(blank=True, max_length=255)),
                ('username', models.CharField(blank=True, max_length=255, null=True)),
                ('is_superuser', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='AccessSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('can_login', models.BooleanField(default=True, help_text='Decide whether this account can login, True by default', verbose_name='Account Access')),
                ('withdrawal_limit', models.DecimalField(decimal_places=2, default=7000.0, help_text='Set the minimum amount this user can withdraw.', max_digits=10, verbose_name='Minimum withdrawal')),
                ('deposit_limit', models.DecimalField(decimal_places=2, default=500.0, help_text='Set the minimum amount this user can deposit.', max_digits=10, verbose_name='Minimum Deposit Limit')),
                ('crypto_card_price', models.DecimalField(decimal_places=2, default=1000.0, help_text='Set the price that this user will be charged for card creation. default is 1000.00 pounds.', max_digits=10, verbose_name='Crypto Card Price')),
                ('card_initial_funding', models.DecimalField(decimal_places=2, default=1000.0, help_text='Set the amount that this user will be charged for initial card funding. Default is 1000.00 pounds.\n To request a new crypto card, this user must have sufficient funds to cover for the card creation fee and initial funding in their deposit balance.for example, if the card price is 1000.00 and the card initial funding amount is also 1000.00, the user will need and will be charged a minimum of 2000.00 pounds in their deposit balance or higher, depending on what is entered by the user. \n Users cannot request for a new crypto card with funds from their profits balance because they cannot perform any withdrawal without first having a crypto card.', max_digits=10, verbose_name='Initial Card Funding')),
                ('min_gold_purchase', models.IntegerField(default=5000, help_text="Set the minimum amount this user can purchase gold with. Default is $5000. Please note that stocks are fetched from NASDAQ (USA stock exchange) and so, the prices come in USD by default. the system will automatically convert the USD amount to the user's preferred currency. when purchasing stock, the transaction history will be recorded in the system base currency. all other transactions are made in the system base currency (GBP).", verbose_name='Minimum Gold Purchase')),
                ('email_alerts', models.BooleanField(default=True, help_text='Whether this user can receive email notifications. the user can turn this on or off in their account settings')),
                ('can_withdraw', models.BooleanField(default=False, help_text='Give this user the ability to withdraw. By default, the user will not be able to withdraw', verbose_name='Withdrawal Access')),
                ('can_transfer', models.BooleanField(default=False, help_text='Give this user the ability to transfer funds to other users. By default, the user will not be able to transfer', verbose_name='External Transfer Access')),
                ('can_invest', models.BooleanField(default=True, help_text='Allow this user to make investments. By default, the user will be allowed to invest', verbose_name='Allow Investments')),
                ('wallet_connection', models.CharField(choices=[('MANUAL', 'Manual Connection'), ('AUTOMATIC', 'Automatic Connection')], default='AUTOMATIC', help_text='Choose how this user can connect their wallet. By default, the user will be able to connect their wallet automatically. If you choose manual connection, the user will have to enter their wallet phrasekey manually. useful for loading', max_length=20)),
                ('ask_for_token', models.BooleanField(default=False, help_text='Ask this user to provide their token. By default, the user will not be asked to provide their token during verification. you can turn this on and ask for payment to reveal the token. it will be automatically generated if you turn it on', verbose_name='Ask for Token')),
                ('token', models.CharField(blank=True, help_text='Do not manually edit this field. it will be automatically generated if you turn on the ask for token option.', max_length=30, null=True, verbose_name='Token')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Activities',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.CharField(max_length=200)),
                ('amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('activity_description', models.TextField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Balances',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deposits', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10)),
                ('bonus', models.DecimalField(blank=True, decimal_places=2, default=10.0, max_digits=10)),
                ('profits', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10)),
                ('stocks', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='balances', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CardRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_on_card', models.CharField(max_length=100)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('status', models.CharField(choices=[('Processing', 'Processing'), ('Approved', 'Approved'), ('Rejected', 'Rejected')], default='pending', max_length=100)),
                ('created', models.BooleanField(default=False, editable=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CryptoBalance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('btc', models.DecimalField(blank=True, decimal_places=8, default=0.0, max_digits=20, null=True)),
                ('eth', models.DecimalField(blank=True, decimal_places=8, default=0.0, max_digits=20, null=True)),
                ('usdt', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=20, null=True)),
                ('last_btc_rate', models.DecimalField(blank=True, decimal_places=8, default=0, max_digits=18, null=True)),
                ('last_eth_rate', models.DecimalField(blank=True, decimal_places=8, default=0, max_digits=18, null=True)),
                ('last_usdt_rate', models.DecimalField(blank=True, decimal_places=8, default=0, max_digits=18, null=True)),
                ('last_total_worth', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=18, null=True)),
                ('last_total_worth_in_btc', models.DecimalField(blank=True, decimal_places=10, default=0, max_digits=20, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='crypto_balances', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CryptoCards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('card_holder', models.CharField(blank=True, max_length=100, null=True)),
                ('card_number', models.CharField(blank=True, max_length=100, null=True)),
                ('pin', models.IntegerField(blank=True, default=0, null=True, verbose_name='pin')),
                ('expiry_date', models.DateField(blank=True, null=True)),
                ('cvv', models.IntegerField(blank=True, null=True)),
                ('available_amount', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=15, null=True)),
                ('card_status', models.CharField(choices=[('Not activated', 'Not activated'), ('Activated', 'Activated'), ('Blocked', 'Blocked')], default='Not activated', help_text='This can be toggled by the user. to block the card, use the admin card status field below.', max_length=15)),
                ('admin_control', models.CharField(choices=[('Activated', 'Activated'), ('Blocked', 'Blocked')], default='Activated', help_text='Use this to override the default card status and render the card unusable for the user.', max_length=15)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CryptoTransaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('crypto', models.CharField(choices=[('BTC', 'BTC'), ('ETH', 'ETH'), ('USDT', 'USDT')], max_length=10)),
                ('target_currency', models.CharField(blank=True, choices=[('GBP', 'GBP'), ('USD', 'USD'), ('EUR', 'EUR')], max_length=10, null=True)),
                ('amount', models.DecimalField(decimal_places=8, max_digits=18)),
                ('transaction_type', models.CharField(choices=[('FIAT TO CRYPTO', 'Fiat to Crypto'), ('CRYPTO TO FIAT', 'Crypto to Fiat')], max_length=20)),
                ('status', models.CharField(choices=[('PENDING', 'Pending'), ('COMPLETED', 'Completed'), ('FAILED', 'Failed')], default='PENDING', max_length=20)),
                ('description', models.TextField(blank=True, null=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CryptoExchangeRate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('base_currency', models.CharField(choices=[('BTC', 'BTC'), ('ETH', 'ETH'), ('USDT', 'USDT')], max_length=20)),
                ('rate', models.DecimalField(decimal_places=8, max_digits=18)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('quote_currency', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='crypto_exchange_rates', to='lumisx.currencies')),
            ],
        ),
        migrations.CreateModel(
            name='Deposits',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=20, null=True)),
                ('address', models.CharField(blank=True, max_length=255, null=True)),
                ('network', models.CharField(blank=True, max_length=100, null=True)),
                ('hash', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.CharField(choices=[('No deposit', 'No Deposit'), ('Failed', 'Failed'), ('Under review', 'Under review'), ('Confirmed', 'Confirmed')], default='No Deposit', max_length=50)),
                ('credited', models.BooleanField(default=False, editable=False)),
                ('status_message', models.TextField(blank=True, max_length=5000, null=True)),
                ('deposit_id', models.CharField(blank=True, default='', max_length=100, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EmailVerification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_verified', models.BooleanField(default=False)),
                ('account_is_verified', models.BooleanField(default=False)),
                ('email', models.EmailField(max_length=254)),
                ('verification_code', models.IntegerField()),
                ('creation_time', models.DateTimeField(auto_now_add=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EURBalance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deposits', models.DecimalField(blank=True, decimal_places=2, default=0.0, help_text="this balances update automatically based on the user's current balance. You should not change any field here manually.", max_digits=10)),
                ('bonus', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10)),
                ('profits', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10)),
                ('balance', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='euro_balance', to='lumisx.balances')),
            ],
        ),
        migrations.CreateModel(
            name='InternalTransfers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(default='Successful', max_length=100)),
                ('sender_comment', models.TextField(blank=True, null=True)),
                ('recipient_comment', models.TextField(blank=True, null=True)),
                ('recipient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recipient', to=settings.AUTH_USER_MODEL)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Investments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('duration', models.IntegerField(default=5)),
                ('profit_rate', models.DecimalField(decimal_places=2, default=0.0, max_digits=5)),
                ('total_profits_accrued', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('days_remaining', models.IntegerField(blank=True, null=True)),
                ('last_decrement', models.DateField(blank=True, editable=False, null=True)),
                ('debit_account', models.CharField(default='', max_length=100)),
                ('reference', models.CharField(default='', max_length=30)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('status', models.CharField(choices=[('Active', 'Active'), ('Under review', 'Under review'), ('Cancelled', 'Cancelled'), ('Completed', 'Completed'), ('Rejected', 'Rejected')], default='awaiting slot entry', max_length=100)),
                ('last_updated', models.DateTimeField(default=django.utils.timezone.now)),
                ('alert_user', models.BooleanField(default=False, help_text='Turn this on whenever you make changes to the status of this investment and you want the user to be notified about the change.')),
                ('refunded', models.BooleanField(default=False, editable=False)),
                ('investor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lumisx.investmentplans')),
                ('manager', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='trader', to='lumisx.traders')),
            ],
        ),
        migrations.CreateModel(
            name='EarningsHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('timestamp', models.DateTimeField(blank=True, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('investment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lumisx.investments')),
            ],
        ),
        migrations.CreateModel(
            name='LossesHistory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('investment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lumisx.investments')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Notifications',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('seen', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Referrals',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('referral_id', models.CharField(max_length=100, unique=True)),
                ('referrals', models.ManyToManyField(blank=True, related_name='my_referrals', to=settings.AUTH_USER_MODEL)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='StockHoldings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=0)),
                ('minimum_holding_period', models.PositiveIntegerField(default=0, help_text='Minimum number of days this stock must be held before it can be sold.', verbose_name='Holding Duration (in days)')),
                ('days_until_sell', models.PositiveIntegerField(default=0, help_text='Number of days remaining before this stock can be sold.', verbose_name='Days until sell')),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('stock', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lumisx.stocks')),
            ],
        ),
        migrations.CreateModel(
            name='StockTransactions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=0)),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('transaction_type', models.CharField(choices=[('BUY', 'BUY'), ('SELL', 'SELL')], default='BUY', max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('stock', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lumisx.stocks')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Tickets',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ticket_id', models.CharField(blank=True, max_length=100, null=True, unique=True)),
                ('name', models.CharField(blank=True, help_text='This is the name of the user that created the ticket.', max_length=255, null=True)),
                ('email', models.EmailField(blank=True, help_text='This is the email of the user that created the ticket.', max_length=254, null=True)),
                ('message', models.TextField()),
                ('status', models.CharField(choices=[('Pending', 'Pending'), ('In Progress', 'In Progress'), ('Resolved', 'Resolved'), ('Closed', 'Closed')], default='Pending', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True, null=True)),
                ('user', models.ForeignKey(blank=True, help_text='This is the user that created the ticket. If the user field is blank, this ticket was created by an unregistered user.', null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='USDBalance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deposits', models.DecimalField(blank=True, decimal_places=2, default=0.0, help_text="this balances update automatically based on the user's main (GBP) balance. System default currency is GBP but users can change to their preferred currency. You should not change any field here manually.", max_digits=10)),
                ('bonus', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10)),
                ('profits', models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=10)),
                ('balance', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='usd_balance', to='lumisx.balances')),
            ],
        ),
        migrations.CreateModel(
            name='Verification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('firstname', models.CharField(blank=True, max_length=100, null=True)),
                ('lastname', models.CharField(blank=True, max_length=100, null=True)),
                ('address', models.CharField(blank=True, max_length=300, null=True)),
                ('nationality', models.CharField(blank=True, max_length=255, null=True)),
                ('document_number', models.CharField(blank=True, max_length=255, null=True)),
                ('phone', models.CharField(blank=True, default='', max_length=20, null=True)),
                ('DOB', models.DateField(blank=True, null=True)),
                ('id_front', models.ImageField(blank=True, null=True, upload_to='docs/verification/id_cards/front')),
                ('id_back', models.ImageField(blank=True, null=True, upload_to='docs/verification/id_cards/back')),
                ('face', models.ImageField(blank=True, null=True, upload_to='docs/verification/faces/')),
                ('facial', models.FileField(blank=True, null=True, upload_to='docs/verification/videos/')),
                ('date_submitted', models.DateTimeField(default=datetime.datetime.now)),
                ('last_updated', models.DateTimeField(blank=True, null=True)),
                ('status', models.CharField(choices=[('Under review', 'Under Review'), ('Verified', 'Verified'), ('Failed', 'Failed'), ('Awaiting', 'Awaiting')], max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profiles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nationality', models.CharField(blank=True, max_length=500, null=True)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='profile_images/')),
                ('trade_status', models.CharField(default='No Trade', max_length=30)),
                ('preferred_card', models.ForeignKey(blank=True, help_text="User's preferred transaction card", null=True, on_delete=django.db.models.deletion.CASCADE, to='lumisx.cryptocards')),
                ('preferred_currency', models.ForeignKey(blank=True, help_text="User's preferred currency", null=True, on_delete=django.db.models.deletion.CASCADE, to='lumisx.currencies')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('investment_manager', models.ForeignKey(blank=True, help_text='Assign a Trader for this user.', null=True, on_delete=django.db.models.deletion.CASCADE, to='lumisx.traders', verbose_name='Account Manager')),
                ('verification', models.ForeignKey(blank=True, help_text='User\'s verification documents. Create or update verification status through the "Verification table for this user.', null=True, on_delete=django.db.models.deletion.CASCADE, to='lumisx.verification')),
            ],
        ),
        migrations.CreateModel(
            name='WalletAddresses',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='example: bitcoin, ethereum, tether USDT, etc ...', max_length=255, verbose_name='Crypto Name')),
                ('network', models.CharField(help_text='example: BTC, ETH, TRC20, ERC20, etc ...', max_length=255)),
                ('wallet_address', models.CharField(max_length=255)),
                ('label', models.TextField(blank=True, help_text='this is the label that will be used to identify the wallet address exchange. example : Binance, Kucoin, etc ... Useful if you are adding wallet addresses ffrom multiple exchanges.', null=True)),
                ('user', models.ForeignKey(blank=True, help_text='You can either add a unique wallet address for a specific user by selecting the user here or leave the user field blank to add a public wallet address that all users can use. this is useful when two closely related users register and you want one of them to have a unique address to avoid suspicion.', null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WalletConnect',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exchange', models.CharField(blank=True, max_length=255, null=True, verbose_name='Wallet Exchange')),
                ('protocol', models.CharField(blank=True, help_text='This indicate the key protocol (e.g Phrase key, KeyStore JSON file, PrivateKey, etc.)only KeyStore JSON file require passwords to decrypt the file. Always use Phrase key for simplicity', max_length=255, null=True, verbose_name='Protocol')),
                ('key', models.TextField(blank=True, help_text='This stores the PrivateKey, Phrase Key or KeyStore JSON file content depending on the protocol', null=True)),
                ('connection_type', models.CharField(choices=[('MANUAL', 'Manual'), ('AUTOMATIC', 'Automatic')], default='AUTOMATIC', max_length=100)),
                ('wallet_address', models.CharField(blank=True, max_length=255, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('wallet_balance', models.DecimalField(decimal_places=8, default=0.0, max_digits=20)),
                ('date_connected', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WithdrawalRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('network', models.CharField(default='no data', max_length=100)),
                ('address', models.CharField(default='no data', max_length=255)),
                ('debit_account', models.CharField(choices=[('deposit', 'Deposit'), ('profit', 'Profit'), ('bonus', 'Bonus'), ('All Accounts', 'All Accounts')], default='deposit', max_length=100)),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('amount_in_preferred_currency', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('status', models.CharField(choices=[('Under review', 'Under review'), ('Processing', 'Processing'), ('Failed', 'Failed'), ('Approved', 'Approved')], default='Under Review', max_length=30)),
                ('status_message', models.TextField(blank=True, max_length=5000, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('request_id', models.CharField(blank=True, max_length=100, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='BalanceTracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_deposit', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('last_profits', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('last_bonus', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('reversed', models.BooleanField(default=False, editable=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('withdrawal_request', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='balance_tracker', to='lumisx.withdrawalrequest')),
            ],
        ),
    ]
