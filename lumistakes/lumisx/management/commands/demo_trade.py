from django.core.management.base import BaseCommand
from django.utils import timezone
from django.db import transaction
from decimal import Decimal, ROUND_DOWN
from datetime import timedelta
import random
import logging

from lumisx.models import (
    DemoBalance, DemoTrade, DemoTransactions,
    Notifications
)
from lumisx.helpers import send_telegram_message

logger = logging.getLogger('django')


class Command(BaseCommand):
    help = 'Updates profits for active demo trades every few minutes'

    def handle(self, *args, **kwargs):
        now = timezone.now()

        active_demos = DemoTrade.objects.filter(status='Active')
        if not active_demos.exists():
            print('No active demo trades found.')
            return

        print(f'{active_demos.count()} active demo trades found. Processing...')

        for demo in active_demos:
            try:
                # --- 1. Timing Logic ---
                elapsed_seconds = (now - demo.date).total_seconds()
                duration_seconds = demo.duration * 3600
                progress_ratio = min(elapsed_seconds / duration_seconds, 1.0)

                end_time = demo.date + timedelta(hours=demo.duration)

                # --- 2. Optional: Decrement hours_remaining for UI purposes ---
                if demo.last_decrement is None or (now - demo.last_decrement).total_seconds() >= 3600:
                    demo.hours_remaining = max(demo.hours_remaining - 1, 0)
                    demo.last_decrement = now

                # --- 3. Mark trade as completed when time has passed ---
                if now >= end_time:
                    demo.status = 'Completed'
                    demo.save(update_fields=['status', 'last_decrement', 'hours_remaining'])
                    print(f'✅ DemoTrade {demo.reference} completed.')
                    continue

                # --- 4. Calculate expected profit at this point ---
                profit_target = demo.amount * demo.profit_rate
                expected_total_profit = (profit_target * Decimal(progress_ratio)).quantize(Decimal('0.01'))
                profit_difference = expected_total_profit - demo.total_profits_accrued

                # Skip if no profit change
                if profit_difference <= 0:
                    continue

                # --- 5. Determine profit or loss ---
                if random.uniform(0, 1) <= 0.80:
                    profit_change = profit_difference
                    change_type = 'profit'
                else:
                    profit_change = -abs(profit_difference * demo.losses_rate)
                    change_type = 'loss'

                balance = DemoBalance.objects.get(user=demo.user)

                # --- 6. Apply the change in a transaction ---
                with transaction.atomic():
                    if change_type == 'profit':
                        demo.total_profits_accrued += profit_change
                        balance.profits += profit_change
                        DemoTransactions.objects.create(
                            user=demo.user,
                            transaction_type='PROFITS',
                            amount=profit_change,
                            description=f'Accrued demo profit for trade: {demo.reference}',
                            date_created=now
                        )
                        print(f'[+Profit] {demo.user.username} earned {profit_change} on demo trade.')
                    else:
                        demo.total_profits_accrued -= abs(profit_change)
                        balance.profits -= abs(profit_change)
                        DemoTransactions.objects.create(
                            user=demo.user,
                            transaction_type='LOSS',
                            amount=profit_change,
                            description=f'Accrued demo loss for trade: {demo.reference}',
                            date_created=now
                        )
                        print(f'[-Loss] {demo.user.username} lost {abs(profit_change)} on demo trade.')

                    balance.save(update_fields=['profits'])
                    demo.last_updated = now
                    demo.save(update_fields=[
                        'total_profits_accrued', 'last_decrement',
                        'hours_remaining', 'last_updated'
                    ])

            except Exception as e:
                logger.exception(f'Error on demo trade ID {demo.pk}')
                print(f'⚠️ Error processing DemoTrade {demo.pk}: {e}')
                send_telegram_message(
                    f"⚠️ DemoTrade Error\n\nTrade ID: {demo.pk} ({demo.reference})\nError: {e}"
                )
