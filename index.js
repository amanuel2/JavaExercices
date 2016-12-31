var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var ExpressRouter = express.Router();


app.use(bodyParser());


const PORT = 8080;
const IP = '127.0.0.1';

var root_path_opts = {
  root :  __dirname + "/",
  dotfiles: 'deny',
  headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
  }
}

app.get("/login", function(req,res){
  res.sendFile("login.html", root_path_opts, function(err){
    if(err)
      throw err;
  });
})

app.post("/login", function(req,res){
  res.end(JSON.stringify(req.body));
})

app.get("/", function(req,res){
  res.sendFile("index.html", root_path_opts, function(err){
    if(err)
      throw err;
  });
})

app.listen(PORT,IP,function(){
  console.log("Listening at Port" + PORT + " and IP " + IP);
})