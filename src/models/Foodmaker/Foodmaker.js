const mongoose = require('mongoose');
const natured = require('natured-model');

const Foodmaker = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  img: { type: String },
  location: { type: String, required: true },
  description: { type: String, required: true },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

const plugins = [natured];
plugins.forEach(plugin => Foodmaker.plugin(plugin));

module.exports = mongoose.model('foodmaker', Foodmaker);
