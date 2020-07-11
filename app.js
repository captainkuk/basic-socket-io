var app = require('express')();
var http = require('http').Server(app);


app.get('/',function(req,res){
    res.sendfile('index.html');
});

http.listen(3080,function(){
    console.log('Start server on port : 3080')
});
