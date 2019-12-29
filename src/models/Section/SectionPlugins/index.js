const natured = require('natured-model');
const hasProducts = require('./hasProducts');

module.exports = [
  { plugin: hasProducts },
  { plugin: natured },
];
