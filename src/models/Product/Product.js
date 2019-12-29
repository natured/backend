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
}, { toObject: { virtuals: true }, toJSON: { virtuals: true }, timestamps: true });

// Product.plugin(hasPrice);
plugins.forEach(plugin => Product.plugin(plugin));


// helper function to retrieve a product by matching slugs
Product.statics.findBySlugs = async function (product, foodmaker) {
  const products = await this.find({ slug: product });
  return products.filter(({ foodmaker: { slug } }) => slug === foodmaker)[0];
};

// Export the class
module.exports = mongoose.model('product', Product);
