from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Car import views
from django.conf.urls.static import static
from django.conf import settings
router = routers.DefaultRouter()
router.register('all-card-detail', views.CarViewSet, 'Car')
router.register('showroom', views.ShowRoomViewSet, 'ShowRoom')
router.register('showroomowner', views.ShowRoomOwnerViewSet, 'ShowRoomOwner')
router.register('showroom-all-car', views.CarAssignToShowRoomViewSet, 'CarAssignToShowRoom')
router.register('owners-all-showroom', views.ShowRoomOwnerAssignToShowRoomViewSet, 'ShowRoomOwnerAssignToShowRoom')

urlpatterns = [
    path('get-car-by-showroom/', views.GetCarByShowroom.as_view(),name="GetCarByShowroom"),
    path('', include(router.urls)),
]


