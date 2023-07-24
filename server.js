var express = require('express');

const app = express();
app.get('/',function(request,response){
    response.send('index.html');
});
app.get('/home',function(request,response){
    response.send('home page')
});
app.listen(8080,function(){
    console.log('server started at http://localhost:8080');
});