from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Car import views
from django.conf.urls.static import static
from django.conf import settings
router = routers.DefaultRouter()
router.register('allcardetail', views.CarViewSet, 'Car')
router.register('showroom', views.ShowRoomViewSet, 'ShowRoom')
router.register('showroomowner', views.ShowRoomOwnerViewSet, 'ShowRoomOwner')
router.register('carassigntoshowroom', views.CarAssignToShowRoomViewSet, 'CarAssignToShowRoom')
router.register('showroomownerassigntoshowroom', views.ShowRoomOwnerAssignToShowRoomViewSet, 'ShowRoomOwnerAssignToShowRoom')

urlpatterns = [
    path('getcarbyshowroom/', views.GetCarByShowroom.as_view(),name="GetCarByShowroom"),
    path('', include(router.urls)),
]


