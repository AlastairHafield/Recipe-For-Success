const mongoose = require("mongoose");

const { Schema } = mongoose;
const reviewSchema = new Schema({

  name: { type: String, required: true},
  email: {type: String, required: true},
  rating: {type: Number, required: true},
  comment: {type: String, required: true},

});

const Review 