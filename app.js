var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendfile('index.html');
});

users = [];
io.on('connection',function(socket){
    console.log('Connected');
    socket.on('setUsername',function(data){
        if(users.indexOf(data)>-1){
            users.push(data);
            socket.emit(userSet,{username:data});
        }else{
            socket.eimit('userExists',data+' มีผู้ใช้ชื่อนี้แล้ว กรุณาใช้ชื่ออื่น');
        }
    });
});

/*
//Count Client Connected
var clients = 0;

io.on('connection',function(socket){
    
    clients ++;
    io.sockets.emit('broadcast',{message:clients+' Clients connected!'});

    //Eventer user connect
    //console.log('Connected');
    socket.on('disconnect',function(){
        clients--;
        io.sockets.emit('broadcast',{message:clients+' Clients connected!'});
        //console.log('Disconnected')
    });
});
*/

http.listen(3080,function(){
    console.log('Start server on port : 3080')
});
