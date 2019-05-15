from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Car import views
from django.conf.urls.static import static
from django.conf import settings
# router = routers.DefaultRouter()
# router.register('showroom', views.ShowRoomViewSet, 'ShowRoom')
# router.register('showroomowner', views.ShowRoomOwnerViewSet, 'ShowRoomOwner')
# router.register('showroom-all-car', views.CarAssignToShowRoomViewSet, 'CarAssignToShowRoom')
# router.register('owners-all-showroom', views.ShowRoomOwnerAssignToShowRoomViewSet, 'ShowRoomOwnerAssignToShowRoom')

urlpatterns = [
    path('get-car-by-showroom/', views.GetCarByShowroom.as_view(),name="GetCarByShowroom"),
    path('all-car-detail/', views.CarViewSet.as_view(),name="car-detail"),
    path('single-car-detail/<int:pk>', views.SingleCarDetail.as_view(),name="single-car-detail"),
    path('showroom/', views.ShowRoomDetail.as_view(),name="showroom-detail"),
    path('single-showroom/<int:pk>', views.SingleShowRoomDetail.as_view(),name="single-showroom-detail"),
    path('showroom-all-car/', views.CarAssignToShowRoomDetail.as_view(),name="showroom-all-car"),
    path('owners-all-showroom/', views.ShowRoomOwnerAssignToShowRoomDetail.as_view(),name="owners-all-showroom"),
    path('showroomowner/', views.ShowRoomOwnerDetail.as_view(),name="showroomowner"),



]


