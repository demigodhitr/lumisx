from .models import *
from .helpers import send_telegram_message
from django.db.utils import IntegrityError


# create balance extensions for new users if not already created
@receiver(post_save, sender=Balances)
def create_balances(sender, instance, created, **kwargs):
    if created and not (hasattr(instance, 'usdbalance') or hasattr(instance, 'eurbalance')):
        try:
            USDBalance.objects.get_or_create(balance=instance)
            EURBalance.objects.get_or_create(balance=instance)
            logger.info(f"Created balances for {instance}")
        except IntegrityError as e:
            logger.error(f"Failed to create balances for {instance}: {e}")

# send new user email to admin
@receiver(post_save, sender=Profiles)
def dispatch_new_user_email(sender, instance, created, **kwargs):
    if created:
        try:
            message = (
                f'You have a new registered user.\n\n'
                f"{instance.user.get_full_name()} just created a new Lumis X account. Please log in and review. Here are some important information about the user: \n\n"
                f"Username: {instance.user.username}\n"
                f"Email: {instance.user.email}\n"
                f"Nationality: {instance.nationality}"
            )
            send_telegram_message(message)
        except Exception as e:
            print(e)
            logger.exception(f"Failed to send welcome email to admin: {e}")

            pass

# send welcome email to new user
@receiver(post_save, sender=EmailVerification)
def welcome_new_user(sender, instance, created, **kwargs):
    if instance.is_verified and not instance.welcomed:
        subject = f'You\'re now limitless, {instance.user.firstname}!'
        message = render_to_string('emails/welcome_email.html', {'user': instance.user})
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [instance.email]
        try:
            send_mail(
                subject, 
                message, 
                from_email, 
                recipient_list,
                html_message=message,
            )
            instance.welcomed = True
            instance.save()
        except Exception as e:
            logger.exception(f'"Error sending email to {instance.email}", ERROR:{e}')
            pass
    elif instance.welcomed and instance.account_is_verified:
        subject = 'Eligible to continue with identity verification'
        message = (
            f'Hello {instance.user.get_full_name()},\n\n'
            f'You\'ve successfully verified that you are the one interacting with the identity verification system. You may now continue with your intended action.'
        )
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [instance.email]
        try:
            send_mail(
                subject, 
                message, 
                from_email, 
                recipient_list,
                html_message=message,
            )
        except Exception as e:
            logger.exception(f'"Error sending email to {instance.email}", ERROR:{e}')
            pass

# send card activation email to user
@receiver(post_save, sender=CryptoCards)
def send_card_activation_mail(sender, instance, created, **kwargs):
    if created and instance.user.accesssettings.email_alerts:
        subject = f'Congratulations on your new card {instance.user.firstname}'
        template = 'emails/card_activation.html'

        html_content = render_to_string(template, {'instance': instance, 'user': instance.user})
        text_content = strip_tags(html_content) 

        # Send the email
        email = EmailMultiAlternatives(
            subject,
            text_content,
            settings.DEFAULT_FROM_EMAIL,
            [instance.user.email],
        )
        email.attach_alternative(html_content, "text/html")
        try:
            email.send()
        except Exception as e:
            logger.exception(f"Error sending card activation mail: {e}")
            pass

# dispatch notification to recipient if recipient permits.
@receiver(post_save, sender=Notifications)
def send_notifications_email(sender, instance, created, **kwargs):
    if created:
        subject = f'1 new message: {instance.title}'
        template = 'emails/announcement.html'

        html_content = render_to_string(template, {'instance': instance, 'user': instance.user})
        text_content = strip_tags(html_content) 

        # stage and send the email
        try:
            email = EmailMultiAlternatives(
                subject,
                text_content,
                settings.DEFAULT_FROM_EMAIL,
                [instance.user.email],
            )
            email.attach_alternative(html_content, "text/html")
            email.send()
        except Exception as e:
            logger.exception(f"Error sending notification email: {e}")
            pass

@receiver(post_save, sender=Deposits)
def update_balance(sender, instance, created, **kwargs):
    if instance.status == 'Confirmed' and not instance.credited:
        try:
            user = instance.user
            balance = Balances.objects.get(user=user)
            balance.deposits += instance.amount
            balance.save()
            instance.credited = True
            instance.save()
        except Exception as e:
            logger.exception(f"Error updating balance for {instance.user.username}: {e}")

