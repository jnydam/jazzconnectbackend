const express = require('express');
const mysql = require('mysql');
const db = require('./db');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const port = 3000;

const io = new Server(server);


app.use(express.json());
app.use(require("./routes/eventWriteRoutes"));
app.use(require("./routes/eventReadRoutes"));
app.use(require("./routes/venueReadRoutes"));
app.use(require("./routes/userWriteRoutes"));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {

  console.log("A user has connected");

  socket.emit("greeting", "something");


});


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});