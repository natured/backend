const { Foodmaker } = require('../models');

module.exports = {

  // Fetches all foodmakers
  index: async (req, res) => {
    res.send(await Foodmaker.find());
  },

  // Fetches a foodmaker by slug
  bySlug: async (req, res) => {
    res.send(await Foodmaker.findOne({ slug: req.params.slug }));
  },
};
