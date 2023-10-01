const http =require('http');
const fs =require('fs');

const PORT=8080;

const server=http.createServer((req , res)=>{
  const data=`Request on ${Date.now()} from a url ${req.url} \n`
  fs.appendFile('log.txt' , data , (err , data)=>{
         switch(req.url){
            case '/':
                res.end("Home Page");
                console.log(err)
                break;
            case '/about':
                res.end("My name is Afzal");
                break;
            default:
                res.end("404: Page Not Found");
         }
  })
})

server.listen(PORT , ()=>{
    console.log('Server Stated Sucessfully')
})