
const fs = require('fs')
const http = require('http')

const index = fs.readFileSync('index.html', 'utf-8')
// const data = fs.readFileSync('data.json', 'utf-8')

const server = http.createServer((req, res) => {
    // switch (req.url) {
    //     case '/':
    //         res.setHeader('Content-Type', 'text/html')
    //         res.end(index)
    //         break;

    //     case '/api':
    //         res.setHeader('Content-Type', 'application/json')
    //         res.end(JSON.stringify(data))
    //         break;

    //     case '/product':
    //         res.setHeader('Content-Type', 'text/html')
    //         const modify = index.replace('**title**', product.title).replace('**url**',product.thumbnail)
    //         res.end(modify)
    //         break;

    //     default:
    //         res.writeHead(404);
    //         res.end();

    // }

    // if(req.url.startsWith('/products')){
    //     const id=req.url.split('/')[2];
    //     const product=products.find(p=>p.id===(+id));
    //     res.setHeader('Content-Type', 'text/html')
    //     const modify = index.replace('**title**', product.title)
    //     .replace('**url**',product.thumbnail)
    //     .replace('|**rating**',product.rating)
    //     res.end(modify)
    //     return ;
      
    // }
   
});

server.listen(8080,()=>{
    console.log("Server Started")
})