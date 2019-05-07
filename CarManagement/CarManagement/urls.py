from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Car import views
from django.conf.urls.static import static
from django.conf import settings
router = routers.DefaultRouter()
router.register('AllCarDetail', views.CarViewSet, 'Car')
router.register('ShowRoom', views.ShowRoomViewSet, 'ShowRoom')
router.register('ShowRoomOwner', views.ShowRoomOwnerViewSet, 'ShowRoomOwner')
router.register('CarAssignToShowRoom', views.CarAssignToShowRoomViewSet, 'CarAssignToShowRoom')
router.register('ShowRoomOwnerAssignToShowRoom', views.ShowRoomOwnerAssignToShowRoomViewSet, 'ShowRoomOwnerAssignToShowRoom')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('GetCarByShowroom/', views.GetCarByShowroom.as_view(),name="GetCarByShowroom"),
    path('', include(router.urls)),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

