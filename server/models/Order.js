const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipe'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
