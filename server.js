var express = require('express');
var adminRoutes = require('./routes.js');

const app = express();
app.use('/admin',adminRoutes); //admin is a baase route

app.get('/',function(request,response){
    response.send("this is the local /");
});

app.get('/home',function(request,response){
    response.send("this is the local home /");
});
app.listen(8080,function(){
    console.log('server started at http://localhost:8080');
});