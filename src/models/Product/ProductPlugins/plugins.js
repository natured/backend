const autopopulate = require('mongoose-autopopulate');
const paginate = require('mongoose-paginate');
const natured = require('natured-model');
const facebookFeed = require('./facebookFeed');
const hideable = require('./hideable');
const subscribable = require('./subscribable');
const populateBreadcrumbs = require('./populateBreadcrumbs');

module.exports = [
  autopopulate,
  paginate,
  facebookFeed,
  hideable,
  subscribable,
  populateBreadcrumbs,
  natured, // note: this has to go last
];
