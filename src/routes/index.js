const categories = require('./categories');
const products = require('./products');

module.exports = [
  { path: '/catalog/categories', handler: categories },
  { path: '/catalog/products', handler: products },
];
