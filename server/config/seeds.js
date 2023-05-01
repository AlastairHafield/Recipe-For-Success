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
      image: "berries.jpeg",
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
      image: "bread.jpeg",
      category: categories[1]._id,
      price: 6.99,
      calories: 500,
    },
    {
      name: "Mixed Veg Curry",
      ingredients: "Potato, beans, corn, cauliflower, tomatoes and spices",
      description:
        "Made with cooked vegetables with tomato based gravy and spices",
      image: "chicken-salad.webp",
      category: categories[1]._id,
      price: 7.99,
      calories: 500,
    },
    {
      name: "Tandoori Roti",
      ingredients: "Wheat flour",
      description: "Made with wheat flour dough and grilled on the oven",
      image: "donuts-5602701.webp",
      category: categories[1]._id,
      price: 1.99,
      calories: 500,
    },
    {
      name: "Mashroom Curry",
      ingredients: "Mashroom, onion, tomato and spices",
      description: "Made with tomato based gravy and spices",
      image: "pizza.jpeg",
      category: categories[1]._id,
      price: 4.99,
      calories: 100,
    },
    {
      name: "Veg Burger",
      ingredients: "chickpeas, corn, tomato and sauces and burger buns",
      description: "Made with veggi pattie",
      image: "berries.jpeg",
      category: categories[1]._id,
      price: 399.99,
      calories: 30,
    },

    {
      name: "Vegan leek & potato soup",
      ingredients: "",
      description: "Try this dairy-free, plant-based twist on the classic leek and potato soup. Ideal for lunch or a starter, top with chopped chives and enjoy with crusty bread",
      image: "berries.jpeg",
      category: categories[0]._id,
      price: 7.99,
      calories: 170,
    },

    {
      name: "Vegan lentil stew",
      ingredients: "",
      description: "Providing an impressive five of your 5-a-day in each portion, this filling vegan stew is low calorie and low fat, and also provides fibre, vitamin C, iron and calcium",
      image: "berries.jpeg",
      category: categories[0]._id,
      price: 7.99,
      calories: 485,
    },

    {
      name: "Vegan biryani",
      ingredients: "",
      description: "Try our vegan version of a biryani. Our plant-based recipe has raisins and cashews for texture and flavour, and provides all of your 5-a-day",
      image: "berries.jpeg",
      category: categories[0]._id,
      price: 8.99,
      calories: 500,
    },

    {
      name: " Chicken pasta bake ",
      ingredients: "",
      description: "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad",
      image: "berries.jpeg",
      category: categories[5]._id,
      price: 8.99,
      calories: 300,
    },

    {
      name: " Roast beef with red wine & banana shallots ",
      ingredients: "",
      description: "Succulent roast topside of beef, made especially irresistible with a mustard crust, piquant shallots and red wine enriched gravy",
      image: "berries.jpeg",
      category: categories[5]._id,
      price: 10.99,
      calories: 594,
    },

    {
      name: " Homemade Turkish lahmacun ",
      ingredients: "",
      description: "Sometimes called 'Turkish pizza', this crispy flatbread topped with spiced mincemeat is a popular street food across the Middle East",
      image: "berries.jpeg",
      category: categories[5]._id,
      price: 8.99,
      calories: 682,
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
