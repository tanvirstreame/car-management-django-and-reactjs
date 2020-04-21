import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from .models import (
    Car,
    CarImage,
)

# Create a GraphQL type for the actor model
class CarImageType(DjangoObjectType):
    class Meta:
        model = CarImage


class CarType(DjangoObjectType):
    class Meta:
        model = Car


# Create a Query type
class Query(ObjectType):

    #car
    car_detail = graphene.Field(CarType, id=graphene.Int())
    cars = graphene.List(CarType)

    #car image
    car_image_detail = graphene.Field(CarImageType, id=graphene.Int())
    car_images = graphene.List(CarImageType)


    def resolve_car_detail(self, info, **kwargs):
        '''
        Get car detail
        '''

        id = kwargs.get("id")
        if id is not None:
            return Car.objects.get(id=id)

    def resolve_cars(self, info, **kwargs):
        '''
        Get cars
        '''

        return Car.objects.all()


    def resolve_car_images(self, info, **kwargs):
        '''
        Get all car images
        '''

        return CarImage.objects.all()

    def resolve_car_image_detail(self, info, **kwargs):
        '''
        Get car image detail
        '''

        id = kwargs.get("id")
        if id is not None:
            return CarImage.objects.get(id=id)


# Mutation


class CarInput(graphene.InputObjectType):
    car_status_choice = graphene.Int()
    car_transmission_choice = graphene.Int()
    manufacture = graphene.String()
    tagline = graphene.String()
    car_model = graphene.String()
    mileage = graphene.Decimal()
    year = graphene.Int()
    status = graphene.Int()
    transmission = graphene.Int()
    price = graphene.Decimal()
    horse_power = graphene.Decimal()
    propellant = graphene.String()


class CreateCar(graphene.Mutation):
    class Arguments:
        input = CarInput()
    

    car = graphene.Field(CarType)
        
    def mutate(self, info, input=None):
        car = Car.objects.create(**input)
        return CreateCar(car=car)


class CarImageInput(graphene.InputObjectType):
    car = graphene.Int()
    image = graphene.Int()


class CreateCarImage(graphene.Mutation):
    class Arguments:
        input = CarImageInput()
    

    car_image = graphene.Field(CarImageType)
        
    def mutate(self, info, input=None):
        car_image = CarImage.objects.create(**input)
        return CreateCarImage(car_image=car_image)


class Mutation(ObjectType):
    create_car_image = CreateCarImage.Field()
    create_car = CreateCar.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
