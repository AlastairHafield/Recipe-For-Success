<<<<<<< HEAD
const { AuthenticationError } = require('apollo-server-express');

const { User, Recipe, Category, Order, Dietary } = require('../models');

const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
=======
const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
>>>>>>> main

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
<<<<<<< HEAD

    recipes: async (parent, { category, name }) => {

=======
    products: async (parent, { category, name }) => {
>>>>>>> main
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }


      return await Recipe.find(params).populate('category');
    },
    recipes: async (parent, { _id }) => {
      return await Recipe.findById(_id).populate('category');
    },
    dite: async (parent, { diteary, diteName }) => {
      return await Dietary.find(diteName).populate(diteary);

    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.recipes',

          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
<<<<<<< HEAD

          path: 'orders.recipes',

          populate: 'category'
=======
          path: "orders.products",
          populate: "category",
>>>>>>> main
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
<<<<<<< HEAD
      const order = new Order({ recipes: args.recipes });
      const line_items = [];

      const { recipes } = await order.populate('recipes');

      for (let i = 0; i < recipes.length; i++) {
        const recipe = await stripe.recipes.create({
          name: recipes[i].name,
          description: recipes[i].description,
          images: [`${url}/images/${recipes[i].image}`]

=======
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
>>>>>>> main
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
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
<<<<<<< HEAD

    addOrder: async (parent, { recipes }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ recipes });

=======
    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });
>>>>>>> main

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
<<<<<<< HEAD

    updateRecipe: async (parent, { _id, description, ingredients, calories }) => {
      // const decrement = Math.abs(quantity) * -1;
      //ToDo: update the recipe

      return await Recipe.findByIdAndUpdate(_id, { $inc: { description: decrement } }, { new: true });

=======
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
>>>>>>> main
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
