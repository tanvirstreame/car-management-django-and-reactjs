'''
This file should contain the main url
'''
from django.urls import path
from Car import views

urlpatterns = [
    path('get-car-by-showroom/', views.GetCarByShowroom.as_view(),
         name="get-car-by-showroom"),
    path('all-car-detail/', views.CarViewSet.as_view(), name="car-detail"),
    path('single-car-detail/<int:pk>',
         views.SingleCarDetail.as_view(), name="single-car-detail"),
    path('showroom/', views.ShowRoomDetail.as_view(), name="showroom-detail"),
    path('single-showroom/<int:pk>', views.SingleShowRoomDetail.as_view(),
         name="single-showroom-detail"),
    path('showroom-all-car/', views.CarAssignToShowRoomDetail.as_view(),
         name="showroom-all-car"),
    path('owners-all-showroom/', views.ShowRoomOwnerAssignToShowRoomDetail.as_view(),
         name="owners-all-showroom"),
    path('showroomowner/', views.ShowRoomOwnerDetail.as_view(), name="showroomowner"),
    path('createcar/', views.CreateCar.as_view(), name="create-car"),
    path('single-car-image/', views.CarInformationImage.as_view(),
         name="single-car-info-image"),
]
