from django.urls import path
from HomeApp.views import *



urlpatterns = [
    path('', home_index, name='homepage')
]