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
      image: "img1.jpg",
      category: categories[1]._id,
      price: 5.99,
      calories: 150,
    },
    {
      name: "Veg Biriyani",
      ingredients:
        "Basmati rice, onion, carrot, beans, potato, curd and biriyani masala",
      description:
        "Made with boiled basmati rice, cooked vegetables and  spices",
      image: "img2.jpg",
      category: categories[1]._id,
      price: 6.99,
      calories: 500,
    },
    {
      name: "Mixed Veg Curry",
      ingredients: "Potato, beans, corn, cauliflower, tomatoes and spices",
      description:
        "Made with cooked vegetables with tomato based gravy and spices",
      image: "img3.jpg",
      category: categories[1]._id,
      price: 7.99,
      calories: 500,
    },
    {
      name: "Tandoori Roti",
      ingredients: "Wheat flour",
      description: "Made with wheat flour dough and grilled on the oven",
      image: "img4.jpg",
      category: categories[1]._id,
      price: 1.99,
      calories: 500,
    },
    {
      name: "Mashroom Curry",
      ingredients: "Mashroom, onion, tomato and spices",
      description: "Made with tomato based gravy and spices",
      image: "img5.jpg",
      category: categories[1]._id,
      price: 4.99,
      calories: 100,
    },
    {
      name: "Veg Burger",
      ingredients: "chickpeas, corn, tomato and sauces and burger buns",
      description: "Made with veggi pattie",
      image: "img6.jpg",
      category: categories[1]._id,
      price: 399.99,
      calories: 30,
    },

    {
      name: "Vegan leek & potato soup",
      ingredients: "",
      description: "Try this dairy-free, plant-based twist on the classic leek and potato soup. Ideal for lunch or a starter, top with chopped chives and enjoy with crusty bread",
      image: "img7.jpg",
      category: categories[0]._id,
      price: 7.99,
      calories: 170,
    },

    {
      name: "Vegan lentil stew",
      ingredients: "",
      description: "Providing an impressive five of your 5-a-day in each portion, this filling vegan stew is low calorie and low fat, and also provides fibre, vitamin C, iron and calcium",
      image: "img8.jpg",
      category: categories[0]._id,
      price: 7.99,
      calories: 485,
    },

    {
      name: "Vegan biryani",
      ingredients: "",
      description: "Try our vegan version of a biryani. Our plant-based recipe has raisins and cashews for texture and flavour, and provides all of your 5-a-day",
      image: "img9.jpg",
      category: categories[0]._id,
      price: 8.99,
      calories: 500,
    },

    {
      name: "Vegan mac and cheese",
      ingredients: "",
      description: "Make the ultimate comfort dish, macaroni cheese, but with vegan credentials. The recipe is quick and easy to make, so a great midweek meal for the family",
      image: "img10.jpg",
      category: categories[0]._id,
      price: 9.99,
      calories: 686,
    },

    {
      name: "Easy Singapore noodles",
      ingredients: "",
      description: "Cater for the whole family with our Singapore noodles. They're healthy and vegan, making an ideal accompaniment to a Chinese meal or just on their own",
      image: "img11.jpg",
      category: categories[0]._id,
      price: 7.99,
      calories: 288,
    },
    {
      name: "Falafel burgers",
      ingredients: "",
      description: "A healthy burger that's filling too. These are great for anyone after a satisfying bite low in calories.",
      image: "img12.jpg",
      category: categories[0]._id,
      price: 7.99,
      calories: 161,
    },


    {
      name: " Chicken pasta bake ",
      ingredients: "",
      description: "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad",
      image: "img13.jpg",
      category: categories[5]._id,
      price: 8.99,
      calories: 300,
    },

    {
      name: " Roast beef with red wine & banana shallots ",
      ingredients: "",
      description: "Succulent roast topside of beef, made especially irresistible with a mustard crust, piquant shallots and red wine enriched gravy",
      image: "img14.jpg",
      category: categories[5]._id,
      price: 10.99,
      calories: 594,
    },

    {
      name: " Homemade Turkish lahmacun ",
      ingredients: "",
      description: "Sometimes called 'Turkish pizza', this crispy flatbread topped with spiced mincemeat is a popular street food across the Middle East",
      image: "img15.jpg",
      category: categories[5]._id,
      price: 8.99,
      calories: 682,
    },

    {
      name: " Pork chops with rhubarb & grains ",
      ingredients: "",
      description: "Rhubarb complements the pork chops in this dish perfectly, adding a touch of sharpness. Served with mixed grains, it's an easy midweek supper",
      image: "img16.jpg",
      category: categories[5]._id,
      price: 8.99,
      calories: 735,
    },

    {
      name: " Lamb chops with thyme, chilli & Greek htipiti ",
      ingredients: "",
      description: "Serve lamp chops with htipiti for a lovely Greek-inspired dish with fabulous flavours. Olive oil-roasted baby potatoes make a great accompaniment",
      image: "img17.jpg",
      category: categories[5]._id,
      price: 10.99,
      calories: 830,
    },

    {
      name: " Griddled lamb with wild rice salad ",
      ingredients: "",
      description: "Pan-fried lamb cutlets pair beautifully with this colourful rice salad, studded with olives, diced tomatoes and toasted almonds",
      image: "img18.jpg",
      category: categories[5]._id,
      price: 10.99,
      calories: 634,
    },

    {
      name: " Jerk-seasoned chicken pilaf ",
      ingredients: "",
      description: "Make this jerk-seasoned chicken pilaf for an easy midweek meal. It takes 30 minutes from prep to plate, so makes a speedy as well as healthy supper",
      image: "berries.jpeg",
      category: categories[2]._id,
      price: 15.99,
      calories: 411,
    },

    {
      name: " Paneer korma ",
      ingredients: "",
      description: "Cook this recipe inspired by saag paneer in just 30 minutes. It's a flavourful veggie curry that's heady with fresh ginger and cardamom. Serve with rice or naan breads",
      image: "berries.jpeg",
      category: categories[2]._id,
      price: 15.99,
      calories: 509,
    },

    {
      name: " Flourless brownies ",
      ingredients: "",
      description: "Serve these flourless brownies warm with ice cream for dessert. They're easy to make and require just five ingredients, so they're great for novice bakers",
      image: "berries.jpeg",
      category: categories[2]._id,
      price: 5.99,
      calories: 292,
    },

    {
      name: " Easy crustless quiche ",
      ingredients: "",
      description: "Serve these flourless brownies warm with ice cream for dessert. They're easy to make and require just five ingredients, so they're great for novice bakers",
      image: "berries.jpeg",
      category: categories[2]._id,
      price: 11.99,
      calories: 401,
    },

    {
      name: " Lemon & spinach rice with feta ",
      ingredients: "",
      description: "Pack in spinach, feta and walnuts into this rice dish. It's bursting with nutrients, including vitamin K, which is important for our skin, hair and bones",
      image: "berries.jpeg",
      category: categories[2]._id,
      price: 16.99,
      calories: 495,
    },

    {
      name: " Ratatouille & parmesan bake ",
      ingredients: "",
      description: "Get all five of your five-a-day with this ratatouille & cheese bake that is healthy and filling as well as being gluten-free and vegetarian",
      image: "berries.jpeg",
      category: categories[2]._id,
      price: 11.99,
      calories: 310,
    },

    {
      name: " Aubergine & chickpea stew ",
      ingredients: "",
      description: "Dig out the slow cooker to make this healthy stew. Topped with toasted pine nuts and served with flatbreads, it makes a wonderfully nutritious vegan meal",
      image: "berries.jpeg",
      category: categories[3]._id,
      price: 7.99,
      calories: 266,
    },

    {
      name: " Crispy sesame lemon chicken ",
      ingredients: "",
      description: "Make our crispy sesame lemon chicken for a quick, easy and flavour-packed family dinner. Scatter with spring onions and serve with your favourite sides.",
      image: "berries.jpeg",
      category: categories[3]._id,
      price: 12.99,
      calories: 280,
    },

    {
      name: " Honey & orange roast sea bass with lentils ",
      ingredients: "",
      description: "Liven up your midweek meals with this low-calorie, gluten-free fish supper - ready in under half an hour.",
      image: "berries.jpeg",
      category: categories[3]._id,
      price: 19.99,
      calories: 495,
    },

    {
      name: " Spice & honey salmon with couscous ",
      ingredients: "",
      description: "The fish doesn't need to marinate for long to take on all the Moroccan flavours in this dish.",
      image: "berries.jpeg",
      category: categories[3]._id,
      price: 19.99,
      calories: 506,
    },

    {
      name: " Veggie Thai red curry ",
      ingredients: "",
      description: "This fragrant Thai dish is sure to get your taste buds into action, and is ready in under an hour",
      image: "berries.jpeg",
      category: categories[3]._id,
      price: 13.99,
      calories: 233,
    },

    {
      name: " Florentine dairy-free pizza ",
      ingredients: "",
      description: "Hit your 5-a-day target in one go with this crisp pizza piled high with veg, suitable for the lactose-intolerant",
      image: "berries.jpeg",
      category: categories[3]._id,
      price: 11.99,
      calories: 827,
    },

    {
      name: " Mediterranean feta salad with pomegranate dressing ",
      ingredients: "",
      description: "Middle Eastern pomegranate molasses gives this salad a delicious tang",
      image: "berries.jpeg",
      category: categories[4]._id,
      price: 6.99,
      calories: 258,
    },

    {
      name: " Spicy kimchi pancake (kimchi jeon) ",
      ingredients: "",
      description: "Make these Korean-style spicy pancakes made with gut-friendly kimchi (sour cabbage) and gochujang (Korean red pepper paste). They're packed with flavour",
      image: "berries.jpeg",
      category: categories[4]._id,
      price: 13.99,
      calories: 692,
    },

    {
      name: " Tilapia in Thai sauce ",
      ingredients: "",
      description: "Use this sustainable white fish in place of cod, to make an easy one-pan supper",
      image: "berries.jpeg",
      category: categories[4]._id,
      price: 8.99,
      calories: 328,
    },

    {
      name: " Choc-cherry fudge torte with cherry sorbet ",
      ingredients: "",
      description: "This divine, squidgy chocolate cake is dairy and gluten-free, so everyone can enjoy a slice for dessert – even the vegans at your dinner party",
      image: "berries.jpeg",
      category: categories[4]._id,
      price: 16.99,
      calories: 592,
    },

    {
      name: " Hot butter bean salad with lemon ",
      ingredients: "",
      description: "A quick, healthy side dish you can make with storecupboard ingredients ",
      image: "berries.jpeg",
      category: categories[4]._id,
      price: 7.99,
      calories: 142,
    },

    {
      name: " Baked apples with prunes, cinnamon & ginger ",
      ingredients: "",
      description: "A simple, classic low-fat pudding to use up seasonal Bramleys ",
      image: "berries.jpeg",
      category: categories[4]._id,
      price: 10.99,
      calories: 284,
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
