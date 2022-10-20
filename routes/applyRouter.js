const express = require('express');
const router = express.Router();

const ApplyController = require('../controllers/applyController');

const verifyLogin = require("../middleware/verifyLogin");
const verifyRole = require("../middleware/verifyRole");
const upload = require('../middleware/upload')

// hr routes
router.post('/jobs/:id/apply',  upload.single('resumeURL'), ApplyController.apply);


module.exports = router;