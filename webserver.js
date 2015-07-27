var http = require('http'),
  fs = require('fs'),
  path = require('path'),
  port = 3000,
  serverUrl = 'localhost';

var server = http.createServer(function (req, res) {
  console.log('Request: ' + req.url);
  var date = new Date();
  var html = '<p>Hello World, time is now: ' + date + ' </p>';

  fs.readdir('.', function (err, fileList) {
    if (err) throw err;

    html += '<br><li>' + fileList.join('</li><li>') + '</li>';
    res.end(html);
  });

});

console.log('Listening @ ' + serverUrl + ':' + port);
server.listen(port, serverUrl);