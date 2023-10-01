// const fs = require('fs')
// const index = fs.readFileSync('index.html', 'utf-8')
// const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
// const products = data.products;


// const express=require('express');
// const { json } = require('express');
// const server=express();


//     //              Request Methods MiddleWare
// // server.use((req,res,next)=>{
// //     console.log(req.url,req.hostname , req.ip);
// //     console.log(req.get("User-Agent"))
// //     next();
// // })



// //body parser
// server.use(express.json())
// server.use(express.static('public'))
// const auth=(req,res,next)=>{
//     // console.log(req.query.password)
//      if(req.body.password=="123"){
//       next();
//      }
//      else{
//         res.sendStatus(401);
//      }
// }

// server.get('/',auth, (req,res)=>{
//     // res.json({type:"POST"})
//     res.send("Hello I am Mohd Afzal");
// });
// // server.get("/home", (req,res)=>{
// //     res.send("9548873450");
// // });


// server.listen(8080, ()=>{
//     console.log(" Server Started")
// })

// console.log("First Line")

// const express=require("express");
// const server=express();
// const morgan =require("morgan")


// server.use(express.json())

// console.log("Morgan")
// server.use(morgan('dev'))


// server.use(express.static("public"))



// server.get('/', (req,res)=>{
   
// })

// server.listen(8080,()=>{
//     console.log("Server Started")
// })

const  express = require('express')

const  server = express()

server.listen(8080,()=>{
  console.log("Server Started")
})