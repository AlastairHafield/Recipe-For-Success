const { AuthenticationError } = require("apollo-server-express");

const { User, Recipe, Category, Order } = require("../models");

const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const recipes = []; // assume this is an array of recipe objects

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

    recipes: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Recipe.find(params).populate("category");
    },

    recipe: async (parent, { _id }) => {
      return await Recipe.findById(_id).populate("category");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.recipes",

          populate: "category",
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.recipes",

          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ recipes: args.recipes });
      const line_items = [];

      const { recipes } = await order.populate("recipes");

      for (let i = 0; i < recipes.length; i++) {
        const recipe = await stripe.recipes.create({
          name: recipes[i].name,
          description: recipes[i].description,
          images: [`${url}/images/${recipes[i].image}`],
        });

        const price = await stripe.prices.create({
          recipe: recipe.id,
          unit_amount: recipes[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    addOrder: async (parent, { recipes }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ recipes });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    addRecipe: (
      _,
      {
        name,
        description,
        ingredients,
        calories,
        method,
        image,
        price,
        category,
      },
      context
    ) => {
      // check if there is a currently authenticated user
      if (!context.user) {
        throw new Error("Unauthorized");
      }

      const newRecipe = {
        _id: String(recipes.length + 1),
        name,
        description,
        ingredients,
        calories,
        method,
        image,
        price,
        category,
        createdBy: context.user._id, // set the createdBy field to the current user's ID
      };
      recipes.push(newRecipe);
      return newRecipe;
    },

    updateRecipe: async (_, args, { models }) => {
      const { _id, description, ingredients, method, calories } = args;
      try {
        const updatedRecipe = await models.Recipe.findOneAndUpdate(
          { _id },
          { description, ingredients, method, calories },
          { new: true }
        );
        return updatedRecipe;
      } catch (error) {
        throw new Error("Failed to update recipe");
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
