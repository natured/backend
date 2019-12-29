const autopopulate = require('mongoose-autopopulate');
const paginate = require('mongoose-paginate');
const natured = require('natured-model');
const hideable = require('./hideable');
const subscribable = require('./subscribable');
const populateBreadcrumbs = require('./populateBreadcrumbs');
const recentlyAdded = require('./recentlyAdded');
const hasPrice = require('./hasPrice');
const query = require('./query');

module.exports = [
  autopopulate,
  paginate,
  query,
  hasPrice,
  subscribable,
  populateBreadcrumbs,
  recentlyAdded, //***
  hideable,
  natured, // note: this has to go last
];
