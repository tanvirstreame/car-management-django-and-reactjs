from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from car import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('car.urls'),name="car"),   
    path('core/',include('core.urls'),name="core"),   
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

