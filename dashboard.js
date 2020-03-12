var express = require('express');
var router = express.Router();


router.get('/register' , function(req , res){
    res.render('register.pug' , {
        title : 'register'
    })
})



module.exports  = router ; 