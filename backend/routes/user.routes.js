const express = require('express');
const {body} = require('express-validator');
const { registerUser, loginUser } = require('../controllers/user.controller');

const router = express.Router();

router.post("/register",[body('email').isEmail().withMessage("Invalid message"),
    body('fullname.firstname').isLength({min:4}).withMessage("First name should be more than 4 characters"),
    body('password').isLength({min:6}).withMessage("Password length should be greater than 5")
],registerUser)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid email address"),
    body('password').isLength({min:6}).withMessage("First name should be more than 4 characters")
],loginUser)

module.exports = router;