
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name should be more than 3 characters']
        },
        lastname:{
            type:String,
           
            minlength:[3,"Last name should be more than 3 character"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"]
       
    }, password:{
            type:String,
            required:true,
            select:false,
              minlength:[6,"min length should be more than 6"]
        },
        socketId:{
            type:String,
        },
        status:{
            type:String,
            default:"active",
            enum:['active','inactive'],
        },
        vehicle:{
          color:{  
            type:String,
            required:true,
            minlength:[3,"This is not color"],
        },
        plate:{
            type:String,
            required:true,
            minlength:[4,"Enter correct Number plate"]
        },
        capacity:{
            type:Number,
            required:true,
             minlength:[1,"enter vaild car capacity"]
        },
        vehicleType:{
            type:String,
            require:true,
            enum:['car','motorcycle','auto'],
        }
        },
        location:{
            lat:{
                type:Number,
            },
            long:{
                type:Number,
            }
        }

})
  captainSchema.methods.generateAuthToken=function()
  {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
  }
  captainSchema.statics.hashPassword=async function(password)
  {
     return await bcrypt.hash(password,10);
  }
  captainSchema.methods.comaparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
  } 

const captainModel = mongoose.model('captain',captainSchema);
module.exports=captainModel;