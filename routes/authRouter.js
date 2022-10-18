const express = require('express');
const router = express.Router();

// const User = require('../schema/userSchema');
const AuthController = require('../controllers/authController');
const verifyLogin = require("../middleware/verifyLogin");
// const verifyLogin = require('../middleware/verifyLogin')

//routes
router.get('/user/me', verifyLogin, AuthController.profile);
router.post('/user/signup', AuthController.signup);
router.post('/user/login', AuthController.login);



module.exports = router;