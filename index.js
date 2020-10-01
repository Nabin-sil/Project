const express = require('express')



const PORT = 3000;

const api = require('./routes/api')


const app = express();

app.use('/api',api)


app.get('/', function(req, res){
    res.send("Hello to server")
});

app.post('/', function(req, res){
    res.send("Server says hello")
});

app.listen(PORT, function(){
    console.log("Server is at http://localhost:3000")
});