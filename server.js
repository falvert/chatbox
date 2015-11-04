var app = require('express')();
var http = require('http').Server(app);

var sio = require('socket.io')(http);


app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

sio.on('connection', function(socket){
	console.log('user online');

	 socket.on('chatbox message', function(msg){
         sio.emit('chatbox message', msg);
    });
	
});

http.listen(3000, function() {
	console.log('listening on port *:3000');
});
