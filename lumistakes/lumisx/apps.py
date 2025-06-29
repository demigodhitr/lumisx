from django.apps import AppConfig


class LumisxConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'lumisx'

    def ready(self):
        import lumisx.signals
