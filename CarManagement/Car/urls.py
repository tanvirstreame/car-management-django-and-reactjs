'''
This file should contain the main url
'''
from django.urls import path
from Car import views

urlpatterns = [
    path('api/v1/get-car-by-showroom/', views.GetCarByShowroom.as_view(),
         name="get-car-by-showroom"),
    path('api/v1/all-car-detail/', views.CarViewSet.as_view(), name="car-detail"),
    path('api/v1/single-car-detail/<int:pk>',
         views.SingleCarDetail.as_view(), name="single-car-detail"),
    path('api/v1/showroom/', views.ShowRoomDetail.as_view(), name="showroom-detail"),
    path('api/v1/single-showroom/<int:pk>', views.SingleShowRoomDetail.as_view(),
         name="single-showroom-detail"),
    path('api/v1/showroom-all-car/', views.CarAssignToShowRoomDetail.as_view(),
         name="showroom-all-car"),
    path('api/v1/owners-all-showroom/', views.ShowRoomOwnerAssignToShowRoomDetail.as_view(),
         name="owners-all-showroom"),
    path('api/v1/showroomowner/', views.ShowRoomOwnerDetail.as_view(), name="showroomowner"),
    path('api/v1/createcar/', views.CreateCar.as_view(), name="create-car"),
    path('api/v1/single-car-image/', views.CarInformationImage.as_view(),
         name="single-car-info-image"),
]
