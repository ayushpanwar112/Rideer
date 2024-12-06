const http = require('http');
const app= require('./app');
const dbConnect = require('./db/db');



 const  port = 3000||process.env.PORT
const server = http.createServer(app);
dbConnect();


server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port} `)
});