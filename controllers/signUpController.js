const CryptoJS = require('crypto-js');
const User = require("../model/user.model");


const signUpHandler = async (req, res) => {
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        number: req.body.number,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_PASSWORD_KEY).toString()
        // password: req.body.password
      });
  
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ message: "Error creating a user" });
    }
  };

module.exports = signUpHandler;
