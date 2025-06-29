from django.utils.deprecation import MiddlewareMixin
from django.contrib.auth.middleware import get_user
from django.contrib.auth.models import AnonymousUser
from lumisx.helpers import fetch_exchange_rates





class UpdateBalanceMiddleware(MiddlewareMixin):
    def process_request(self, request):
        user = get_user(request)
        paths = ['/lumisx/', '/lumisx/wallet/', '/lumisx/cards/', '/lumisx/settings/']
        if user.is_authenticated and request.path in paths:
            fetch_exchange_rates(user)
            print('Fetched exchange rates')