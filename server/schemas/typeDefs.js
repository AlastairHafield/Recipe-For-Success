const { gql } = require("apollo-server-express");

// creating the string
const typeDefs = gql`
  # Define which fields are accessible from the Class model
  type Category {
    _id: ID
    name: String
  }

  type recipe {
    _id: ID
    name: String
    description: String
    ingredients: String
    calories: Int
    method: String
    image: String
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    recipes: [recipe]
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

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    categories: [Category]
    recipes(category: ID, name: String): [recipe]
    recipe(_id: ID!): recipe
    user: User
    order(_id: ID!): Order
    checkout(recipes: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth


    addOrder(recipes: [ID]!): Order

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User


    addRecipe(
      name: String!
      description: String!
      ingredients: String!
      calories: Int!
      method: String!
      image: String!
      price: Float!
      categoryId: ID!
    ): recipe


    updateRecipe(
      _id: ID!
      description: String!
      ingredients: String!
      calories: Int!
    ): recipe

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
