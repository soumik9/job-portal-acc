const express = require('express');
const router = express.Router();

// const User = require('../schema/userSchema');
const AuthController = require('../controllers/authController');

//routes
router.post('/user/signup', AuthController.signup);
router.post('/user/login', AuthController.login);



module.exports = router;