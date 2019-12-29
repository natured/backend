const { Category } = require('../models');

module.exports = {

  // Fetches all categories
  index: async (req, res) => {
    res.send(await Category.find());
  },
};
