const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User_c');

router.post('/users', UserController.createUser);

module.exports = router;