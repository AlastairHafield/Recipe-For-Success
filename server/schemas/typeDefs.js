const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Dietary {
    diteName: String
  }

  type Recipe {
    _id: ID
    name: String
    description: String
    ingredients: String
    calories: Int
    image: String
    price: Float
    category: Category
    dietary: Dietary
  }

  type Review {
    id: ID!
    user: [User]

  }

  type Rating {
    id: ID!
    name: String
    rating: Int
    comment: String

  }

  type Order {
    _id: ID
    purchaseDate: String

    recipes: [Recipe]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]

    recipes(category: ID, name: String): [Recipe]
    recipe(_id: ID!): Recipe
    dite(diteName: String): Dietary
    user: User
    order(_id: ID!): Order
    checkout(recipes: [ID]!): Checkout
    review: [Review] !
    rating: [Rating]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    updateRecipe(
      _id: ID!
      description: String!
      ingredients: String!
      calories: Int!
    ): Recipe

    login(email: String!, password: String!): Auth
    createReviews(name:String!, email: String!, rating:Int!, comment: String!): Review
    addRating(name: String!, rating: Int!,comment: String): Rating
  }
`;

module.exports = typeDefs;
