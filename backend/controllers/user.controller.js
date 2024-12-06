const { validationResult } = require('express-validator')
const userModel=require('../modles/user.modle');
const { createUser } = require('../service/user.service');

module.exports.registerUser=async(req,res,next)=>{
    const error = validationResult(req);
    if(!error.isEmpty())
    {
        return res.status(400).json({error:error.array()});
    }
    const {fullname,lastname,email,password}=req.body;
     const hashPassword = await userModel.hashPassword(password);
     const user = await createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword
     })
     const token = user.generateAuthToken();
     res.status(201).json({token,user});
}
module.exports.loginUser=async(req,res,next)=>{
      const errors = validationResult(req);
      if(!errors.isEmpty())
      {
         return res.status(400).json({error:error.array()});
      }
      const {email,password} = req.body;
      const user = await userModel.findOne({email}).select('+password');
      if(!user)
      {
        return res.status(401).json({message:"User and Password are invalid"});
      }
      const isMatch = await user.comparePassword(password);
      if(!isMatch)
      {
        res.status(401).json({message:"User and Password are invalid"})
      }
        const token = user.generateAuthToken();
        return res.status(200).json({token,user});
}