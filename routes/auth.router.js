const express = require('express');
const router = express.Router();

const signUpHandler = require("../controllers/signUpController");
const loginHandler = require("../controllers/loginController");

router.route("/register")
    .post(signUpHandler);
router.route("/login")
    .post(loginHandler);

module.exports = router;

