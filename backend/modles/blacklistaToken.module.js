const mongoose = require("mongoose");


const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:86400
    }
})
  const blacklistModel=mongoose.model("blacklistToken",blacklistTokenSchema);
module.exports = blacklistModel;
