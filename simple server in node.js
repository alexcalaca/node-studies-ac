//simple server in node.js - AC Alexandre Calaça
const http = require('http');
const url = require('url');

const server = http.createServer(( req, res) => {
    
    const pathName = req.url; 
       
        
    if(pathName === '/' || pathName === '/contact'){
        res.end('This is the contact path');
    } else if (pathName === '/users') {
        res.end('This is the users path');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello-world'
        });
        res.end('<h1>Page not found!</h1>');        
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
