const router = require('express').Router();
const { async } = require('../middleware');
const { ProductsController } = require('../controllers');

// Route to retrieve page of recently added products
router.get('/recently-added', async(ProductsController.recentlyAdded));


// Route to retrieve page of recently added products
router.get('/byCategory/:categorySlug', async(ProductsController.byCategory));



module.exports = router;
