var express = require('express');
var app = express();
app.use(express.static(__dirname+"/dist"));
app.use(express.static(__dirname+"/dist/assets"))



app.get('/',function(req,res) {
    res.sendFile(__dirname + '/dist/index.html');
})

app.listen(process.env.PORT || 9000).listen(5000);