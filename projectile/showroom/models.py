from django.db import models

# Create your models here.

class ShowRoomOwner(models.Model):
    '''
    Showroom owner models
    '''
    email = models.CharField(max_length=30, blank=False)
    username = models.CharField(max_length=30, blank=False)
    password = models.CharField(max_length=30, blank=False)

    def __str__(self):
        return self.email


class ShowRoom(models.Model):
    '''
    Showroom models
    '''
    name = models.CharField(max_length=30, blank=False)
    registration_number = models.CharField(max_length=30, blank=False)
    logo_type = models.CharField(max_length=30, blank=False)
    contact_info = models.CharField(max_length=30, blank=False)

    def __str__(self):
        return self.name
