var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// var mongoose=require("mongoose");
// var morgan=require('morgan');

// app.use(morgan('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 


 app.get('/',function(req,res){
 	res.json({"name":"hello server"});
 });
app.listen(3000);
console.log('Running on port 3000');