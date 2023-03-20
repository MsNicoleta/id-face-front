const http = require('http');

const server = http.createServer (()=>{
    console.log ('Thanks for the requesr')
})

server.listen (3000);