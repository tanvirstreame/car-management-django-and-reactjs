import graphene
import car.schema

class Query(car.schema.Query, graphene.ObjectType):
    pass
class Mutation(car.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)