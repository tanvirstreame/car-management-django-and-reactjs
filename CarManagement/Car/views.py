'''
This file should contain views
'''

from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView
from rest_framework import status
from rest_framework.parsers import (MultiPartParser, FormParser)
from .models import (
    ShowRoomOwner,
    Car,
    ShowRoom,
    CarAssignToShowRoom,
    ShowRoomOwnerAssignToShowRoom,
    CarImage
)
from .serializers import (
    CarSerializers,
    ShowRoomSerializers,
    ShowRoomOwnerSerializers,
    CarAssignToShowRoomSerializers,
    ShowRoomOwnerAssignToShowRoomSerializers,
    GetCarByShowRoomSerializers,
    ImageSerializer
)


def modify_input_for_multiple_files(lattest_car, image):
    '''
    multiple files send via dict
    '''
    dict = {}
    dict['car'] = lattest_car.id
    dict['image'] = image
    return dict


class CreateCar(APIView):
    '''
    Creating car
    '''
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request):
        all_images = CarImage.objects.all()
        serializer = ImageSerializer(all_images, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, *args, **kwargs):
        manufacture = request.data['manufacture']
        tagline = request.data['tagline']
        car_model = request.data['car_model']
        mileage = request.data['mileage']
        year = request.data['year']
        carstatus = request.data['status']
        transmission = request.data['transmission']
        price = request.data['price']
        horse_power = request.data['horse_power']
        propellant = request.data['propellant']
        lattest_car = Car.objects.create(manufacture=manufacture, tagline=tagline, car_model=car_model, mileage=mileage,
                                         year=year, status=carstatus, transmission=transmission, price=price, horse_power=horse_power, propellant=propellant)
        images = dict((request.data).lists())['image']

        for img_name in images:
            file_serializer = ImageSerializer(
                data=modify_input_for_multiple_files(
                    lattest_car,
                    img_name
                )
            )

            if file_serializer.is_valid():
                file_serializer.save()
            else:
                return Response("Error", status=status.HTTP_400_BAD_REQUEST)
        return Response("Success", status=status.HTTP_201_CREATED)


class CarViewSet(ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializers

    def post(self, request, format=None):
        serializer = CarSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleCarDetail(generics.RetrieveUpdateDestroyAPIView):
    '''
    Single car detail
    '''

    queryset = Car.objects.all()
    serializer_class = CarSerializers


class ShowRoomDetail(generics.ListCreateAPIView):
    '''
    Showroom detail
    '''

    queryset = ShowRoom.objects.all()
    serializer_class = ShowRoomSerializers


class SingleShowRoomDetail(generics.RetrieveUpdateDestroyAPIView):
    '''
    Single show room detail
    '''

    queryset = ShowRoom.objects.all()
    serializer_class = ShowRoomSerializers


class CarAssignToShowRoomDetail(generics.ListCreateAPIView):
    '''
    Car assign to showroom detail
    '''

    queryset = CarAssignToShowRoom.objects.all()
    serializer_class = CarAssignToShowRoomSerializers


class ShowRoomOwnerAssignToShowRoomDetail(generics.ListCreateAPIView):
    '''
    Showroom owner assign to showroom detail
    '''

    queryset = ShowRoomOwnerAssignToShowRoom.objects.all()
    serializer_class = ShowRoomOwnerAssignToShowRoomSerializers


class ShowRoomOwnerDetail(generics.ListCreateAPIView):
    '''
    Showroom owner detail
    '''

    queryset = ShowRoomOwner.objects.all()
    serializer_class = ShowRoomOwnerSerializers


class GetCarByShowroom(generics.ListAPIView):
    '''
    Get car by showroom
    '''
    serializer_class = GetCarByShowRoomSerializers

    def get_queryset(self):
        queryset = CarAssignToShowRoom.objects.all()
        showroom = self.request.query_params.get('showroom', None)
        if showroom is not None:
            queryset = queryset.filter(showroom=showroom)
        return queryset


class CarInformationImage(generics.ListAPIView):
    '''
    Car information image
    '''
    serializer_class = ImageSerializer

    def get_queryset(self):
        queryset = CarImage.objects.all()
        car = self.request.query_params.get('car', None)
        if car is not None:
            queryset = queryset.filter(car=car)
        return queryset
