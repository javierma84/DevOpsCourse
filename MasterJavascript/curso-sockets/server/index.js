var express = require('express');
var app = express();
server = require('http').Server(app);
var io = require('socket.io')(server);

//Cargar HTMLs estáticos de la carpeta client
app.use(express.static('client'));

app.get('/hola-mundo', function(req,res){
    res.status(200).send('Hola mundo desde una ruta');
});

var messages = [{
    id: 1,
    text: 'Bienvenido al chat privado de Socket.io y NodeJS de Javier Martínez',
    nickname: 'Bot - JMA'
}];

//Abrir conexión al socket, detectará cuando alguien se conecte al socket
io.on('connection', function(socket){
    console.log('El nodo con IP: ' + socket.handshake.address + ' se ha conectado...');
    socket.emit('messages', messages);

    socket.on('add-message', function(data){
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
});

//Creamos el servidor pasandole el puerto + callback
server.listen(6677, function(){
    console.log('Servidor funcionando en http://localhost:6677');
});