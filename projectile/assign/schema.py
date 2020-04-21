import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from .models import (
    CarAssignToShowRoom,
    ShowRoomOwnerAssignToShowRoom
)

from car.models import Car
from showroom.models import ShowRoom

# Create a GraphQL type for the actor model

class CarAssignToShowRoomType(DjangoObjectType):
    class Meta:
        model = CarAssignToShowRoom


class ShowRoomOwnerAssignToShowRoomType(DjangoObjectType):
    class Meta:
        model = ShowRoomOwnerAssignToShowRoom



# Create a Query type
class Query(ObjectType):

    #car assign to showroom
    car_assign_to_showroom_detail = graphene.Field(CarAssignToShowRoomType, id=graphene.Int())
    car_assign_to_showrooms = graphene.List(CarAssignToShowRoomType)

    #showroom assign to owner
    showroom_owner_assign_to_showroom_detail = graphene.Field(
        ShowRoomOwnerAssignToShowRoomType, 
        id=graphene.Int()
    )
    showroom_owner_assign_to_showrooms = graphene.List(ShowRoomOwnerAssignToShowRoomType)

    def resolve_car_assign_to_showroom_detail(self, info, **kwargs):
        '''
        Get assign to car assign to showroom
        '''

        id = kwargs.get("id")
        if id is not None:
            return CarAssignToShowRoom.objects.get(id=id)

     def resolve_car_assign_to_showrooms(self, info, **kwargs):
        '''
        Get assign to car assign to showrooms
        '''

        return CarAssignToShowRoom.objects.all()

    def resolve_showroom_owner_assign_to_showrooms(self, info, **kwargs):
        '''
        Get all showroom owner assign to showrooms
        '''

        return ShowRoomOwnerAssignToShowRoom.objects.all()

    def resolve_showroom_owner_assign_to_showroom_detail(self, info, **kwargs):
        '''
        Get showroom owner assign to showroom detail
        '''

        id = kwargs.get("id")
        if id is not None:
            return ShowRoomOwnerAssignToShowRoom.objects.get(id=id)


# Mutation

class CarAssignToShowRoomInput(graphene.InputObjectType):
    car = graphene.Int()
    image = graphene.Int()


class CreateCarAssignToShowRoom(graphene.Mutation):
    class Arguments:
        input = CarAssignToShowRoomInput()
    

    create_car_assign_to_showroom = graphene.Field(CarAssignToShowRoomType)
        
    def mutate(self, info, input=None):
        create_car_assign_to_showroom = CarAssignToShowRoom.objects.create(**input)
        return CarAssignToShowRoom(
            create_car_assign_to_showroom=create_car_assign_to_showroom)


class Mutation(ObjectType):
    create_car_assign_to_showroom = CarAssignToShowRoom.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
