var express = require('express');

const router = express.Router();

router.get('/',function(request,response){
    response.send('index.html');
});

router.get('/home',function(request,response){
    response.send('home page')
});
module.exports = router;