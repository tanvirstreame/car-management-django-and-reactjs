'''
This file should contain views
'''

from django.http import JsonResponse
from django.http import Http404
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
        key = ['manufacture', 'tagline', 'car_model', 'mileage',
               'year', 'status', 'transmission', 'price', 'horse_power', 'propellant'],
        data = {}
        for item in data:
            data.update(item, request.data[item])

        lattest_car = Car.objects.create(**data)
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
                return Response(file_serializer.data, status=status.HTTP_201_CREATED)

        return Response('error', status=status.HTTP_400_BAD_REQUEST)


class CarViewSet(ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializers

    def post(self, request, format=None):
        serializer = CarSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleCarDetail(APIView):
    '''
    Single car detail
    '''
    def get_object(self, pk):
        try:
            return Car.objects.get(pk=pk)
        except Car.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = CarSerializers(snippet)
        return Response(serializer.data)


class ShowRoomDetail(APIView):
    '''
    Showroom detail
    '''
    def get(self, request):
        showroom = ShowRoom.objects.all()
        serializer = ShowRoomSerializers(showroom, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ShowRoomSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleShowRoomDetail(APIView):
    '''
    Single show room detail
    '''
    def get_object(self, pk):
        try:
            return ShowRoom.objects.get(pk=pk)
        except ShowRoom.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = ShowRoomSerializers(snippet)
        return Response(serializer.data)


class CarAssignToShowRoomDetail(APIView):
    '''
    Car assign to showroom detail
    '''
    def get(self, request):
        carassigntoshowroom = CarAssignToShowRoom.objects.all()
        serializer = CarAssignToShowRoomSerializers(
            carassigntoshowroom, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CarAssignToShowRoomSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetCarAssignToShowRoom(APIView):
    '''
    Get car assign to showroom
    '''
    def get_object(self, pk):
        try:
            return CarAssignToShowRoom.objects.get(pk=pk)
        except CarAssignToShowRoom.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = CarAssignToShowRoom(snippet)
        return Response(serializer.data)


class ShowRoomOwnerAssignToShowRoomDetail(APIView):
    '''
    Showroom owner assign to showroom detail
    '''
    def get(self, request):
        showroomownerassigntoshowroom = ShowRoomOwnerAssignToShowRoom.objects.all()
        serializer = ShowRoomOwnerAssignToShowRoomSerializers(
            showroomownerassigntoshowroom, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ShowRoomOwnerAssignToShowRoomSerializers(
            data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShowRoomOwnerDetail(APIView):
    '''
    Showroom owner detail
    '''
    def get(self, request):
        showroomowner = ShowRoomOwner.objects.all()
        serializer = ShowRoomOwnerSerializers(showroomowner, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ShowRoomOwnerSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


class CarInformationWithSingleImage(generics.ListAPIView):
    '''
    Car information single image
    '''
    serializer_class = ImageSerializer

    def get_queryset(self):
        queryset = CarImage.objects.all()
        queryset = queryset.filter(image=1)
        return queryset
