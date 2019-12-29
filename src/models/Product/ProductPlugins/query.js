const mongoose = require('mongoose');


// plugin for additional product queries
module.exports = function (Product) {

  // helper function to retrieve a product by matching slugs
  Product.statics.findBySlugs = async function (product, foodmaker) {
    const products = await this.find({ slug: product });
    return products.filter(({ foodmaker: { slug } }) => slug === foodmaker)[0];
  };

  // helpers function to get all products for a category by its slug
  Product.statics.byCategory = async function (slug) {
    const category = await mongoose.model('category').findOne({ slug });

    return this.find({
      show: { $ne: false },
      category: category.id,
    }).sort({ priority: 'ascending' });
  }
};
