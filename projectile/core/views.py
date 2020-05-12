from rest_framework import generics
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework import status
from .models import User

class UserList(generics.ListCreateAPIView):
    '''
    Fetch user and create user
    '''
    def post(self, request):
        username = self.request.data.get("username")
        email = self.request.data.get("email")
        password = self.request.data.get("password")

        try:
            user_instance = User(
                username=username,
                email=email
            )
            user_instance.set_password(password)
            user_instance.save()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_200_OK)

        


    