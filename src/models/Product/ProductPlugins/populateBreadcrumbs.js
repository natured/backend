// plugin for allowing product to be subscribed or not
module.exports = function (Product) {
  Product.pre('find', function () {
    this.populate({
      path: 'category',
      populate: { path: 'parent', populate: { path: 'parent' } },
    });
  });
};
