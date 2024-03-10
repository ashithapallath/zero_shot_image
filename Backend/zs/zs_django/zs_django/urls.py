from django.contrib import admin
from django.urls import path
from .views import detect_violence



urlpatterns = [
    path('admin/', admin.site.urls),
    path('detect-violence/', detect_violence, name='detect_violence'),
]
