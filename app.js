var express = require('express')
var app = express() 


app.get('/'  , function(req , res ) {
    res.render('index.pug' , {
        title : 'Public Code index'
    })
})


var dashboard = require('./dashboard');
app.use('/dashboard' , dashboard);
app.use(express.static(__dirname + '/style'))

app.listen(3000 , function(){
    console.log("Connect to post = >[3000]")
})