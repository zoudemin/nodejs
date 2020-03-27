const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use('/public',express.static(path.join(__dirname, '/api')));
io.on('connection',function(socket){
    setInterval(()=>{
        socket.emit('message','abc');
    },1000)
    // socket.broadcast.emit('list','test');
    socket.on('backend',(msg)=>{
        console.log(msg);
    });
    // socket.on('receive',(msg)=>{
    //     socket.broadcast.emit('message',msg);
    // })
})
server.listen(8081,'127.0.0.1');