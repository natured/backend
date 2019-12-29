const router = require('express').Router();
const async = require('../middleware/async');
const { FoodmakersController } = require('../controllers');

// Route to retrieve all categories
router.get('/', async(FoodmakersController.index));

// Route to retrieve all categories
router.get('/bySlug/:slug', async(FoodmakersController.bySlug));


module.exports = router;
