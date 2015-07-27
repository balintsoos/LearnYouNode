var http = require('http');
var content = [];
var callbackNumber = 0;

http.get(process.argv[2], function (response) {
	var tmp = [];
	response.setEncoding('utf8');
	
	response.on('data', function (data) {
		tmp.push(data);
	});
	response.on('error', function (data) {
		tmp.push(data);
	});
	response.on('end', function (){
		asyncControl(0, tmp.join(''));
	});
});

http.get(process.argv[3], function (response) {
	var tmp = [];
	response.setEncoding('utf8');
	
	response.on('data', function (data) {
		tmp.push(data);
	});
	response.on('error', function (data) {
		tmp.push(data);
	});
	response.on('end', function (){
		asyncControl(1, tmp.join(''));
	});
});

http.get(process.argv[4], function (response) {
	var tmp = [];
	response.setEncoding('utf8');
	
	response.on('data', function (data) {
		tmp.push(data);
	});
	response.on('error', function (data) {
		tmp.push(data);
	});
	response.on('end', function (){
		asyncControl(2, tmp.join(''));
	});
});


function asyncControl (num, tmp) {
	callbackNumber++;
	content[num] = tmp;
	if(callbackNumber === 3) {
		content.forEach(function (line) {
			console.log(line);
		});
	}
}