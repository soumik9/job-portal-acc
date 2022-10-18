const express = require('express');
const router = express.Router();

const JobController = require('../controllers/jobController');

//routes
router.post('/jobs', JobController.create);
router.get('/manager/jobs', JobController.index);

// router.get('/tour/cheapest', JobController.cheapest);
// router.get('/tour/trending', JobController.trending);
// router.get('/tours/:id', JobController.single);
// router.patch('/tours/:id', JobController.update);



module.exports = router;