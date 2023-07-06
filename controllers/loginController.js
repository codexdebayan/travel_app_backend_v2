const CryptoJS = require('crypto-js');
const User = require("../model/user.model");
const jwt = require('jsonwebtoken');


const loginHandler = async(req,res)=>{
    try{
      const user = await User.findOne({number: req.body.number});
      !user && res.status(404).json({message:"Invalid Mobile Number"});

      const decodedPassword = CryptoJS.AES.decrypt(user.password,  process.env.SECRET_PASSWORD_KEY).toString(CryptoJS.enc.Utf8);
      decodedPassword !== req.body.password && res.status(401).json({message:"Incorrect password"});
      const {password, ...rest} = user._doc;
      //password not shown
      const accessToken = jwt.sign({username: user.username},process.env.ACCESS_TOKEN)
      res.json({...rest,accessToken}); 
    }catch(err){
      console.log(err)
    }
  }

module.exports = loginHandler;