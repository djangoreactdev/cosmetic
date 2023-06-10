import graphene
from graphql_jwt import mutations
from cosmeticpro.ecommerce.product.queries import ProductQuery
from cosmeticpro.ecommerce.comment.mutations import CommentMutation
from cosmeticpro.ecommerce.accounts.mutations import AccountsMutation
from cosmeticpro.ecommerce.accounts.queries import AccountsQuery
from cosmeticpro.ecommerce.category.queries import CategoryQuery
from cosmeticpro.ecommerce.cart.queris import CartQuery
from cosmeticpro.ecommerce.cart.mutations import CartMutation
from cosmeticpro.ecommerce.order.queries import OrderQuery
from cosmeticpro.ecommerce.order.mutations import OrderMutations
from cosmeticpro.ecommerce.search.queries import SearchQuery
from cosmeticpro.ecommerce.blog.querice import ArticleQuery


class Query(
    ArticleQuery, SearchQuery, OrderQuery, CartQuery, CategoryQuery, AccountsQuery, ProductQuery, graphene.ObjectType
):
    pass


class Mutation(OrderMutations, CartMutation, CommentMutation, AccountsMutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
