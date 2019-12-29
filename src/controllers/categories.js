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

  // Gets single category by its slug
  bySlug: async (req, res) => {
    res.send(await Category.findOne({ slug: req.params.slug }));
  },
};
