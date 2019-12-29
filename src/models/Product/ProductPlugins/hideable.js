// plugin for allowing product to be shown when browsing or not
module.exports = function (Product) {
  // adds show field
  Product.add({ show: { type: Boolean, default: true } });

  /**
   * toggles the show flag on a product
   * recalculates # products on the category
   */
  Product.methods.toggleVisibility = async function (show) {
    this.show = show;
    return this.save();
  };

  // toggles the show flag by id
  Product.statics.findByIdAndToggleVisibility = async function (id, show) {
    const product = await this.findById(id);
    return product.toggleVisibility(show);
  };
};
