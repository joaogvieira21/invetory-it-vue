const express = require('express');
const router = express.Router();
const sessionControllers = require('../controllers/Session_c')

router.get('/session', sessionControllers.sessionUser)

module.exports = router;