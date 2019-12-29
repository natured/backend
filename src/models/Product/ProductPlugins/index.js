const autopopulate = require('mongoose-autopopulate');
const paginate = require('mongoose-paginate');
const natured = require('natured-model');
const hideable = require('./hideable');
const subscribable = require('./subscribable');
const populateBreadcrumbs = require('./populateBreadcrumbs');
const recentlyAdded = require('./recentlyAdded');
const hasPrice = require('./hasPrice');

module.exports = [
  autopopulate,
  paginate,
  hideable,
  hasPrice,
  subscribable,
  populateBreadcrumbs,
  recentlyAdded, //***
  natured, // note: this has to go last
];
