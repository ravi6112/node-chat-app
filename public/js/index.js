var socket = io();

socket.on('connect', function() {
    console.log('Connected to the server');

    socket.emit('createMessage', {
        from:'ravishasthri',
        text:'i couldnt control my mind i need to focus in my area much'
    })
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log("New mail is created", message);
});

