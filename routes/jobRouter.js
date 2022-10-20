const express = require('express');
const router = express.Router();

const JobController = require('../controllers/jobController');

const verifyLogin = require("../middleware/verifyLogin");
const verifyRole = require("../middleware/verifyRole");

// candidate routes
router.get('/jobs', verifyLogin, verifyRole('admin', 'candidate'), JobController.index);
router.get('/jobs/:id', verifyLogin, verifyRole('admin', 'candidate'), JobController.single);

// hr routes
router.post('/jobs', verifyLogin, verifyRole('admin', 'hr'), JobController.create);
router.get('/manager/jobs', verifyLogin, verifyRole('admin', 'hr'), JobController.getManagerSpecificJobs);
router.get('/manager/jobs/:id', verifyLogin, verifyRole('admin', 'hr'), JobController.getManagerJobsbyId);
router.patch('/jobs/:id', verifyLogin, verifyRole('admin', 'hr'), JobController.update);

module.exports = router; 