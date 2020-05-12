'''
This file should contain the main url
'''
from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from core import views  

urlpatterns = [
    # Your URLs...
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', views.UserList.as_view(), name='user-list'),
]