@receiver(post_save, sender=Deposits)
def send_status_update_email(sender, instance, created, **kwargs):
    if not created and instance.user.accesssettings.email_alerts:
        if instance.status == 'Failed':
            subject = 'Payment Failed'
            template = 'emails/deposit_failed.html'
        elif instance.status == 'Confirmed':
            subject = 'Payment Confirmed'
            template = 'emails/deposit_confirmed.html'
        else:
            template = None
            subject = None

        if all([template, subject]):
            html_content = render_to_string(template, {'instance': instance, 'user': instance.user})
            text_content = strip_tags(html_content)

            # Send the email
            email = EmailMultiAlternatives(
                subject,
                text_content,
                settings.DEFAULT_FROM_EMAIL,
                [instance.user.email])
            email.attach_alternative(html_content, "text/html")
            try:
                email.send()
            except Exception as e:
                logger.exception(f"Error sending email. {e}")

# Trade Status Email
@receiver(post_save, sender=Investments)
def send_trade_status_email(sender, instance, created, **kwargs):
    profile = instance.investor.profiles
    if profile.trade_status != instance.status and instance.status == 'Active':
        profile.trade_status = instance.status
        profile.investment_manager = instance.manager
        profile.save()

    if not created and instance.alert_user and instance.investor.accesssettings.email_alerts:
        if instance.status == 'Active':
            subject = 'Congratulations! Your trade has been activated'
            template = 'emails/trade-status.html'
        elif instance.status == 'Completed':
            subject = 'Congratulations! Your trade has been completed'
            template = 'emails/trade-completed.html'
        elif instance.status == 'Suspended':
            subject = 'Action required! Your trade has been suspended'
            template = 'emails/trade-suspended.html'
        elif instance.status == 'Canceled':
            subject = 'Action required! Your trade has been canceled'
            template = 'emails/trade-canceled.html'
        else:
            subject = None
            template = None
   
        if subject and template:
            html_content = render_to_string(template, {'user': instance.investor, 'instance': instance})
            text_content = strip_tags(html_content) 

            # Send the email
            email = EmailMultiAlternatives(
                subject,
                text_content,
                settings.DEFAULT_FROM_EMAIL,
                [instance.investor.email],
            )
            email.attach_alternative(html_content, "text/html")
            try:
                email.send()
            except Exception as e:
                logger.exception(f'"Error sending email to {instance.investor.email}", ERROR:{e}')
                pass
            instance.alert_user = False
            instance.save()
    
# send status updates for withdrawals
@receiver(post_save, sender=WithdrawalRequest)
def send_withdrawal_status_update_email(sender, instance, created, **kwargs):
    if not created and instance.user.accesssettings.email_alerts:
        if instance.status == 'Failed':
            subject = 'Withdrawal Request Failed'
            template = 'emails/withdrawal_failed.html'
        elif instance.status == 'Approved':
            subject = 'Withdrawal Request Approved'
            template = 'emails/withdrawal_approved.html'
        elif instance.status == 'Processing':
            subject = 'Withdrawal Status Updated!'
            message = (
                'Your withdrawal status has been updated.\n\n'
                f"Your withdrawal of {instance.user.profiles.preferred_currency.code}{instance.amount_in_preferred_currency} submitted on {instance.created_at.strftime('%Y-%m-%d at exactly %H:%M:%S')} is currently being processed. You will be notified when your withdrawal status is further updated.\n\n"
                f'Current withdraw status: {instance.status}\n'
                f'Request ID: {instance.request_id}\n\n'
                'Best regards\n'
                'Disbursement Team\n'
                'exchangevista.com\n'
            )
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [instance.user.email],
                fail_silently=False,
            )
            template = None
            return
        
        else:
            subject = None
            template = None

        if subject and template:
            html_content = render_to_string(template, {'instance': instance, 'user': instance.user})
            text_content = strip_tags(html_content)
            email = EmailMultiAlternatives(
                subject,
                text_content,
                settings.DEFAULT_FROM_EMAIL,
                [instance.user.email],
            )
            email.attach_alternative(html_content, "text/html")
            try:
                email.send()
            except Exception as e:
                logger.exception(f"Error sending withdrawal status update email to {instance.user.email}: {e}")
                pass

@receiver(post_save, sender=WithdrawalRequest)
def reverse_transactions(sender, instance, created, **kwargs):
    tracker = BalanceTracker.objects.filter(user=instance.user, withdrawal_request=instance).first()

    if instance.status == 'Failed' and not tracker.reversed:
        # Reverse the transaction if failed
        try:
            with transaction.atomic():
                user = instance.user
                balance = Balances.objects.get(user=user)
                if tracker:
                    # Reverse the balances to their previous state
                    balance.deposits = tracker.last_deposit
                    balance.profits = tracker.last_profits
                    balance.bonus = tracker.last_bonus
                    balance.save()
                    tracker.reversed = True
                    tracker.save()

        except Exception as e:
            logger.exception(f"Error reversing transaction: {e}")
    
    elif instance.status in ['Approved', 'Completed']:
        try:
            with transaction.atomic():
                # Delete the tracker after the withdrawal is successfully processed
                if tracker:
                    tracker.reversed = True
                    tracker.save()
        except Exception as e:
            logger.exception(f"Error deleting balance tracker after approval: {e}")

