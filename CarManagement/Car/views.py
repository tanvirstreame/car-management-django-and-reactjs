from django.shortcuts import render
from rest_framework import viewsets
from .models import ShowRoomOwner,Car,ShowRoom,CarAssignToShowRoom,ShowRoomOwnerAssignToShowRoom
from .serializers import CarSerializers,ShowRoomSerializers,ShowRoomOwnerSerializers,CarAssignToShowRoomSerializers,ShowRoomOwnerAssignToShowRoomSerializers,GetCarByShowRoomSerializers
from rest_framework import generics

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializers

class ShowRoomViewSet(viewsets.ModelViewSet):
    queryset = ShowRoom.objects.all()
    serializer_class = ShowRoomSerializers

class ShowRoomOwnerViewSet(viewsets.ModelViewSet):
    queryset = ShowRoomOwner.objects.all()
    serializer_class = ShowRoomOwnerSerializers

class CarAssignToShowRoomViewSet(viewsets.ModelViewSet):
	queryset = CarAssignToShowRoom.objects.all()
	serializer_class = CarAssignToShowRoomSerializers
    	
class ShowRoomOwnerAssignToShowRoomViewSet(viewsets.ModelViewSet):
	queryset = ShowRoomOwnerAssignToShowRoom.objects.all()
	serializer_class = ShowRoomOwnerAssignToShowRoomSerializers

class GetCarByShowroom(generics.ListAPIView):
    serializer_class =  GetCarByShowRoomSerializers

    def get_queryset(self):
        queryset = CarAssignToShowRoom.objects.all()
        showroom = self.request.query_params.get('showroom', None)
        if showroom is not None:
            queryset = queryset.filter(showroom=showroom)
        return queryset
   	



