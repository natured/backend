const mongoose = require('mongoose');
const natured = require('natured-model');
// const hasChildren = require('./plugins/hasChildren');

const Category = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'category' },
  img: String,
  priority: Number,
  productCount: Number,
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

// // Standardizes models
Category.plugin(natured);

// Adds functionality for nesting child categories
// Category.plugin(hasChildren);

module.exports = mongoose.model('category', Category);
