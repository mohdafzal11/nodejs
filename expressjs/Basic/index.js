const express=require("express");
const PORT=8080;

const server=express();
server.get('/' , (req , res)=>{
   res.send("Hello from Home Page");
})

server.get('/about' , (req , res)=>{
    res.send("Hello from About Page "+req.query.id);
 })


server.listen(PORT , ()=>{
    console.log("Server Started")
})
