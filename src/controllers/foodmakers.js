const { Foodmaker } = require('../models');

module.exports = {

  // Fetches all foodmakers
  index: async (req, res) => {
    res.send(await Foodmaker.find());
  },
};
