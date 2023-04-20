const EventEmitter = require('events')
const customEmitter = new EventEmitter()
const http = require('http')
const server = http.createServer()
customEmitter.on('response',(name,id)=>{
    console.log(`data received: ${name} and ${id}`)
})

customEmitter.on('response',()=>{
    console.log('some other logic happened')
})

customEmitter.emit('response','John Smith',34)
server.on('request',(req, res)=>{
    res.end('request sent successfully')
})