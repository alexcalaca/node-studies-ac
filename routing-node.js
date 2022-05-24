const http = require('http');
const url = require('url');

const server = http.createServer(( req, res) => {
    
    const pathName = req.url; 
       
        
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the overview path');
    } 
  });
