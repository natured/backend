const router = require('express').Router();
const async = require('../middleware/async');
const CategoriesController = require('../controllers/categoriesController.js');

// Route to retrieve all categories
router.get('/', async(CategoriesController.index));

// // Route to retrieve all categories
// router.get('/parents', async(CategoriesController.parents));
//
// // Shows a single category by slug
// router.get('/bySlug/:slug', async(CategoriesController.showBySlug));


module.exports = router;
