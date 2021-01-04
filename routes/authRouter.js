const router = require('express').Router();
const db = require('../models');
const authController = require('../controller/authController');


router.post('/register', authController.register);

module.exports = router;