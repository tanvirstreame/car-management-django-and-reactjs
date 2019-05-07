from django.db import models
from decimal import *

# Create your models here.
class ShowRoomOwner(models.Model):
    email=models.CharField(max_length=30, blank=True)
    username=models.CharField(max_length=30, blank=True)
    password=models.CharField(max_length=30, blank=True)

class ShowRoom(models.Model):
    name=models.CharField(max_length=30, blank=True)
    registrationNumber=models.IntegerField(default=0)
    logoType=models.CharField(max_length=30, blank=True)
    contactInfo=models.CharField(max_length=30, blank=True)
      
class Car(models.Model):
    manufacture = models.CharField(max_length=30, blank=True)
    tagline = models.CharField(max_length=30, blank=True)
    carModel = models.CharField(max_length=30, blank=True)
    mileage = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal(0.00))
    year = models.IntegerField(default=0)
    status = models.IntegerField(default=0)
    transmission = models.CharField(max_length=30, blank=True)
    price = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal(0.00))
    horsepower = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal(0.00))
    propellant = models.CharField(max_length=30, blank=True)
    file = models.FileField(blank=False, null=False)

class CarAssignToShowRoom(models.Model):
    car=models.ForeignKey(Car,on_delete=models.CASCADE)
    showroom=models.ForeignKey(ShowRoom,on_delete=models.CASCADE)

class ShowRoomOwnerAssignToShowRoom(models.Model):
    showroomOwner=models.ForeignKey(ShowRoomOwner,on_delete=models.CASCADE)
    showroom=models.ForeignKey(ShowRoom,on_delete=models.CASCADE)



  

    
