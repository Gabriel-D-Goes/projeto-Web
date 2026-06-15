const express = require ('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');

router.post("/register", auth.Controller.register);
router.post('/login', authController.login);

module.export = router;