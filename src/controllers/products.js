const { Product } = require('../models');

module.exports = {

  // Fetches a page of recently added products
  recentlyAdded: async (req, res) => {
    res.send(await Product.getPage(req.query.page));
  },

  // Fetches products for a category by category slug
  byCategory: async (req, res) => {
    res.send(await Product.byCategory(req.params.categorySlug));
  },

  // Fetches products for a foodmaker by foodmaker id
  byFoodmaker: async (req, res) => {
    res.send(await Product.find({ ...req.query, foodmaker: req.params.foodmakerId }));
  },

  // Fetches a single product by foodmaker + product slugs
  bySlugs: async (req, res) => {
    res.send(await Product.findBySlugs(req.params.productSlug, req.params.foodmakerSlug));
  }
};
