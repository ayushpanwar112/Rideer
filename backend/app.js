const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/user.routes");
const cookieParser = require('cookie-parser');
const captainRoutes= require("./routes/captain.routes")
const app = express(); 
app.use(cookieParser());
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.get("/", (req, res) => {
    res.send("Server is working fine");
});
app.use('/user',userRoutes);
app.use('/captain',captainRoutes);

module.exports = app;
