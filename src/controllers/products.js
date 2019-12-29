const { Product } = require('../models');

module.exports = {

  // Fetches a page of recently added products
  recentlyAdded: async (req, res) => {
    res.send(await Product.getPage(req.query.page));
  },

};