@receiver(post_save, sender=Verification)
def send_verification_email(sender, instance, created, **kwargs):
        if created and instance.user.accesssettings.email_alerts:
            user = instance.user
            
            subject = 'Verification documents received!'
            message = (
                f'Hello {user.get_full_name()}'
                f'Thank you for submitting your verification request. Our team will review the information provided and you will receive further updates once available.\n\n'
            )
            context = {'message':message}
            html_message = render_to_string('emails/verification_status.html', context)
            plain_message = strip_tags(html_message)
            from_email = settings.DEFAULT_FROM_EMAIL 
            recipient_list = [user.email]
            email = EmailMultiAlternatives(
                subject, 
                plain_message, 
                from_email, 
                recipient_list
            )
            email.attach_alternative(html_message, "text/html")
            try:
                email.send()
                logger.info('Email sent successfully')
            except Exception as e:
                logger.exception(f'Failed to send verification submitted email: {e}')
                logger.debug(f'Email details: Subject: {subject}, Recipient: {recipient_list}')
                pass
            
        elif not created and instance.user.accesssettings.email_alerts:
            user = instance.user
            if instance.status == 'Verified':
                title = 'Your profile is now verified!'
                message = (
                    f'Hello {user.get_full_name()}'
                    f'Your verification documents have been approved and you are now eligible to access and enjoy all the features of your Lumis X account.\n\n'
                    f'Thank you for your patience and understanding.\n\n'
                )
            elif instance.status == 'Failed':
                title = 'Verification Failed!'
                message = (
                    f'Hello {user.get_full_name()}'
                    f'Unfortunately, your verification documents have been rejected. Please review your documents and try again. Tips: only provide the required documents as outlined in the verification process. Make sure to provide easily readable and clear documents without light glares..\n\n'
                )
            else:
                title = None
                message = None

            if title and message:
                try:
                    context = {'message':message}
                    html_message = render_to_string('emails/verification_status.html', context)
                    plain_message = strip_tags(html_message)
                    from_email = settings.DEFAULT_FROM_EMAIL 
                    recipient_list = [user.email]
                    email = EmailMultiAlternatives(
                        title, 
                        plain_message, 
                        from_email, 
                        recipient_list
                    )
                    email.attach_alternative(html_message, "text/html")
                    email.send() 
                except Exception as e:
                    logger.exception(f'Failed to send verification status email: {e}')
                    logger.debug(f'Email details: Subject: {title}, Recipient: {recipient_list}')
               

@receiver(post_save, sender=Tickets)
def send_ticket_email(sender, instance, created, **kwargs):
    if created and hasattr(instance, 'user'):
        try:
            title = "Your ticket has been created!"
            message = (
                f"Hello {instance.user.get_full_name() or instance.name}\n\n"
                f"Your ticket has been created with ID: {instance.ticket_id}\n\n"
                f"You will receive more updates once your ticket is updated"
            )
            Notifications.objects.create(
                user=instance.user,
                title=title,
                message=message,
                seen=False
            )
        except Exception as e:
            logger.exception("An error occured while creating or nottfying user of a newly created ticket.")
    
    elif created and not hasattr(instance, 'user'):
        email = instance.email
        subject = "Thank you for your inquiry"
        message = (
            "Hello Guest\n"
            f"Thank you for dropping us a ping, your ticket has been registered with reference ID: {instance.ticket_id}!\n"
            "Our support team will join your ticket soon."
        )
        context = {
            'instance': {
                'message': instance.message, 
                'title': instance.title
            }, 
            'user': instance.user
        }
        html_content = render_to_string('emails/announcement.html', context)
        text_content = strip_tags(html_content) 

        # stage and send the email
        try:
            email = EmailMultiAlternatives(
                subject,
                text_content,
                settings.DEFAULT_FROM_EMAIL,
                [instance.user.email],
            )
            email.attach_alternative(html_content, "text/html")
            email.send()
        except Exception as e:
            logger.exception(f"Error sending notification email: {e}")
            pass
        html_content = render_to_string('', {'user': instance.investor, 'instance': instance})
        text_content = strip_tags(html_content) 

        

            # Send the email
        email = EmailMultiAlternatives(
            subject,
            text_content,
            settings.DEFAULT_FROM_EMAIL,
            [instance.investor.email],
        )
        email.attach_alternative(html_content, "text/html")

