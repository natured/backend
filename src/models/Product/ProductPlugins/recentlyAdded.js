// plugin for paginating recently added products
module.exports = function (Product) {

  Product.statics.getPage = async function(page) {
    const data = await this.paginate(
      { show: { $ne: false } },
      { page: page || 1, limit: 4, sort: '-createdAt' }
    );

    return data.docs;
  }
};
