const express = require('express');
const mysql = require('mysql');
const db = require('./db');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const port = 3000;
const cors = require('cors');

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:19006',
    methods: ["GET", "POST"]
  }
});

app.use(express.json());
app.use(cors());
app.use(require("./routes/eventWriteRoutes"));
app.use(require("./routes/eventReadRoutes"));
app.use(require("./routes/venueReadRoutes"));
app.use(require("./routes/userWriteRoutes"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});



let messages = [];

io.on('connection', (socket) => {

  socket.emit("greeting", "Welcome to JazzConnect messages!");

  socket.on('chatRoomMessage', (object) => {

    messages.push(object);

    socket.broadcast.emit('updateMessages', messages);
    socket.emit('updateMessages', messages);
  
  });


});


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});