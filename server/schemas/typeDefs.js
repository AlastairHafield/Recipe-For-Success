// importing gql from the apllo-server-express package
const { gql } = require("apollo-server-express");

// creating the string
const typeDefs = gql`
# Define which fields are accessible from the Class model
  type Category {
    _id: ID
    name: String
  }

  type Recipe {
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

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    categories: [Category]
    recipes(category: ID, name: String): [Recipe]
    recipe(_id: ID!): Recipe
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

    addRecipe: [Recipe]

    updateRecipe(
      _id: ID!
      description: String!
      ingredients: String!
      calories: Int!
    ): Recipe

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
