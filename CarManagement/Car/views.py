from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import ShowRoomOwner,Car,ShowRoom,CarAssignToShowRoom,ShowRoomOwnerAssignToShowRoom,CarImage
from .serializers import CarSerializers,ShowRoomSerializers,ShowRoomOwnerSerializers,CarAssignToShowRoomSerializers,ShowRoomOwnerAssignToShowRoomSerializers,GetCarByShowRoomSerializers,ImageSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import JsonResponse

def modify_input_for_multiple_files(car_id, image):
    dict = {}
    dict['car'] = car_id
    dict['image'] = image
    return dict

class CreateCar(APIView):
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
        transmission= request.data['transmission']
        price= request.data['price']
        horse_power= request.data['horse_power']
        propellant= request.data['propellant']
        try:
            car_id = Car.objects.latest("id").id+1
            if car_id!=NULL:
                car_id=car_id
            else:
                car_id=1
        except:
            pass
        Car.objects.create(manufacture=manufacture,tagline=tagline,car_model=car_model,mileage=mileage,year=year,status=carstatus,transmission=transmission,price=price,horse_power=horse_power,propellant=propellant)
        images = dict((request.data).lists())['image']
        flag = 1
        arr = []
        for img_name in images:
            modified_data = modify_input_for_multiple_files(car_id,
                                                            img_name)
            file_serializer = ImageSerializer(data=modified_data)
            if file_serializer.is_valid():
                file_serializer.save()
                arr.append(file_serializer.data)
            else:
                flag = 0

        if flag == 1:
            return Response(arr, status=status.HTTP_201_CREATED)
        else:
            return Response(arr, status=status.HTTP_400_BAD_REQUEST)

# class CarViewSet(generics.ListCreateAPIView):
#     queryset = Car.objects.all()
#     serializer_class = CarSerializers

class CarViewSet(APIView):
    def get(self,request):
        car = Car.objects.all()
        serializer = CarSerializers(car,many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = CarSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SingleCarDetail(APIView):
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
    def get(self,request):
        showroom= ShowRoom.objects.all()
        serializer = ShowRoomSerializers(showroom,many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = ShowRoomSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleShowRoomDetail(APIView):
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
    def get(self,request):
        carassigntoshowroom= CarAssignToShowRoom.objects.all()
        serializer = CarAssignToShowRoomSerializers(carassigntoshowroom,many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = CarAssignToShowRoomSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetCarAssignToShowRoom(APIView):
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
    def get(self,request):
        showroomownerassigntoshowroom= ShowRoomOwnerAssignToShowRoom.objects.all()
        serializer = ShowRoomOwnerAssignToShowRoomSerializers(showroomownerassigntoshowroom,many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = ShowRoomOwnerAssignToShowRoomSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShowRoomOwnerDetail(APIView):
    def get(self,request):
        showroomowner= ShowRoomOwner.objects.all()
        serializer = ShowRoomOwnerSerializers(showroomowner,many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = ShowRoomOwnerSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GetCarByShowroom(generics.ListAPIView):
    serializer_class =  GetCarByShowRoomSerializers
    def get_queryset(self):
        queryset = CarAssignToShowRoom.objects.all()
        showroom = self.request.query_params.get('showroom', None)
        if showroom is not None:
            queryset = queryset.filter(showroom=showroom)
        return queryset

class CarInformationImage(generics.ListAPIView):
    serializer_class =  ImageSerializer
    def get_queryset(self):
        queryset = CarImage.objects.all()
        showroom = self.request.query_params.get('car', None)
        if showroom is not None:
            queryset = queryset.filter(Car=car)
        return queryset

class CarInformationWithSingleImage(generics.ListAPIView):
    serializer_class =  ImageSerializer
    def get_queryset(self):
        queryset = CarImage.objects.all()
        queryset = queryset.filter(image=1)
        return queryset
