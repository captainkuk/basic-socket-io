var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendfile('index.html');
});


io.on('connection',function(socket){
    
    //Eventer user connect
    console.log('Connected');
    socket.on('disconnect',function(){
        console.log('Disconnected')
    });

});

http.listen(3080,function(){
    console.log('Start server on port : 3080')
});
