// plugin for allowing product to be subscribed or not
module.exports = function (Product) {
  // adds subscribe field
  Product.add({ subscribe: { type: Boolean, default: false } });

  // toggles the subscribe flag on a product
  Product.methods.toggleSubscribe = async function (subscribe) {
    this.subscribe = subscribe;
    return this.save();
  };

  // toggles the subscription by id
  Product.statics.toggleSubscribe = async function (id, subscribe) {
    const product = await this.findById(id);
    return product.toggleSubscribe(subscribe);
  };
};
