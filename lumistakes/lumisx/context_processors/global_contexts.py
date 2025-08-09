from lumisx.models import Manifest 

def inject_global_context(request):
    try:
        manifest = Manifest.objects.first()
    except Manifest.DoesNotExist:
        manifest = None

    return {
        'app_name': manifest.app_name if manifest else 'Lumis X',
        'app_version': manifest.app_version if manifest else '1.0.0',
        'app_logo': manifest.app_logo.url if manifest and manifest.app_logo else '/static/assets/img/logo.png',
        'support_email': manifest.support_email if manifest else 'helpdesk247@lumisx.exchange',
    }
