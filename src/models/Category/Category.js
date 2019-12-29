const mongoose = require('mongoose');
const plugins = require('./CategoryPlugins');

const Category = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
  img: String,
  priority: Number,
  productCount: Number,
});

plugins.forEach(plugin => Category.plugin(plugin));

module.exports = mongoose.model('category', Category);
