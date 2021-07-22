from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls import url
from rest_framework import routers
from core import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('car/',include('car.urls'),name="car"),   
    path('core/',include('core.urls'),name="core"),  
    path('', views.index, name="index" ),
    re_path(r'^(?:.*)/?$', views.index, name="index"),  
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

