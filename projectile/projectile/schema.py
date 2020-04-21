import graphene
import car.schema
import showroom.schema

class Query(showroom.schema.Query, car.schema.Query, graphene.ObjectType):
    pass
class Mutation(showroom.schema.Mutation, car.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)