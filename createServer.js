
const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' :'text/html'} )
    response.write('<h2>Hello Node JS</h2>');
    response.end();
}).listen(1000)