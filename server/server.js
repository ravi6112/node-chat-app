const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port =  process.env.PORT || 3000;

var app = new express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', function(socket){
    console.log('New User is connected');

    socket.emit('newMessage', {
        from:'Lord Buddha',
        text:'my son do meditate control your thinkings',
        CreatedAt : 123
    });

    socket.on('createMessage', (message)=>{
        console.log('createEmail', message);
        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            CreatedAt: new Date().getTime()
        });
    });
    socket.on('disconnect', function(){
        console.log('User is disconnected');
    });
});


server.listen(port, function(){
    console.log(`Server up to ${port}`);
});


