const categories = require('./categories');
const products = require('./products');
const foodmakers = require('./foodmakers');

module.exports = [
  { path: '/catalog/categories', handler: categories },
  { path: '/catalog/products', handler: products },
  { path: '/catalog/foodmakers', handler: foodmakers },
];
