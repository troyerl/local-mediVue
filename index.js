const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  })

  socket.on('TOGGLE_PLAYER', (bool) => {
    io.emit('TOGGLE_PLAYER', bool);
  })

  socket.on('SEND_MESSAGE', async function(data) {
    io.emit('SEND_MESSAGE', data);
  });

  socket.on('END_SESSION', async function(data) {
    io.emit('END_SESSION', data);
  });

  socket.on('UPDATE_USER', async function(data) {
    io.emit('UPDATE_USER', data);
  });
  
});

http.listen(5000);
console.log("Server running on port 5000");