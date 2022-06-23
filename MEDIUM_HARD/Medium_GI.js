const { resolveSoa } = require('dns');
const express = require('express');
const app = express();


var http = require('http');
function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.write('Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune,Pluto');
    res.end();
}
http.createServer(onRequest).listen(8000);
