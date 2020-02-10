const http = require('http');

const server = http.createServer()
server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    console.log('new request')

    res.end();
});
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});


server.listen(8080);