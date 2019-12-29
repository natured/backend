const natured = require('natured-model');
const hasChildren = require('./hasChildren');

module.exports = [
  hasChildren,
  natured, // note: this has to go last
];
