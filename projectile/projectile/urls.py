from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers
from core import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
	# path('', views.index, name="index" ),
    
    path('admin/', admin.site.urls),
    path('car/',include('car.urls'),name="car"),   
    path('core/',include('core.urls'),name="core"),  
    url(r'^(?:.*)/?$', views.index), 
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

