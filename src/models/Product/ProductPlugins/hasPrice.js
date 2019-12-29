const mongoose = require('mongoose');
const natured = require('natured-model');

// Require some fields only when the pricing is byWeight
const whenWeighted = function () { return this.byWeight; };

// Declaration of pricing
const pricing = new mongoose.Schema({
  byWeight: { type: Boolean, required: true },
  price: { type: Number, required: true },
  sizeDescription: { type: String, required: true },
  bottlePrice: { type: Number },
  unit: { type: String, enum: ['lb', 'oz'], required: whenWeighted },
  tax: { type: Boolean, default: false },
  lowWeight: { type: Number, required: whenWeighted },
  highWeight: { type: Number, required: whenWeighted },
  approximatePrice: { type: Number, required: whenWeighted },
  lowPrice: { type: Number, required: whenWeighted },
  highPrice: { type: Number, required: whenWeighted },
});

pricing.plugin(natured);

pricing.virtual('display').get(function () {
  const price = `$${(this.price / 100).toFixed(2)}`;
  const unit = this.byWeight ? `/${this.unit}` : '';
  return this.price ? price + unit : 'None';
});

module.exports = function (schema) {
  // adds pricing field
  schema.add({ pricing: { type: pricing } });

  // field to determine if product is weighted easily
  schema.virtual('weighted').get(function () {
    return this.pricing && this.pricing.byWeight;
  });
};
