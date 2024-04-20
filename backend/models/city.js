const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String,
  count: Number
});

const City = mongoose.model('City', citySchema, 'cities');

module.exports = City;