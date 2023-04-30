import { gql } from "@apollo/client";

export const QUERY_RECIPES = gql`
  query getRecipes($category: ID) {
    recipes(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($recipes: [ID]!) {
    checkout(recipes: $recipes) {
      session
    }
  }
`;

export const QUERY_ALL_RECIPES = gql`
  {
    recipes {
      _id
      name
      description
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        recipes {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
