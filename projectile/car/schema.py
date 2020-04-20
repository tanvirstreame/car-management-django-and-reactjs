import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from .models import ShowRoom

# Create a GraphQL type for the actor model
class ShowRoomType(DjangoObjectType):
    class Meta:
        model = ShowRoom

# Create a Query type
class Query(ObjectType):
    showroom_detail = graphene.Field(ShowRoomType, id=graphene.Int())
    showrooms = graphene.List(ShowRoomType)

    def resolve_showrooms(self, info, **kwargs):
        return ShowRoom.objects.all()

    def resolve_showroom_detail(self, info, **kwargs):
        id = kwargs.get("id")
        if id is not None:
            return ShowRoom.objects.get(id=id)

class ShowroomInput(graphene.InputObjectType):
    name = graphene.String()



class CreateShowroom(graphene.Mutation):
    class Arguments:
        input = ShowroomInput()
    

    showroom = graphene.Field(ShowRoomType)
        
    def mutate(self, info, input=None):
        showroom = ShowRoom.objects.create(**input)
        return CreateShowroom(showroom=showroom)


class Mutation(ObjectType):
    create_showroom = CreateShowroom.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)


