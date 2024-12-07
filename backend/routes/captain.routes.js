const express = require("express");
const {body} = require('express-validator');
const { registerCaptain, loginCaptian, getCaptainProfile, logoutCaptain } = require("../controllers/captain.controller");
const { authCaptain } = require("../middleware/auth.middleware");


const router = express.Router();

router.post("/register",[body('email').matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).withMessage("Invalid Email"),
body('fullname.firstname').isLength({min:3}).withMessage('First name should be more than 3 characters'),body('password').isLength({min:6}).withMessage('min length should be more than 6'),body('vehicle.color').isLength({min:3}).withMessage("This is not color"),
 body("vehicle.plate").isLength({min:3}).withMessage("Invalid number plate"),
 body("vehicle.capacity").isLength({min:1}).withMessage("Car have less seat"),
 body("vehicle.vehicleType").isIn(['car','motorcycle','auto']).withMessage("Invalid input")

],registerCaptain
)
router.post("/login",[
    body("email").isEmail().withMessage("Invalid email"),body("password").isLength({min:6}).withMessage("Invalid password")
],loginCaptian)
router.get("/profile",authCaptain,getCaptainProfile);
router.post("/logout",authCaptain,logoutCaptain);

module.exports = router;