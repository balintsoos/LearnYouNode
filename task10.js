function norm (tag) {
	return (tag < 10 ? '0' : '') + tag;
}

function time () {
	var date = new Date()
	return date.getFullYear() + '-'
		+ norm(date.getMonth()+1) + '-'
		+ norm(date.getDate()) + ' '
		+ norm(date.getHours()) + ':'
		+ norm(date.getMinutes());
}

var net = require('net');

var server = net.createServer(function (socket) {
	socket.end(time() + '\n');
});

server.listen(Number(process.argv[2]));