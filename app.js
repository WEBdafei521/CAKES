const express=require('express');
const bodyparser=require('body-parser');
const content=require('./routes/content.js');
var server=express();
server.listen(5050);
server.use(express.static('./public'));
server.use(bodyparser.urlencoded({
	extended:false
}));
//加载 express-session模块
const session=require("express-session");
//配置模块
server.use(session({
  secret:"128位随机字符串",   //安全字符串   (128位随机字符串)
  resave:false,  //每次请求更新session值  
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*60  //session 对象存货
  }
}));
server.use('/content',content);
server.get('/asd',(req,res)=>{
	var id=req.query.id;
	req.session.uid=id;
	res.send(`<a href="http://127.0.0.1:3000/qwe">123</a>`)
});
server.get('/qwe',(req,res)=>{
	var i=req.session.uid;
	res.send(i);
});