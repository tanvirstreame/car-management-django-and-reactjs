'''
This file should serializers
'''
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import (Car,
                     ShowRoom,
                     ShowRoomOwner,
                     CarAssignToShowRoom,
                     ShowRoomOwnerAssignToShowRoom,
                     CarImage)


class ImageSerializer(serializers.ModelSerializer):
    '''
    ImageSerializer
    '''
    class Meta:
        model = CarImage
        fields = ('id', 'car', 'image')


class CarSerializers(serializers.ModelSerializer):
    '''
    CarSerializers
    '''
    image_feild = ImageSerializer(many=True)

    class Meta:
        model = Car
        fields = ('id', 'manufacture', 'tagline', 'car_model', 'mileage', 'year',
                  'status', 'transmission', 'price', 'horse_power', 'propellant', 'image_feild')


class ShowRoomSerializers(serializers.ModelSerializer):
    '''
    ShowRoomSerializers
    '''
    class Meta:
        model = ShowRoom
        fields = '__all__'


class ShowRoomOwnerSerializers(serializers.ModelSerializer):
    '''
    ShowRoomOwnerSerializers
    '''
    email = serializers.EmailField(validators=[UniqueValidator(queryset=ShowRoomOwner.objects.all())])
    class Meta:
        model = ShowRoomOwner
        fields = '__all__'
         


class CarAssignToShowRoomSerializers(serializers.ModelSerializer):
    '''
    CarAssignToShowRoomSerializers
    '''
    class Meta:
        model = CarAssignToShowRoom
        fields = '__all__'


class ShowRoomOwnerAssignToShowRoomSerializers(serializers.ModelSerializer):
    '''
    ShowRoomOwnerAssignToShowRoomSerializers
    '''
    class Meta:
        model = ShowRoomOwnerAssignToShowRoom
        fields = '__all__'


class GetCarByShowRoomSerializers(serializers.ModelSerializer):
    '''
    GetCarByShowRoomSerializers
    '''
    car = CarSerializers()

    class Meta:
        model = CarAssignToShowRoom
        fields = ('id', 'car', 'showroom')
