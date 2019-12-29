const router = require('express').Router();
const async = require('../middleware/async');
const { FoodmakersController } = require('../controllers');

// Route to retrieve all categories
router.get('/', async(FoodmakersController.index));


module.exports = router;
