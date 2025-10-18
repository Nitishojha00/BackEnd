// server creation
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.end("Home Page")
    }
    else 
    {
        res.end(`${req.url.slice(1)} Page`);
    }
   
});

server.listen(4000,()=>{
    console.log('server is listening at 4000')
});