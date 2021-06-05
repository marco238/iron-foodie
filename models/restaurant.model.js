const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    address: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: 'https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg',
    },
    description: {
      type: String,
      required: true,
      minlength: 10,
    },
    categories: {
      type: [String],
      default: [],
    },
    capacity: {
      type: Number,
      required: true,
    },
    maxProductCost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Restaurant = mongoose.model('Restaurant', schema);

module.exports = Restaurant;