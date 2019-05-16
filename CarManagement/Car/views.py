from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import ShowRoomOwner,Car,ShowRoom,CarAssignToShowRoom,ShowRoomOwnerAssignToShowRoom
from .serializers import CarSerializers,ShowRoomSerializers,ShowRoomOwnerSerializers,CarAssignToShowRoomSerializers,ShowRoomOwnerAssignToShowRoomSerializers,GetCarByShowRoomSerializers
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404

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
