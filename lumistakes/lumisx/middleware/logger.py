from lumisx.models import ActivityLog
from django.utils.deprecation import MiddlewareMixin

EXCLUDED_PATHS = [
    '/hitr/',
    '/admin/',
    '/static/',
    '/media/',
    '/favicon.ico',
    '/robots.txt',
    '__debug__/',   
]
class LoggerMiddleware(MiddlewareMixin):
    def process_request(self, request):
        # Log the user's activity
        if not request.user.is_authenticated:
            return
        
        if any(request.path.startswith(path) for path in EXCLUDED_PATHS):
            return

        ActivityLog.objects.create(
            user=request.user,
            path=request.path,
            method=request.method,
            ip_address=self.get_client_ip(request),
            user_agent=request.META.get('HTTP_USER_AGENT', '')
        )
        
    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR', '')
        return ip