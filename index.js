const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
require('dotenv').config();

const translator = require('./node-translate');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public');
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
    let message = '';

    if (data) {
      if (data.language !== 'en') {
        message = await translator.translator(data);
      } else {
        message = data.text;
      }
    }
    
    io.emit('SEND_MESSAGE', message);
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