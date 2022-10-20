const express = require('express');
const router = express.Router();

const ApplyController = require('../controllers/applyController');

const verifyLogin = require("../middleware/verifyLogin");
const verifyRole = require("../middleware/verifyRole");
const upload = require('../middleware/upload')

// hr routes
router.post('/jobs/:id/apply', verifyLogin, verifyRole('admin', 'candidate'),  upload.single('resumeURL'), ApplyController.apply);


module.exports = router;