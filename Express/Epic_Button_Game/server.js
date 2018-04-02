// npm install express
//npm install socket.io
//npm install body-parser

const express = require('express');
const path= require('path');
const port = process.env.port || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'client')));

const server = app.listen(8000, function () {
    console.log('Listening on port 8000');
})

const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('Hello World');
});
