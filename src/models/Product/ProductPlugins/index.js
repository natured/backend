const autopopulate = require('mongoose-autopopulate');
const paginate = require('mongoose-paginate');
const natured = require('natured-model');
const hideable = require('./hideable');
const subscribable = require('./subscribable');
const populateBreadcrumbs = require('./populateBreadcrumbs');
const recentlyAdded = require('./recentlyAdded');

module.exports = [
  autopopulate,
  paginate,
  hideable,
  subscribable,
  populateBreadcrumbs,
  recentlyAdded, //***
  natured, // note: this has to go last
];
