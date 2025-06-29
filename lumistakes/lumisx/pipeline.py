from django.contrib.auth import get_user_model
from django.core.exceptions import PermissionDenied
from .models import Profiles, Referrals, EmailVerification, AccessSettings, Notifications, Currencies, Balances, CryptoBalance, transaction
from django.core.files.base import ContentFile
from django.conf import settings
# from .views import get_referral_code
import requests
from PIL import Image
from io import BytesIO
from tempfile import NamedTemporaryFile
import logging
from .models import User
from social_core.exceptions import AuthForbidden

logger = logging.getLogger(__name__)

def save_profile(backend, user, response, *args, **kwargs):
    nationality = backend.strategy.session_get('nationality')
    print(response)
    default_currency = Currencies.objects.get(symbol="GBP")
    # Extract user information from the response based on backend
    if backend.name == 'google-oauth2':
        email = response.get('email')
        firstname = response.get('given_name')
        lastname = response.get('family_name') or "Unknown"
        picture_url = response.get('picture')  
        social_id = response.get('sub')
    elif backend.name == 'facebook':
        full_name = response.get('name', '')
        social_id = response.get('id')
        picture_url = None 
    
        email = f'{social_id}@facebook.com'
        if full_name:
            name_parts = full_name.split(' ', 1)
            firstname = name_parts[0]
            lastname = name_parts[1] if len(name_parts) > 1 else ''
        else:
            firstname = 'FacebookUser'
            lastname = ''


    try:
        # Check if the user exists
        user = User.objects.get(email=email)
        profile, _ = Profiles.objects.get_or_create(
            user=user,
            defaults={
                'nationality':nationality,
                'preferred_currency':default_currency,
            }
        )
        user_settings = AccessSettings.objects.get(user=user)

        # Handle if the user's login is disabled
        if not user_settings.can_login:
            Notifications.objects.create(
                user=user,
                title='Attention Required! Login not allowed!',
                message='We noticed a login attempt for your user account at Lumis X. However, we\'ve disabled your login. To rectify this issue, please contact our live support team via live chat on the website or by sending a mail to helpdesk247@lumistakes.com'
            )
            raise AuthForbidden("Account suspended.")
    
    except User.DoesNotExist:
        with transaction.atomic():

            # Create a new user if one doesn't exist
            user = User.objects.create_user(
                email=email,
                username=f'{firstname or "user"}-{social_id}',  
                firstname=firstname,
                lastname=lastname,
            )
            # Create a new profile for the new user
            profile = Profiles.objects.create(
                user=user, 
                nationality=nationality if nationality else 'Not specified',
                preferred_currency=default_currency,
            )
            # Create access settings for the new user
            AccessSettings.objects.create(user=user)
            # Create balance for the new user
            Balances.objects.create(user=user)
            # Create crypto balance for the new user
            CryptoBalance.objects.create(user=user)
            # Create referral instance for the new user
            Referrals.objects.create(user=user)
            
            # create email verification instance for the new user
            EmailVerification.objects.create(
                user=user,
                is_verified= True, 
                email= user.email,
                verification_code=0,
            )
            
            if backend.name == 'facebook':
                Notifications.objects.create(
                    user=user,
                    title='Please request an email update on your account',
                    message='Welcome to Vista, your flexible investment account. Please request an email update on your account to stay informed on important changes and alerts related to your account. the current email attached to your account is not eligible for use within our platform. engage the support team via live chat to request this change'
                )
        

    # Handle profile picture url if provided
    if picture_url:
        try:
            picture_response = requests.get(picture_url)
            if picture_response.status_code == 200:
                img = Image.open(BytesIO(picture_response.content))
                with NamedTemporaryFile() as temp_image:
                    img.save(temp_image, format=img.format)
                    temp_image.flush()
                    temp_image.seek(0) 
                    profile_pic_format = img.format.lower()
                    profile_pic_name = f'{social_id}.{profile_pic_format}'
                    profile.profile_pic.save(profile_pic_name, ContentFile(temp_image.read()), save=True)
        except Exception as e:
            logger.exception(f"Failed to download or save profile picture: {e}")
            default_image_path = settings.DEFAULT_AVATAR
            with open(default_image_path, 'rb') as f:
                profile.profile_pic.save('default-avatar.png', ContentFile(f.read()), save=True)
    elif not profile.profile_pic:
        default_image_path = settings.DEFAULT_AVATAR
        with open(default_image_path, 'rb') as f:
            profile.profile_pic.save('default-avatar.png', ContentFile(f.read()), save=True)

    # Update nationality
    profile.nationality = nationality if nationality else 'Not specified'
    profile.save()

    return {'user': user, 'profile': profile}
