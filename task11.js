var http = require('http'),
	fs = require('fs'),
	port = Number(process.argv[2]),
	file = process.argv[3];

var server = http.createServer(function (req, res) {
	// request handling logic ...
});

server.listen(port);