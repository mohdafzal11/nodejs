const express=require('express');
const server=express()
const productRouter=require('./routes/product')
const userRouter=require('./routes/user')


//here we parse the data in the form json by using middleware
server.use(express.json());

// Middleware for setting the Router
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

server.listen(8080,()=>{
    console.log("Server Started")
})