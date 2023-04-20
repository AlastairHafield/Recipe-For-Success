const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  ingedients: {
    type: String,

  },
  calories: {
    type: Number,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  diteary: {
    type: Schema.Types.ObjectId,
    ref: 'Dietary',
    required: true
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
