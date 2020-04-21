from django.db import models
from car.models import Car
from showroom.models import (
    ShowRoom,
    ShowRoomOwner
)
# Create your models here.

class CarAssignToShowRoom(models.Model):
    ''' 
    Car assign to showroom model
    '''
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    showroom = models.ForeignKey(ShowRoom, on_delete=models.CASCADE)


class ShowRoomOwnerAssignToShowRoom(models.Model):
    '''
    Showroom owner assign to showroom model
    '''
    showroom_owner = models.ForeignKey(ShowRoomOwner, on_delete=models.CASCADE)
    showroom = models.ForeignKey(ShowRoom, on_delete=models.CASCADE)
