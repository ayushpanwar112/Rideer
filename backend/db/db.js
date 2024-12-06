const mongoose = require('mongoose');

const  dbConnect=async()=>{
  try {
        await  mongoose.connect(process.env.DATA_BASE);
        console.log("db connection is live");
  } catch (error) {
           console.log(error);
  }
}
module.exports=dbConnect
