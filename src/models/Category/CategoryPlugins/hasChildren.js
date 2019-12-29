const mongoose = require('mongoose');

/**
 * Handles relations for category
 *   - Automatically populates category children, grandchildren and parents
 *     when retrieving a single category
 *   - On create / update of new category, recalculate # products and # children
 */
module.exports = function (Category) {
  Category.post('findOne', (doc) => {
    const childProps = {
      path: 'children',
      options: { sort: { priority: 1 } },
    };

    const grandchildProps = {
      ...childProps,
      match: { productCount: { $gt: 0 } },
    };

    // Populates parent
    return doc.populate({ path: 'parent', populate: { path: 'parent' } }).populate({
      ...childProps, populate: grandchildProps,
    }).execPopulate();
  });

  Category.pre('find', function () {
    const childProps = {
      path: 'children',
      options: { sort: { priority: 1 } }
    };

    // Populates children and grandchildren
    this.populate({ ...childProps, populate: childProps });
  });

  // Creates virtual field for children, populated by parent id
  Category.virtual('children', { ref: 'category', localField: '_id', foreignField: 'parent' });
};
