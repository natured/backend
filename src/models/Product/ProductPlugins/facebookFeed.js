const { Parser } = require('json2csv');

// plugin for allowing product to be subscribed or not
module.exports = function (Product) {
  // toggles the subscription by id
  Product.statics.forFacebookFeed = async function () {
    const fields = [
      'id',
      'availability',
      'condition',
      'description',
      'image_link',
      'link',
      'title',
      'price',
      'brand',
    ];

    const data = (await this.find({ show: { $ne: false } })).map((product) => {
      const { id, name, slug, description, img, foodmaker, pricing } = product;
      return ({
        id,
        availability: 'in stock',
        condition: 'new',
        description: unescape(description).replace(/<(?:.|\n)*?>/gm, ''),
        image_link: `https://natured.imgix.net/${img}.jpg`,
        link: `https://natured.co/boston/market/${foodmaker.slug}/${slug}`,
        title: name,
        price: `${(pricing.byWeight ? pricing.approximatePrice : pricing.price) / 100} USD`,
        brand: foodmaker.name,
      });
    });

    const parser = new Parser({ fields });
    const csv = parser.parse(data);
    return csv;
  };
};
