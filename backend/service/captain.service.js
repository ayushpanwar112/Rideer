const captainModel = require("../modles/captain.model");

module.exports.createCaptain = async({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
})=>{
    if(!firstname || !email || !password ||!color||!plate||!capacity||!vehicleType)
    {
          throw new Error("All field are required");
    }
       
    const captain = captainModel.create({
         fullname:{firstname,
         lastname},
         email,
         password,
         vehicle:{
           plate,
         color, 
         capacity,
         vehicleType
         }})
         return captain;

}