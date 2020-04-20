from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from car import views
from django.conf.urls.static import static
from django.conf import settings
from graphene_django.views import GraphQLView
from .schema import schema

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('car.urls'),name="car"),   
    path('graphql/', GraphQLView.as_view(schema=schema, graphiql=True)),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

