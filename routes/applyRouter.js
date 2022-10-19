const express = require('express');
const router = express.Router();

const ApplyController = require('../controllers/applyController');

const verifyLogin = require("../middleware/verifyLogin");
const verifyRole = require("../middleware/verifyRole");

// hr routes
router.post('/jobs/:id/apply', ApplyController.apply);


module.exports = router;