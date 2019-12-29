const { Category } = require('../models');

module.exports = {

  // Fetches all categories
  index: async (req, res) => {
    res.send(await Category.find());
  },

  // Fetches list of top-level categories
  parents: async (req, res) => {
    res.send(await Category.find({ parent: null }).sort({ priority: 'ascending' }));
  },

  // Fetches category by slug
};
