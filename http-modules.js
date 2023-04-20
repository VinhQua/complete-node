const http = require('http');


const server = http.createServer((req,res)=>{
    
    if (req.url === '/'){
        res.end('welcome to the server')
    }
    if (req.url === '/about'){
        res.end('welcome to the about')
    } else {
        res.end('Ops')
    }
})
server.listen(3000,()=>{
    console.log('listening on port on port 3000')
})
