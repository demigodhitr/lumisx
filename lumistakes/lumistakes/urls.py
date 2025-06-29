
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import handler404, handler403, handler500, handler400

urlpatterns = [
    path('hitr/', admin.site.urls),
    path('', include('HomeApp.urls')),
    path('lumisx/', include('lumisx.urls')),
    path('auth/', include('social_django.urls', namespace='social')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


handler404 = 'lumisx.views.error_404'
handler403 = 'lumisx.views.error_403'
handler500 = 'lumisx.views.error_500'
