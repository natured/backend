const router = require('express').Router();
const { async } = require('../middleware');
const { ProductsController } = require('../controllers');

// Route to retrieve page of recently added products
router.get('/recently-added', async(ProductsController.recentlyAdded));

// Route to get products for a category
router.get('/byCategory/:categorySlug', async(ProductsController.byCategory));

// Route to get products for a foodmaker
router.get('/byFoodmaker/:foodmakerId', async(ProductsController.byFoodmaker));

// Route to get a product by slugs
router.get('/:foodmakerSlug/:productSlug', async(ProductsController.bySlugs));

module.exports = router;
