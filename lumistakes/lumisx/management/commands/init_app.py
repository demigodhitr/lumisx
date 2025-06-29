from django.core.management.base import BaseCommand
from lumisx.models import *
from lumisx.helpers import fetch_exchange_rates, fetch_crypto_rates




class Command(BaseCommand):
    help = 'Initialize the app with default settings and configurations'

    def handle(self, *args, **kwargs):
        # Initialize the app with default data critical for operation. 

        try:
            with transaction.atomic():
                # create default currencies
                fetch_exchange_rates()
                fetch_crypto_rates()

                # create default bot trader.
                Traders.objects.update_or_create(name='LumiBot v2')

                # create default investment plans
                InvestmentPlans.objects.update_or_create(
                    title = "Spark plan",
                    defaults={
                        "min_amount": 500.00,
                        "max_amount": 999.99,
                        "min_duration": 5,
                        "max_duration": 7,
                        "profit_rate": 12.00,
                    }
                )

                InvestmentPlans.objects.update_or_create(
                    title = "Ember plan",
                    defaults={
                        "min_amount": 1000.00,
                        "max_amount": 4999.99,
                        "min_duration": 5,
                        "max_duration": 10,
                        "profit_rate": 13.00,
                    }
                )

                InvestmentPlans.objects.update_or_create(
                    title="Volt plan",
                    defaults={
                        "min_amount": 5000.00,
                        "max_amount": 9999.99,
                        "min_duration": 10,
                        "max_duration": 60,
                        "profit_rate": 11.00,
                    }
                )

                InvestmentPlans.objects.update_or_create(
                    title="Inferno plan",
                    defaults={
                        "min_amount": 10000.00,
                        "max_amount": 19999.99,
                        "min_duration": 15,
                        "max_duration": 120,
                        "profit_rate": 11.00,
                    }
                )

                InvestmentPlans.objects.update_or_create(
                    title="Blaze plan",
                    defaults={
                        "min_amount": 20000.00,
                        "max_amount": 29999.99,
                        "min_duration": 30,
                        "max_duration": 180,
                        "profit_rate": 11.00,
                    }
                )

                InvestmentPlans.objects.update_or_create(
                    title="Phantom plan",
                    defaults={
                        "min_amount": 30000.00,
                        "max_amount": 49999.99,
                        "min_duration": 60,
                        "max_duration": 365,
                        "profit_rate": 11.00,
                    }
                )

                InvestmentPlans.objects.update_or_create(
                    title="Spectre plan",
                    defaults={
                        "min_amount": 50000.00,
                        "max_amount": 99999.99,
                        "min_duration": 90,
                        "max_duration": 365,
                        "profit_rate": 11.00,
                    }
                )

                InvestmentPlans.objects.update_or_create(
                    title="Wild Card",
                    defaults={
                        "min_amount": 100000.00,
                        "max_amount": 500000.00,
                        "min_duration": 120,
                        "max_duration": 365,
                        "profit_rate": 11.00,
                    }
                )

                # initialization complete.
                self.stdout.write(self.style.SUCCESS("App initialized successfully. created or updated instances for the following models:\n"))
                self.stdout.write(self.style.SUCCESS("✅ Traders\n"))
                self.stdout.write(self.style.SUCCESS("✅ InvestmentPlans\n"))
                self.stdout.write(self.style.SUCCESS("✅ Currencies\n"))
                self.stdout.write(self.style.SUCCESS("✅ CryptoExchangeRates\n"))

                 

        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Error initializing app: {e}"))