const mongoose = require('mongoose');

const { Schema } = mongoose;
const ratingSchema = new Schema({

    name: String,
    rating: Number,
    comment: String
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;