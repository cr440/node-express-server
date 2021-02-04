var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + "/public"));


// Console.log method path - ip
app.use(function middleware(req, res, next){
  var response = req.method + " " + req.path + " - " + req.ip + " - " + req.headers["user-agent"];
  console.log(response);
  next();
})

// app.get("/",function(req, res) {
//   res.sendFile(__dirname + "/views/index.html");
// });

app.get("/",function(req, res) {
  res.send("Hello Express");
});

app.get("/ht",function(req,res){
  res.redirect("http://localhost/.htaccess")
})



































 module.exports = app;
