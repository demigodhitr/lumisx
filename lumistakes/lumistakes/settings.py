import os
import environ
from pathlib import Path


AUTH_USER_MODEL = 'lumisx.User'

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env()                 # create helper
environ.Env.read_env(BASE_DIR / ".env")

# CREDENTIALS. . .
# exchange rate api key
EXCHANGE_KEY = env('EXCHANGE_KEY', default='')

# polygon api key
POLYGON_API_KEY = env('POLYGON_API_KEY', default='')


# GOOGLE CAPTCHA SECRET
G_RECAPTCHA_SECRET = env('G_RECAPTCHA_SECRET', default='')

G_RECAPTCHA_SITE_KEY = env('G_RECAPTCHA_SITE_KEY', default='')


# finnhub api
FINNHUB_API_KEY = env('FINNHUB_API_KEY', default='')

# telegram bot token
TELEGRAM_BOT_TOKEN = env('TELEGRAM_BOT_TOKEN', default='')

# admin telegram chat id
LUMISTAKES_ADMIN_CHAT_ID = env('LUMISTAKES_ADMIN_CHAT_ID', default='')

# Etherscan API key
ETHERSCAN_API_KEY = env('ETHERSCAN_API_KEY', default='')

LOGIN_URL = 'signin'
LOGOUT_URL = 'signout'  

LOGIN_REDIRECT_URL = '/lumisx/'
LOGOUT_REDIRECT_URL = '/lumisx/'

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles', 
    'django.contrib.humanize',
    'HomeApp',
    'lumisx',
    'WalletConnect', 
    'webpack_loader',
    'social_django',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
    'lumisx.middleware.set_headers.CustomSecurityHeadersMiddleware',
    'social_django.middleware.SocialAuthExceptionMiddleware',
    'lumisx.middleware.update_balances.UpdateBalanceMiddleware',
    'lumisx.middleware.logger.LoggerMiddleware',
]

CSRF_COOKIE_SAMESITE = 'None' if not DEBUG else 'Lax'
CSRF_COOKIE_SECURE = not DEBUG  
SESSION_COOKIE_SECURE = not DEBUG

ROOT_URLCONF = 'lumistakes.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR,'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

WSGI_APPLICATION = 'lumistakes.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  
        'NAME': env('DATABASE_NAME', default='lumistakes_db'),               
        'USER': env('DATABASE_USER', default='root'),                    
        'PASSWORD': env('DATABASE_PASSWORD', default=''),                 
        'HOST': 'localhost',                   
        'PORT': '3306',  
        'OPTIONS': {
            'charset': 'utf8mb4',
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'"
        },                      
    }
}


# CACHING CONFIGS
CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'lumisx_cache_table',
    }
}


# ERROR LOGGING CONFIG
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file': {
            'level': 'ERROR',
            'class': 'logging.FileHandler',
            'filename': 'django_errors.log',
            'formatter': 'verbose',
        },
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
            'formatter': 'verbose',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['file', 'console', 'mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
        'lumisx.management.commands.execute_trade': {
            'handlers': ['file'],
            'level': 'INFO',
            'propagate': False,
        },
    },
}



LANGUAGE_CODE = 'en-uk'

TIME_ZONE = 'Africa/Lagos'

USE_I18N = True

USE_TZ = True


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# EMAILBACKEND 
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = env('EMAIL_HOST')
EMAIL_PORT = 465
EMAIL_USE_SSL = True
EMAIL_USE_TLS = False
EMAIL_HOST_USER = env('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = env('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL = env('DEFAULT_FROM_EMAIL')
SERVER_EMAIL = env('SERVER_EMAIL')


WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'app/',  # must match react output dir 
        'STATS_FILE': os.path.join(BASE_DIR, 'WalletConnect/app/webpack-stats.json'),
    }
}

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'WalletConnect/app/build/static'),
]


AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)


SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = env('SOCIAL_AUTH_GOOGLE_OAUTH2_KEY')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = env('SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET')

SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = [
    'email',
    'profile',
]
# SOCIAL_AUTH_GOOGLE_OAUTH2_REDIRECT_URI = 'http://localhost:8080/oauth/complete/google-oauth2/'  # for local testing

#PIPELINE
SOCIAL_AUTH_PIPELINE = (
    'social_core.pipeline.social_auth.social_details',
    'social_core.pipeline.social_auth.social_uid',
    'social_core.pipeline.social_auth.auth_allowed',
    'social_core.pipeline.social_auth.social_user',  
    'lumisx.pipeline.save_profile', # custom pipeline function
    'social_core.pipeline.social_auth.associate_user',
    'social_core.pipeline.social_auth.load_extra_data',
    'social_core.pipeline.user.user_details',
)

DEFAULT_AVATAR = BASE_DIR / 'lumisx' / 'static' / 'default-avatar.png'

