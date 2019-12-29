const mongoose = require('mongoose');
// const hasPrice = require('../pricing/hasPrice');
const plugins = require('./ProductPlugins');

const Product = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },
  more: {
    general: { type: String },
    ingredients: { type: String },
    storage: { type: String },
    nutritionalLabel: { type: String },
  },
  priority: Number,
  foodmaker: { type: mongoose.Schema.Types.ObjectId, ref: 'foodmaker', required: true, autopopulate: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'category', required: true, autopopulate: true },
  availability: { type: mongoose.Schema.Types.Mixed },
}, { timestamps: true });

plugins.forEach(plugin => Product.plugin(plugin));

// Export the class
module.exports = mongoose.model('product', Product);
