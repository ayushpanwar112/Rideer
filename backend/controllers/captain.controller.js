const { validationResult} = require('express-validator');
const captainModel = require('../modles/captain.model');
const { createCaptain } = require('../service/captain.service');
const blacklistModel = require('../modles/blacklistaToken.module');

module.exports.registerCaptain= async(req,res)=>{
  const error = validationResult(req);
  if(!error.isEmpty())
  {
    return res.status(401).json({error:error.array()});
  }
  const {fullname,email,password,vehicle} = req.body;
  const isCaptainAlreadyExist = await captainModel.findOne({email});
  if(isCaptainAlreadyExist)
  {
    return res.status(400).json({message:"Email already exist"})
  }

    const hashPassword = await captainModel.hashPassword(password);
    const captain = await createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashPassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType

    })
     const token= await captain.generateAuthToken();
      return res.status(201).json({token,captain});

}
module.exports.loginCaptian=async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty)
    {
        return res.status(401).json({error:error.array()});
    }
    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select("+password");
    //console.log(captain);
    if(!captain)
    {
       return   res.status(401).json({message:"Invalid Email and password"});
    }
    const isMatch = await captain.comaparePassword(password);
    if(!isMatch)
    {
        return res.status(401).json({message:"Invalid Email and password"});
    }
         const token = captain.generateAuthToken();
         res.cookie("token",token);
         return res.status(200).json({token,captain});
}
module.exports.getCaptainProfile=async(req,res)=>{
      res.status(200).json(req.captain);
}
module.exports.logoutCaptain=async(req,res)=>{

    const token = req.cookies.token;
    if(!token)
    {
     return    res.status(400).json({message:"No token found"});
    }
       await blacklistModel.create({token});
       res.clearCookie("token");

       return res.status(200).json({message:"token is deleted"})

}