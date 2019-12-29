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

};
