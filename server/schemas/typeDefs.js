const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

   type Dietary{

    diteName: String
   }

  type Recipe {
    _id: ID
    name: String
    description: String
    ingedients: String
    calories: Int
    image: String
    price: Float
    category: Category
    diteary: Dietary

  }

  type Order {
    _id: ID
    purchaseDate: String
<<<<<<< HEAD

    recipes: [Recipe]

=======
    products: [Product]
>>>>>>> main
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
<<<<<<< HEAD

    recipes(category: ID, name: String): [Recipe]
    recipe(_id: ID!): Recipe
    dite(diteName): Dietary
    user: User
    order(_id: ID!): Order
    checkout(recipes: [ID]!): Checkout


=======
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
>>>>>>> main
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
<<<<<<< HEAD
    updateUser(firstName: String, lastName: String, email: String, password: String): User

    updateRecipe(_id: ID!, description: String!, ingredients: String! calories: Int!): Recipe

=======
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateProduct(_id: ID!, quantity: Int!): Product
>>>>>>> main
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
