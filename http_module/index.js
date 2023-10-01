const http = require("http")

const PORT=8080;

const server=http.createServer((req,res)=>{
    console.log(req);
    res.end("Hello from server");
})

server.listen(PORT , ()=>{
    console.log("Server Started Succesfully");
})