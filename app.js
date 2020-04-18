const express = require('express')
const app = express();
const server = require('http').Server(app);
const io = require("socket.io")(server, {});

app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/client/index.html`);
});

app.use('/client', express.static(`${__dirname}/client`))

server.listen(2000);
console.log("server started", __dirname)

io.sockets.on('connection', function(socket){
    console.log('socket connection')
})