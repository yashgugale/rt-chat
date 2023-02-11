const express = require('express')
const socket = require('socket.io');

var app = express()

var server = app.listen(4000, function() {
    console.log("Listening on port 4000!");
})

app.use(express.static("public"));

var socketServer = socket(server);

socketServer.on("connection", function(socket) {

    socket.on('sendingMessage', function(data) {
        socketServer.emit('broadcastMessage', data);
    });

    console.log("Websocket connected", socket.id);
});
