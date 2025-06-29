from django.core.management.base import BaseCommand
from django.utils import timezone
from decimal import Decimal, ROUND_DOWN
from datetime import timedelta
from lumisx.models import Investments, EarningsHistory, LossesHistory, Balances, StockHoldings, Notifications, ReferralCredits, Activities, ActivityLog
from django.db import transaction
from django.core.mail import send_mail
from django.conf import settings
import random
import logging
from lumisx.helpers import send_telegram_message, convert_currency

logger = logging.getLogger('django')

class Command(BaseCommand):
    help = 'Auto Increase profits for active investments'

    def handle(self, *args, **kwargs):
        now = timezone.now()
        today = now.date()
        active_investments = Investments.objects.filter(status='Active')
        holdings = StockHoldings.objects.all()
        pending_referral_credits = ReferralCredits.objects.filter(credited=False)

        if holdings:
            print('Stock holdings found, updating days untill sell...\n')
            for holding in holdings:
                if holding.last_decrement != today and holding.days_until_sell and holding.days_until_sell > 0:
                    # Calculate days since last decrement
                    last_decrement_date = holding.last_decrement or holding.date_added.date()
                    days_passed = (today - last_decrement_date).days

                    # Only decrement if at least one day has passed
                    if days_passed > 0:
                        holding.days_until_sell = max(holding.days_until_sell - days_passed, 0)
                        holding.last_decrement = today
                        holding.save()
                        print(f'Decremented days_until_sell for holding with ID: {holding.pk} - {holding.user.get_full_name()}. {holding.days_until_sell} days remaining.\n\n')
        else:
            print('No stock holdings found.')

        if active_investments:
            print('Active investments found, updating profits...')
            for investment in active_investments:
                investment_start = investment.date.date()
                elapsed_days = (today - investment_start).days
                profile = investment.investor.profiles
                balance = Balances.objects.filter(user=investment.investor).first()

                if investment.days_remaining is None:
                    investment.days_remaining = investment.duration - elapsed_days

                # Decrease days_remaining counter if it's a new day
                if investment.last_decrement != today and investment.days_remaining > 0:
                    investment.days_remaining = max(investment.duration - elapsed_days, 0)
                    investment.last_decrement = today
                    investment.save()
                    print(f'Decremented days_remaining for investment with ID: {investment.pk}. {investment.days_remaining} days remaining.')



                try:
                    duration_days = int(investment.duration)
                    investment_start = investment.date
                    investment_end = investment_start + timedelta(days=duration_days)

                    if now > investment_end:
                        with transaction.atomic():
                            # Investment duration completed

                            # Deduct commission from profits
                            commission = round(investment.total_profits_accrued * Decimal('0.3'), 2)
                            balance.profits -= commission
                            balance.save(update_fields=['profits'])

                            investment.status = 'Completed'
                            investment.alert_user = True
                            investment.save()
                            remaining_active_investments = Investments.objects.filter(investor=investment.investor, status='Active')
                            if not remaining_active_investments.exists():
                                profile.trade_status = investment.status
                                profile.save(update_fields=['trade_status'])

                            

                            preferred_currency = profile.preferred_currency
                            c_commission = convert_currency(commission, "GBP", preferred_currency.symbol) if preferred_currency.symbol != 'GBP' else commission

                            Activities.objects.create(
                                user=investment.investor,
                                activity="Trade Commission Charge",
                                amount=commission,
                                activity_description=f"Commission charge of {preferred_currency.code}{c_commission} applied for completed investment with reference number: {investment.reference}",
                            )
                            Notifications.objects.create(
                                user=investment.investor,
                                title="Trade Commission Charged",
                                message=(
                                    f"Hello {investment.investor.get_full_name()}, a commission charge of {preferred_currency.code}{c_commission} has been applied to your accrued profits for the completed investment with reference number: {investment.reference}. This is a standard procedure to maintain the integrity of our trading platform. Thank you for your understanding and continued support. \n\n"
                                    "If you have any questions or concerns, please feel free to reach out to our support team via email or live chat in-app."
                                )
                            )  
                            
                            print(f'Investment with ID: {investment.pk} for {investment.investor.get_full_name()} has completed. Status updated to "Completed". Commission charge of £{commission} applied')

                            send_telegram_message(f'Investment with ID: {investment.pk} for {investment.investor.get_full_name()} has completed. Status updated to "Completed". Commission charge of £{commission} applied.')
                            continue

                    # Calculate total profit target
                   
                    rate = investment.profit_rate or (Decimal("10.00") if investment.duration and investment.duration > 10 else Decimal("5.00"))
                    profit_target = investment.amount * rate
                    total_intervals = max(duration_days * 24, 1)
                    profit_per_interval = (profit_target / Decimal(total_intervals)).quantize(Decimal('0.01'), rounding=ROUND_DOWN)
                    print(f'Calculated total profit target for "{investment.investor.get_full_name()}" investment (ID={investment.pk}): {profit_target}')

                    # Calculate elapsed intervals
                    elapsed_time = now - investment_start
                    elapsed_hours = elapsed_time.total_seconds() // 3600
                    intervals_passed = int(elapsed_hours)
                    print(f'Hours passed: {intervals_passed}')

                    # Expected total profit
                    expected_total_profit = profit_per_interval * Decimal(intervals_passed)
                    print(f"Expected total profit: {expected_total_profit}")

                    # 🛠️ **Backfill total_profits_accrued for existing investments**
                    if investment.total_profits_accrued is None or investment.total_profits_accrued == Decimal('0.00'):
                        backfill_profit = expected_total_profit
                        investment.total_profits_accrued = backfill_profit
                        investment.save(update_fields=['total_profits_accrued'])

                        # Update user profile profit
                        balance.profits += backfill_profit
                        balance.save(update_fields=['profits'])

                        # create a record for the earnings
                        EarningsHistory.objects.create(
                            user=investment.investor,
                            investment=investment,
                            amount=backfill_profit,
                            timestamp=now
                        )


                        print(f'Backfilled total_profits_accrued for investment {investment.pk}: {backfill_profit}')

                    # Calculate the difference between expected and already accrued profits
                    profit_difference = expected_total_profit - investment.total_profits_accrued

                    # Simulate profits or losses
                    if random.uniform(0, 1) <= 0.7:  # 70% chance for profit
                        profit_change = profit_difference
                        change_type = "profit"
                    else:
                        # Reduce profits for losses
                        profit_change = -abs(profit_difference * investment.losses_rate) 
                        change_type = "loss"

                    if profit_change != 0:
                        with transaction.atomic():
                            if change_type == "profit":
                                if expected_total_profit > investment.total_profits_accrued:
                                    # Update individual investment's profit
                                    investment.total_profits_accrued += profit_change
                                    investment.save(update_fields=['total_profits_accrued'])

                                    # Update user profile profit
                                    balance.profits += profit_change
                                    balance.save(update_fields=['profits'])

                                    EarningsHistory.objects.create(
                                        user=investment.investor,
                                        investment=investment,
                                        amount=profit_change,
                                        timestamp=now
                                    )
                                    print(
                                        f'Profits recorded in the Earnings History table: \n'
                                        f'Increased profits for {investment.investor.username} by {profit_change}\n\n\n'
                                    )
                                else:
                                    profit_change = Decimal('20.23') if investment.plan.title.lower() in ['micro plan', 'micro', 'spark', 'spark plan'] else Decimal('50.00')

                                    if investment.total_profits_accrued - expected_total_profit < Decimal('200.00'):
                                        investment.total_profits_accrued += profit_change
                                        investment.save(update_fields=['total_profits_accrued'])

                                        balance.profits += profit_change
                                        balance.save(update_fields=['profits'])

                                        EarningsHistory.objects.create(
                                            user=investment.investor,
                                            investment=investment,
                                            amount=profit_change,
                                            timestamp=now
                                        )
                                        print(
                                            f'Add-on profits recorded in the Earnings History table: \n'
                                            f'Added add-on profits for {investment.investor.username} by {profit_change}\n\n\n'
                                        )

                            elif change_type == "loss":
                                # Deduct loss amount directly from profits and investment
                                investment.total_profits_accrued -= abs(profit_change)
                                investment.save(update_fields=['total_profits_accrued'])

                                balance.profits -= abs(profit_change)
                                balance.save(update_fields=['profits'])

                                LossesHistory.objects.create(
                                    user=investment.investor,
                                    investment=investment,
                                    amount=abs(profit_change),
                                    timestamp=now
                                )
                                print(f'Recorded loss for {investment.investor.username} of {abs(profit_change)}\n\n')

                            investment.last_updated = now
                            investment.save(update_fields=['last_updated'])
                        
                except Exception as e:
                    print(f"Error processing investment {investment.id}: {e}")
                    logger.exception(f'Failed to run management command on {investment.investor.username} profile at {timezone.now()}')
                    self.stderr.write(f'Error processing investment {investment.id}: {e}')
                    message = (
                        'Profit Increment Error\n\n'
                        f'An error occurred while processing investment ID {investment.id} for user {investment.investor.username}: {e}'

                    )
                    send_telegram_message(message)
        else:
            print('No active investments found')
            logger.info('No active investment at this time')

        if pending_referral_credits:
            print("Pending referral credits found, crediting users...\n")
            for credit in pending_referral_credits:
                try:
                    referrer_balance = Balances.objects.get(user=credit.referrer)
                    referred_balance = Balances.objects.get(user=credit.referred)
                    referrer_balance.bonus += credit.referrer_credit
                    referred_balance.bonus += credit.referred_credit
                    referrer_balance.save(update_fields=['bonus'])
                    referred_balance.save(update_fields=['bonus'])
                    credit.credited = True
                    credit.date_updated = now 
                    credit.save(update_fields=['credited', 'date_updated'])
                    title = f'Referral Credit received'
                    message = f' You\'ve been rewarded with £{credit.referrer_credit} bonus for referring {credit.referred.get_full_name()} to our platform. Thank you for your referral, we absolutely appreciate good deeds like this. unlock more oppurtunities that awaits you by continuing your referral!'
                    Notifications.objects.create(user=credit.referrer, title=title, message=message)

                    title = f'Referral Credit received'
                    message = f' You\'ve been rewarded with £{credit.referred_credit} bonus for being referred by {credit.referrer.get_full_name()}. Thank you for your registration, You can join the loop and start earning too. Just get your referral link from your account profile and share to friends and family and see the magic!'
                    Notifications.objects.create(user=credit.referred, title=title, message=message)

                    self.stdout.write(self.style.SUCCESS(f'✅ Recorded referral credit for referrer {credit.referrer.get_full_name()}: {credit.referrer_credit}\n\n'))

                    self.stdout.write(self.style.SUCCESS(f'✅ Recorded referral credit for referred {credit.referred.get_full_name()}: {credit.referred_credit}\n\n'))

                except Balances.DoesNotExist as e:
                    logger.warning(f'Balance missing for referral credit: {credit.pk} | Error: {e}')
                    continue
        else:
            print('No pending referral credits found')

        cutoff_time = now - timedelta(days=3)

        # Archive old activity logs
        old_logs = ActivityLog.objects.filter(timestamp__lt=cutoff_time)
        if old_logs.exists():
            count = old_logs.count()
            old_logs.delete()
            self.stdout.write(self.style.SUCCESS(f'✅ Deleted {count} activity logs older than 3 days\n\n'))
            send_telegram_message(f'✅ Deleted {count} activity logs older than 3 days')
        else:
            self.stdout.write(self.style.SUCCESS('✅ No old activity logs to delete\n\n'))