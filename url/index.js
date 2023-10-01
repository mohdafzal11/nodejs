const http=require("http");
const fs=require("fs");
const url=require("url");

const PORT=8080;
const server=http.createServer((req , res)=>{
       if(req.url==="/favicon.ico") return res.end();
        const myUrl=url.parse(req.url , true);
        // console.log(myUrl)
         const log=`Request on ${Date.now()} for ${req.url}\n`
         fs.appendFile("log.txt" , log , (err , log)=>{
             switch(myUrl.pathname){
                case '/':
                    res.end("Home Page");
                    break;
                case "/about":
                    res.end(`user id: ${myUrl.query.id} & name is ${myUrl.query.name}`)
                    break;
                default:{
                    res.end("Page Not Found");
                }
             }
         } )
})

server.listen(PORT , ()=>{
    console.log("Server Started");
})