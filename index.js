const express = require('express')
const app = express();


const PORT = 3000;

app.get('/', function(req, res){
    res.send("Hello to server")
});

app.post('/', function(req, res){
    res.send("Server says hello")
});

app.listen(PORT, function(){
    console.log("Servee is at http://localhost:3000")
});