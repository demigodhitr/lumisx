from django.core.management.base import BaseCommand
from django.utils import timezone
from decimal import Decimal, ROUND_DOWN
from datetime import timedelta, time
from django.db import transaction
import random
import logging
import pytz

from lumisx.models import (
    Investments, EarningsHistory, LossesHistory,
    Balances, StockHoldings, Notifications,
    ReferralCredits, Activities, ActivityLog
)
from lumisx.helpers import send_telegram_message, convert_currency

logger = logging.getLogger('django')

NASDAQ_TZ = pytz.timezone('America/New_York')
MARKET_OPEN = time(9, 30)
MARKET_CLOSE = time(16, 0)


def is_market_open(dt_utc):
    """Returns True if the given UTC datetime falls within NASDAQ trading hours (Mon–Fri, 9:30–16:00 ET)."""
    dt_et = dt_utc.astimezone(NASDAQ_TZ)
    if dt_et.weekday() >= 5: 
        return False
    return MARKET_OPEN <= dt_et.time() < MARKET_CLOSE


def market_hours_elapsed(start_utc, end_utc):
    """
    Count the number of hours between start and end that fall within
    NASDAQ market hours (Mon–Fri, 9:30–16:00 ET).
    Iterates hour by hour — fine for investment durations in days/weeks.
    """
    elapsed = 0
    cursor = start_utc.replace(minute=0, second=0, microsecond=0)

    while cursor < end_utc:
        if is_market_open(cursor):
            elapsed += 1
        cursor += timedelta(hours=1)

    return elapsed


