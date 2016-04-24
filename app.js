var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var xml = require('xml');

app.use('/assets/img', express.static(__dirname + '/assets/img'));
app.use('/assets/js', express.static(__dirname + '/assets/js'));
app.use('/assets/css', express.static(__dirname + '/assets/css'));
app.use('/assets/video', express.static(__dirname + '/assets/video'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/artists', function (req, res) {
  http.request({ host: 'marcatoweb.com', path: '/xml/artists_23241.xml', method: 'GET' }, function(response){
    response.on('data', function (chunk) {
      str += chunk;
    });
    response.on('end', function () {
      
    });
  }).end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});