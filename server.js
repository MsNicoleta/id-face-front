const http = require('http');

const server = http.createServer ((request, response)=>{
    console.log ('headers', request.headers)
    console.log ('method', request.method)
    console.log ('url', request.url)



    response.setHeader('Content-Type', 'aplication/json');
    response.end('<h1>Hello</h1>');
    console.log ('Thanks for the request')
})

server.listen (3000);