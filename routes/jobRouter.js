const express = require('express');
const router = express.Router();

const JobController = require('../controllers/jobController');

const verifyLogin = require("../middleware/verifyLogin");
const verifyRole = require("../middleware/verifyRole");

// candidate routes
router.get('/jobs', JobController.index);
router.get('/jobs/:id', JobController.single);

// hr routes
router.post('/jobs', verifyLogin, verifyRole('hr'), JobController.create);
router.get('/:manager/jobs', verifyLogin, verifyRole('hr'), JobController.getManagerSpecificJobs);
router.patch('/jobs/:id', verifyLogin, verifyRole('hr'), JobController.update);

// router.get('/tour/cheapest', JobController.cheapest);
// router.get('/tour/trending', JobController.trending);
// router.get('/tours/:id', JobController.single);
// router.patch('/tours/:id', JobController.update);



module.exports = router;