var express = require('express');

var app = express();
var ExpressRouter = express.Router();

const PORT = 8080;
const IP = '127.0.0.1';

app.get("/", function(req,res){
  
})

app.listen(PORT,IP,function(){
  console.log("Listening at Port" + PORT + " and IP " + IP);
})