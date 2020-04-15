'''
This file should contain tests
'''

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import ShowRoomOwner


class ShowRoomOwnerTestCase(TestCase):

    def setUp(self):
        ShowRoomOwner.objects.create(
            email="Tanvir@gmail.com", username="Tanvir", password="11234")
        ShowRoomOwner.objects.create(
            email="Biplab@gmail.com", username="Biplab", password="11234")

    def test_get_single_showroomowner(self):
        '''
        test get single showroomowner
        '''
        new_client = APIClient()
        res = new_client.get(
            '/showroomowner/', kwargs={'pk': 5}, format="json")
        self.assertEqual(res.status_code, status.HTTP_404_NOT_FOUND)

    def test_get_all_showroomowner(self):
        '''
        test get all showroomowner
        '''
        new_client = APIClient()
        res = new_client.get('/showroomowner/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_get_all_showroom(self):
        '''
        test get all showroom
        '''
        new_client = APIClient()
        res = new_client.get('/showroom/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_get_all_car(self):
        '''
        test get all car
        '''
        new_client = APIClient()
        res = new_client.get('/all-car-detail/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_get_all_carassigntoshowroom(self):
        '''
        test get all car assign to showroom
        '''
        new_client = APIClient()
        res = new_client.get('/showroom-all-car/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_get_all_showroomownerassigntoshowroom(self):
        '''
        test get all showroom owner assign to showroom
        '''
        new_client = APIClient()
        res = new_client.get('/owners-all-showroom/', format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)


    def test_get_single_get_car_by_showroom_info(self):
        '''
        test get single get car by showroom info
        '''
        new_client = APIClient()
        res = new_client.get('/get-car-by-showroom/',
                             kwargs={'showroom': 1}, format="json")
        self.assertEqual(res.status_code, status.HTTP_200_OK)
