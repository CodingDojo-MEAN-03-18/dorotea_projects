// npm install express
//npm install socket.io
//npm install body-parser

//left off at 17:00 on lecture

const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

const server = app.listen(port, () => console.log('listening on port' + port));
const io = require('socket.io')(server);
//var io = require('socket.io')(server);

io.on('connection', socket => {

  let count = 0

  console.log('Hello World');

  socket.on('buttonClicked', function(){
    io.emit('numberUpdated', ++count);
  });
});
