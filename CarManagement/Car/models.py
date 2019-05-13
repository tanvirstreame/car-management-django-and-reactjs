from django.db import models
from decimal import *

class ShowRoomOwner(models.Model):
    email = models.CharField(max_length=30, blank=True)
    username = models.CharField(max_length=30, blank=True)
    password = models.CharField(max_length=30, blank=True)
    def __str__(self):
        return self.email


class ShowRoom(models.Model):
    name = models.CharField(max_length=30, blank=True)
    registration_number = models.CharField(max_length=30, blank=True)
    logo_type = models.CharField(max_length=30, blank=True)
    contact_info = models.CharField(max_length=30, blank=True)
    def __str__(self):
        return self.name


class Car(models.Model):
    car_status_choice=((0,"Sold"),(1,"In Stock"))
    car_transmission_choice=((0,"Manual"),(1,"Automatic"))
    manufacture = models.CharField(max_length=30, blank=True)
    tagline = models.CharField(max_length=30, blank=True)
    car_model = models.CharField(max_length=30, blank=True)
    mileage = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal(0.00))
    year = models.IntegerField(default=0)
    status = models.IntegerField(default=0,choices=car_status_choice)
    transmission = models.IntegerField(default=0,choices=car_transmission_choice)
    price = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal(0.00))
    horse_power = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal(0.00))
    propellant = models.CharField(max_length=30, blank=True)
    file = models.FileField(blank=False, null=False)
    def __str__(self):
        return self.manufacture


class CarAssignToShowRoom(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    showroom = models.ForeignKey(ShowRoom, on_delete=models.CASCADE)


class ShowRoomOwnerAssignToShowRoom(models.Model):
    showroom_owner = models.ForeignKey(ShowRoomOwner, on_delete=models.CASCADE)
    showroom = models.ForeignKey(ShowRoom, on_delete=models.CASCADE)
