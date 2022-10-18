const express = require('express');
const router = express.Router();

const JobController = require('../controllers/jobController');

//routes
router.get('/jobs', JobController.index);
router.post('/manager/jobs', JobController.create);

// router.get('/tour/cheapest', JobController.cheapest);
// router.get('/tour/trending', JobController.trending);
// router.get('/tours/:id', JobController.single);
// router.patch('/tours/:id', JobController.update);



module.exports = router;