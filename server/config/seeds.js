const db = require("./connection");
const { User, Recipe, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Vegan" },
    { name: "Vegetarian" },
    { name: "Gluten free" },
    { name: "Lactose intolerance" },
    { name: "Nut Allergies" },
    { name: "Meat" },
  ]);

  console.log("categories seeded");

  await Recipe.deleteMany();

  const recipes = await Recipe.insertMany([
    {
      name: "Dal",
      ingredients: "Chanadal, Spices",
      description: "Made with lentils and spices",
      image: "cookie-tin.jpg",
      category: categories[1]._id,
      price: 2.99,
      calories: 150,
    },
    {
      name: "Veg Biriyani",
      ingredients:
        "Basmati rice, onion, carrot, beans, potato, curd and biriyani masala",
      description:
        "Made with boiled basmati rice, cooked vegetables and  spices",
      image: "canned-coffee.jpg",
      category: categories[1]._id,
      price: 6.99,
      calories: 500,
    },
    {
      name: "Mixed Veg Curry",
      ingredients: "Potato, beans, corn, cauliflower, tomatoes and spices",
      description:
        "Made with cooked vegetables with tomato based gravy and spices",
      image: "toilet-paper.jpg",
      category: categories[1]._id,
      price: 7.99,
      calories: 500,
    },
    {
      name: "Tandoori Roti",
      ingredients: "Wheat flour",
      description: "Made with wheat flour dough and grilled on the oven",
      image: "soap.jpg",
      category: categories[1]._id,
      price: 1.99,
      calories: 500,
    },
    {
      name: "Mashroom Curry",
      ingredients: "Mashroom, onion, tomato and spices",
      description: "Made with tomato based gravy and spices",
      image: "wooden-spoons.jpg",
      category: categories[1]._id,
      price: 4.99,
      calories: 100,
    },
    {
      name: "Veg Burger",
      ingredients: "chickpeas, corn, tomato and sauces and burger buns",
      description: "Made with veggi pattie",
      image: "camera.jpg",
      category: categories[1]._id,
      price: 399.99,
      calories: 30,
    },
  ]);

  console.log("recipes seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        recipes: [recipes[0]._id, recipes[0]._id, recipes[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
