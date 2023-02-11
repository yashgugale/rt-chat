var socket = io.connect("http://localhost:4000")

var message = document.getElementById("message");
var sendButton = document.getElementById("send");
var username = document.getElementById("username");
var output = document.getElementById("output");

sendButton.addEventListener('click', function() {
    socket.emit('sendingMessage', {
        'message': message.value,
        'username': username.value
    });
});

socket.on('broadcastMessage', function(data) {
    output.innerHTML += "<p><strong>" + data.username + ": </strong>" + data.message + "</p>";
})
