var express = require('express');
var adminRoutes = require('./routes.js');

const app = express();
app.use('/admin',adminRoutes);

app.listen(8080,function(){
    console.log('server started at http://localhost:8080');
});