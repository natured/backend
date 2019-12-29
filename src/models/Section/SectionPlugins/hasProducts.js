const mongoose = require('mongoose');

module.exports = function (Section) {
  Section.add({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
  });

  Section.pre('find', function () { this.populate('products'); });
  Section.pre('findOne', function () { this.populate('products'); });
  Section.pre('findOneAndUpdate', function () { this.populate('products'); });

  Section.statics.addProduct = async function (sectionId, productId) {
    return this.findByIdAndUpdate(
      sectionId, { $addToSet: { products: productId } }, { new: true },
    );
  };

  Section.statics.removeProduct = async function (sectionId, productId) {
    return this.findByIdAndUpdate(
      sectionId, { $pull: { products: productId } }, { new: true },
    );
  };
};
