const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/Login_c');

router.post('/auth/login', LoginController.loginUser);

module.exports = router;