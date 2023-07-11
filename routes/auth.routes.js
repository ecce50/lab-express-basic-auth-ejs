const express = require("express");
const User = require("../models/User.model");
const router = express.Router();
const bcrypt = require("bcryptjs");

// GET sign-up page – displays the landing page "sign-up"
router.get('/signup', (req, res, next) => {
   res.render('auth/signup')
})

// GET log-up page – displays the landing page "log-in"
router.get('/login', (req, res, next) => {
   res.render('auth/login')
})

module.exports = router;


