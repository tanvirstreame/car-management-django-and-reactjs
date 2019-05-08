import json
from rest_framework.test import APIClient
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from .models import ShowRoomOwner,Car,ShowRoom,CarAssignToShowRoom,ShowRoomOwnerAssignToShowRoom
from .serializers import CarSerializers,ShowRoomSerializers,ShowRoomOwnerSerializers,CarAssignToShowRoomSerializers,ShowRoomOwnerAssignToShowRoomSerializers,GetCarByShowRoomSerializers

class ShowRoomOwnerTestCase(TestCase):
    
    def setUp(self):
        ShowRoomOwner.objects.create(email="Tanvir@gmail.com", username="Tanvir",password="11234")
        ShowRoomOwner.objects.create(email="Biplab@gmail.com", username="Biplab",password="11234")

    def test_get_single_showroomowner(self):
        new_client = APIClient()
        res = new_client.get('/showroomowner/', kwargs={'pk': 5}, format="json")
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)
    def test_get_all_showroomowner(self):
        new_client = APIClient()
        res = new_client.get('/showroomowner/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)
    def test_get_all_showroom(self):
        new_client = APIClient()
        res = new_client.get('/showroom/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)
    def test_get_all_car(self):
        new_client = APIClient()
        res = new_client.get('/allcardetail/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)
   