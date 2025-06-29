import os
from django.core.management.base import BaseCommand
from django.core.mail import EmailMultiAlternatives
from django.contrib.auth import get_user_model
from django.template.loader import render_to_string
from django.conf import settings


class Command(BaseCommand):
    help = 'Broadcast an email to all users with valid email addresses.'

    def handle(self, *args, **kwargs):
        User = get_user_model()
        email_field = 'email'

        # Prompt for template name
        template_name = input("Enter the email template name (e.g., 'announcement.html'): ").strip()
        if not template_name:
            self.stderr.write("Template name is required.")
            return

        # Prompt for optional subject
        subject = input("Enter the email subject [default: 'Broadcast Email']: ").strip() or 'Broadcast Email'

        # Check if the template exists
        template_path = os.path.join(settings.BASE_DIR, 'lumisx', 'templates', 'emails', template_name)
        if not os.path.exists(template_path):
            self.stderr.write(f"Template '{template_name}' does not exist at '{template_path}'.")
            return

        # Fetch users with valid email addresses
        users = User.objects.exclude(**{f"{email_field}__isnull": True}).exclude(**{f"{email_field}": ''})

        if not users.exists():
            self.stdout.write(self.style.WARNING('No users with valid email addresses found.'))
            return

        from_email = settings.DEFAULT_FROM_EMAIL
        success_count = 0
        failure_count = 0

        for user in users:
            try:
                recipient_email = getattr(user, email_field)
                context = {'user': user}
                email_html_content = render_to_string(f'emails/{template_name}', context)

                email = EmailMultiAlternatives(
                    subject=subject,
                    body="This is a fallback plain-text message for email clients that do not support HTML.",
                    from_email=from_email,
                    to=[recipient_email],
                )
                email.attach_alternative(email_html_content, "text/html")
                email.send()

                self.stdout.write(self.style.SUCCESS(f"Email sent to {recipient_email}"))
                success_count += 1
            except Exception as e:
                self.stderr.write(f"Failed to send email to {recipient_email}: {e}")
                failure_count += 1

        self.stdout.write(self.style.SUCCESS(
            f"Broadcast completed. {success_count} emails sent successfully, {failure_count} failed."
        ))
