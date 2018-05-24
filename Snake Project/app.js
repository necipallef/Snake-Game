const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http).of('/client');

app.get('/js/settings.js', (req, res) => {
    res.sendFile(__dirname + '/js/settings.js');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (connection) => {
    console.log('connection!');
});

http.listen(3000, () => {
    console.log('listening');
});