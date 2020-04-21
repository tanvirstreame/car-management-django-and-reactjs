from django.contrib import admin
from django.urls import (
    path, 
    include
)
from django.conf.urls.static import static
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from .schema import schema

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('car.urls'),name="car"),   
    path('graphql/',  csrf_exempt(GraphQLView.as_view(schema=schema, graphiql=True))),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

