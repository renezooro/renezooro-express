
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.get('/', function (req, res) {
  timeStamp = res.json({data: Date.now()});
  res.send(timeStamp);
})

server.listen(3001);