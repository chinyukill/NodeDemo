const mySql=require('./mySql');
const express=require('express');
const bodyParser = require('body-parser');
let app=express();
app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  next();
})
//解析 application/json
app.use(bodyParser.json());
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

mySql.test();
app.get('/test',function(req,res){
  console.log("test get function")
  res.end();
})
app.get('/dept/select.do',function(req,res){
  var keyWord="";
  mySql.select(req,res,keyWord);
})
app.post('/dept/select.do',function(req,res){
  var keyWord=req.body.keyWord;
  mySql.select(req,res,keyWord);
})
app.listen(8080,function(){
  console.log("server start at port:8080")
})