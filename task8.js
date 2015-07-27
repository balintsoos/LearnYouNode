var http = require('http');
var content = [];

http.get(process.argv[2], function (response) {
	response.setEncoding('utf8');
	
	response.on('data', function (data) {
		content.push(data);
	});
	response.on('error', function (data) {
		content.push(data);
	});
	response.on('end', function (){
		console.log(content.join('').length);
		console.log(content.join(''));
	});
});
