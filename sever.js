const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http. createServer(function(req, res)
{
res.statusCode = 200;
res.setHeader('Content-type', 'text/html');
res.end('<h1>Hello from server</h1>');

});

server.listen(port, hostname, function(){
    console.log('serveren køre på http://${hostname}:${port}/');
});