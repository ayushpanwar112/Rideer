const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../modles/user.modle');
const blacklistModel = require('../modles/blacklistaToken.module');
const captainModel = require('../modles/captain.model');


module.exports.authUser = async (req, res, next) => {
    try {
        // Extract token from cookies or Authorization header
        const authHeader = req.headers.authorization; // Use `req.headers` for proper header access
        const token = req.cookies.token || (authHeader && authHeader.split(" ")[1]); // why this [1]bearer

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: "Unauthorized access: No token provided." });
        }
        const isBlacklistToken = await blacklistModel.findOne({token:token})
        if(isBlacklistToken)
        {
            res.status(401).json({message:"Unauthorized access"});
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by decoded token ID
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Attach the user to the request object for downstream use
        req.user = user;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
       
        return res.status(401).json({ message: "Unauthorized access: Invalid token." });
    }
};

module.exports.authCaptain = async(req,res,next)=>{
    try{
    const authHeader = req.headers.authorization; 
    const token = req.cookies.token || (authHeader && authHeader.split(" ")[1]);
    if(!token)
    {
        res.status(401).json({message:"UnAuthorized access"})
       
    }
      const isBlacklistToken = await blacklistModel.findOne({token:token})
      if(isBlacklistToken)
      {
        return res.status(401).json({message:"Unauthorized access"});
      }
     const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        if(!captain)
        {
            res.status(401).json({message:"Unauthorized access"})
        }
        req.captain = captain;
             next();
    }
    catch(e)
    {
        
        return res.status(401).json({ message: "Unauthorized access: Invalid token." });
    }

}