class Command(BaseCommand):
    help = 'Auto increase profits for active investments'

    def handle(self, *args, **kwargs):
        now = timezone.now()
        today = now.date()

        active_investments = Investments.objects.filter(
            status='Active'
        ).select_related('investor', 'investor__profiles')

        holdings = StockHoldings.objects.all()
        pending_referral_credits = ReferralCredits.objects.filter(credited=False)


        # MARKET HOURS CHECK
        market_is_open = is_market_open(now)


        # STOCK HOLDINGS DAY DECREMENT
        if market_is_open:
            for holding in holdings:
                if holding.days_until_sell and holding.days_until_sell > 0:
                    last_day = holding.last_decrement or holding.date_added.date()
                    if last_day != today:
                        holding.days_until_sell = max(holding.days_until_sell - 1, 0)
                        holding.last_decrement = today
                        holding.save(update_fields=['days_until_sell', 'last_decrement'])


        # INVESTMENTS 
        for investment in active_investments:
            try:

                # MARKET GATE - skip if closed.
                if not market_is_open:
                    send_telegram_message(
                        f"⏸️ Skipping investment {investment.pk} for {investment.investor.username} - market closed"
                    )
                    continue

                profile = investment.investor.profiles
                balance = Balances.objects.get(user=investment.investor)

                # DAILY DAYS_REMAINING DECREMENT

                if investment.days_remaining is None:
                    investment.days_remaining = investment.duration

                if investment.last_decrement != today and investment.days_remaining > 0:
                    investment.days_remaining -= 1
                    investment.last_decrement = today
                    investment.save(update_fields=['days_remaining', 'last_decrement'])

                # COMPLETION CHECK

                duration_days = int(investment.duration)
                investment_end = investment.date_started + timedelta(days=duration_days)

                if investment.days_remaining <= 0 or now > investment_end:
                    with transaction.atomic():
                        commission = (investment.total_profits_accrued * Decimal('0.30')).quantize(
                            Decimal('0.01'), rounding=ROUND_DOWN
                        )


                        commission = min(commission, max(balance.profits, Decimal('0.00')))

                        balance.profits = max(balance.profits - commission, Decimal('0.00'))
                        balance.save(update_fields=['profits'])

                        investment.status = 'Completed'
                        investment.alert_user = True
                        investment.save(update_fields=['status', 'alert_user'])

                        if not Investments.objects.filter(
                            investor=investment.investor, status='Active'
                        ).exists():
                            profile.trade_status = 'Completed'
                            profile.save(update_fields=['trade_status'])

                        preferred_currency = profile.preferred_currency
                        c_commission = (
                            convert_currency(commission, 'GBP', preferred_currency.symbol)
                            if preferred_currency.symbol != 'GBP'
                            else commission
                        )

                        Activities.objects.create(
                            user=investment.investor,
                            activity="Trade Commission Charge",
                            amount=commission,
                            activity_description=(
                                f"Commission charge of {preferred_currency.code}{c_commission} "
                                f"applied for completed investment {investment.reference}"
                            ),
                        )

                        Notifications.objects.create(
                            user=investment.investor,
                            title="Trade Completed",
                            message=(
                                f"Your investment with reference {investment.reference} "
                                f"has completed. A commission of {preferred_currency.code}{c_commission} "
                                f"was applied to your profits."
                            ),
                        )

                        send_telegram_message(
                            f"Investment {investment.pk} completed for "
                            f"{investment.investor.username} | Commission £{commission}"
                        )

                    continue

                # -----------------------------
                # PROFIT CALCULATION

                if not investment.date_started:
                    investment.date_started = investment.date
                    investment.save(update_fields=['date_started'])

                rate = investment.profit_rate or (
                    Decimal("10.00") if investment.duration > 10 else Decimal("5.00")
                )

                profit_target = investment.amount * rate

                # Total tradeable hours across the full duration.
                total_market_hours = market_hours_elapsed(
                    investment.date_started,
                    investment.date_started + timedelta(days=duration_days)
                )
                total_intervals = max(total_market_hours, 1)

                profit_per_interval = (
                    profit_target / Decimal(total_intervals)
                ).quantize(Decimal('0.01'), rounding=ROUND_DOWN)

                # Elapsed market hours since investment actually started
                elapsed_hours = market_hours_elapsed(investment.date_started, now)
                expected_total_profit = profit_per_interval * Decimal(elapsed_hours)


                # BACKFILL

                if investment.total_profits_accrued <= Decimal('0.00') and expected_total_profit > Decimal('0.00'):
                    investment.total_profits_accrued = expected_total_profit
                    investment.last_updated = now
                    investment.save(update_fields=['total_profits_accrued', 'last_updated'])

                    balance.profits += expected_total_profit
                    balance.save(update_fields=['profits'])

                    EarningsHistory.objects.create(
                        user=investment.investor,
                        investment=investment,
                        amount=expected_total_profit,
                        timestamp=now,
                    )

                profit_diff = expected_total_profit - investment.total_profits_accrued

                if profit_diff <= Decimal('0.00'):
                    continue

                # -----------------------------
                # DYNAMIC WIN PROBABILITY
                # Starts at 0.75 early in investment, scales up to 0.92 near maturity.
                # -----------------------------
                days_elapsed = duration_days - (investment.days_remaining or 0)
                progress = Decimal(str(days_elapsed)) / Decimal(str(max(duration_days, 1)))
                progress = max(Decimal('0.00'), min(progress, Decimal('1.00')))

                win_chance = Decimal('0.75') + (Decimal('0.17') * progress)

                with transaction.atomic():
                    if Decimal(str(random.random())) <= win_chance:
                        # --------------------------
                        # PROFIT
                        # --------------------------
                        investment.total_profits_accrued += profit_diff
                        balance.profits += profit_diff

                        EarningsHistory.objects.create(
                            user=investment.investor,
                            investment=investment,
                            amount=profit_diff,
                            timestamp=now,
                        )

                    else:

                        # LOSS 
                        loss_multiplier = Decimal(str(random.uniform(0.1, 0.4)))
                        loss = (profit_diff * investment.losses_rate * loss_multiplier).quantize(
                            Decimal('0.01'), rounding=ROUND_DOWN
                        )

                        # Capped to prevent negative balances.
                        loss = min(loss, max(balance.profits, Decimal('0.00')))

                        investment.total_profits_accrued -= loss
                        balance.profits = max(balance.profits - loss, Decimal('0.00'))

                        LossesHistory.objects.create(
                            user=investment.investor,
                            investment=investment,
                            amount=loss,
                            timestamp=now,
                        )

                    investment.last_updated = now
                    investment.save(update_fields=['total_profits_accrued', 'last_updated'])
                    balance.save(update_fields=['profits'])

            except Exception as e:
                logger.exception(f"Investment cron failed for {investment.pk}")
                send_telegram_message(
                    f"❌ Investment cron error\nID: {investment.pk}\nUser: {investment.investor.username}\n{e}"
                )


        # REFERRAL CREDITS
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

                Notifications.objects.create(
                    user=credit.referrer,
                    title="Referral Bonus",
                    message=f"You earned £{credit.referrer_credit} for referring a user.",
                )

                Notifications.objects.create(
                    user=credit.referred,
                    title="Referral Bonus",
                    message=f"You earned £{credit.referred_credit} for joining via referral.",
                )

            except Exception:
                logger.warning(f"Referral credit failed for ID {credit.pk}")

        # ACTIVITY LOG CLEANUP
        cutoff = now - timedelta(days=3)
        old_logs = ActivityLog.objects.filter(timestamp__lt=cutoff)
        if old_logs.exists():
            count = old_logs.count()
            old_logs.delete()
            send_telegram_message(f"🧹 Deleted {count} activity logs older than 3 days")