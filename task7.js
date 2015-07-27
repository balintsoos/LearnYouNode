var http = require('http');

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	//console.log(response.statusCode);
	response.on('data', console.log);
	response.on('error', console.error);
});
