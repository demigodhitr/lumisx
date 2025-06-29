# lumisx/management/commands/get_security.py
import os
from pathlib import Path
from django.core.management.base import BaseCommand
from django.core.management.utils import get_random_secret_key

ENV_FILE = Path(__file__).resolve().parent.parent.parent.parent / ".env"


class Command(BaseCommand):
    help = "Generate a Django SECRET_KEY and store/update it in .env (quotes it to avoid # comment issues)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--print-only",
            action="store_true",
            help="Only print the key; do not write to .env",
        )

    def handle(self, *args, **options):
        raw_key = get_random_secret_key()
        safe_key = f"'{raw_key}'"          # <-- single-quoted so # isn’t parsed as comment

        if options["print_only"]:
            self.stdout.write(self.style.SUCCESS(raw_key))
            return

        # Ensure .env exists
        ENV_FILE.touch(exist_ok=True)

        # Read current .env lines
        with ENV_FILE.open("r") as f:
            lines = f.readlines()

        # Replace or append SECRET_KEY line
        for i, line in enumerate(lines):
            if line.startswith("SECRET_KEY="):
                lines[i] = f"SECRET_KEY={safe_key}\n"
                break
        else:
            lines.append(f"SECRET_KEY={safe_key}\n")

        with ENV_FILE.open("w") as f:
            f.writelines(lines)

        self.stdout.write(self.style.SUCCESS(f"SECRET_KEY written to {ENV_FILE}"))
        self.stdout.write(self.style.SUCCESS(raw_key))
