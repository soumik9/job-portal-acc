const express = require('express');
const router = express.Router();

// const User = require('../schema/userSchema');
const TourController = require('../controllers/tourController');

//routes
router.get('/tours', TourController.index);
router.post('/tours', TourController.create);

router.get('/tour/cheapest', TourController.cheapest);
router.get('/tour/trending', TourController.trending);
router.get('/tours/:id', TourController.single);
router.patch('/tours/:id', TourController.update);



module.exports = router;