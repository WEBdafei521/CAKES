const express=require('express');
const mysql=require('mysql');
var pool=mysql.createPool({
	host     : process.env.MYSQL_HOST,
	port     : process.env.MYSQL_PORT,
	user     : process.env.ACCESSKEY,
	password : process.env.SECRETKEY,
	database : 'app_' + process.env.APPNAME,
	connectionLimit:3,
});
var router=express.Router();
//从数据空中拿出点击所对应的数据
router.post('/reg',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $email=req.body.email;
	if(!$uname){
		res.send("0");return;
	}
	if(!$upwd){
		res.send("0");return;
	}
	if(!$phone){
		res.send("0");return;
	}
	if(!$email){
		res.send("0");
		return;
	}
	console.log($uname,$upwd,$phone,$email)
	var sql = "insert into user values(null,?,?,?,?)";
	pool.query(sql,[$uname,$upwd,$phone,$email],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows>0){
			res.send("1")
		}
	});
});
// 登陆
router.get('/login',(req,res)=>{
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	if(!$uname){
		res.send("-1");return;
	}
	if(!$upwd){
		res.send("-1");return;
	}
	var sql = "select * from user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if (err) throw err;
		console.log(result)
		if(result.length>0){
			res.send(result)
		}else{
			res.send("-1")
		}
	})
});
// username 获取用户名
router.get('/username',(req,res)=>{
	var $uid=req.query.uid;
	var sql = "select uname from user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if (err) throw err;
		res.send(result)
	})
});
// index 轮播
router.get("/index_banner",(req,res)=>{
	var sql="select * from banner";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result)
	})
});
// index 新品
router.get("/index_new",(req,res)=>{
	var sql="select * from details_new";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		// console.log(result)
		res.send(result)
	})
})
// index 儿童专区
router.get("/index_child",(req,res)=>{
	var sql="select * from details_child";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		// console.log(result)
		res.send(result)
	})
});
// index 聚会专区
router.get("/index_part",(req,res)=>{
	var sql="select * from details_part";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result)
	})
});
// index 生日专区
router.get("/index_birth",(req,res)=>{
	var sql="select * from details_birth";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.send(result)
	})
});
//index 文章专区
router.get("/index_txt",(req,res)=>{
	var sql="select * from details_txt";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		// console.log(result)
		res.send(result)
	})
});
// txt_list 文章列表
router.get("/txt_list",(req,res)=>{
	var pno=req.query.pno;
	console.log(pno)
	var pageSize=4;
	if(!pno){pno=1}
	var sql="select * from details_txt LIMIT ?,?"
	var offset = (pno-1)*pageSize;
    pageSize = parseInt(pageSize);
	pool.query(sql,[offset,pageSize],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
// txt_details  文章详细内容
router.get("/txt_details",(req,res)=>{
	var lid=req.query.id;
	var sql="select * from txt_content where lid=?";
	pool.query(sql,[lid],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})
// prodeuct_new
router.get("/products_new",(req,res)=>{
	var sql = "select * from new_list";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		// console.log(result)
		res.send(result);
	})
});
// product_birth
router.get("/products_birth",(req,res)=>{
	var sql = "select * from birth_list";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		// console.log(result)
		res.send(result);
	})
});

// details 详情图片
router.get("/details_pic",(req,res)=>{
	var pid=req.query.pid;
	var sql = "select * from details_pic where pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		// console.log(result)
		res.send(result);
	})
});
// details 商品名称及提示
router.get("/details_name",(req,res)=>{
	var pid=req.query.pid;
	var sql = "select * from details_name where pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		// console.log(result)
		res.send(result);
	})
});

// details_type 商品分类
router.get("/details_type",(req,res)=>{
	var pid=req.query.pid;
	console.log(pid)
	var sql = "select * from details_type where pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		console.log(result)
		res.send(result);
	})
});
// details_content 商品分类
router.get("/details_content",(req,res)=>{
	var pid=req.query.pid;
	var sql = "select * from details_content where pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
// details_weight 商品重量
router.get("/details_weight",(req,res)=>{
	var pid=req.query.pid;
	// console.log(pid)
	var sql = "select * from details_weight where pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
// details_adpt 商品购买规格
router.get("/details_adpt",(req,res)=>{
	var pid=req.query.pid;
	var sql = "select * from details_adpt where pid=?";
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
// 添加购物车
router.get("/addcart",(req,res)=>{
	// var uid=parseInt(req.query.uid);
	var uid=req.query.uid; //用户id
	var pid=req.query.pid;//商品id
	var pname=req.query.pname;//商品名称
	var price=req.query.price;//商品价格
	var pweight=req.query.pweight;//商品价格
	var sql="select id from usercart";
	sql+=" where uid=? and pid=? and pweight=?"
	pool.query(sql,[uid,pid,pweight],(err,result)=>{
	  if(err) throw err;
	  if(result.length!=0){
		//如果查到数据
		var sql="update usercart set count=count+1 where uid=? and pid=? and pweight=?"
		pool.query(sql,[uid,pid,pweight],(err,result)=>{
			if(err) throw err;
		  res.send("1")
		})
	  }else{
	  //如果没有查到数据
		  var sql="insert into usercart(id,uid,pid,pname,price,pweight,count) values(null,?,?,?,?,?,1)";
		  pool.query(sql,[uid,pid,pname,price,pweight],(err,result)=>{
			if(err) throw err;
			res.send("1")
		  })
	  }
	});
});

// usercart 商品购买规格
router.get("/usercart",(req,res)=>{
	var uid=req.query.uid;
	// console.log(pid)
	var sql = "select * from usercart where uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
// removeProduct 删除单个商品
router.get("/removeProduct",(req,res)=>{
	var id=req.query.id;
	var sql = "delete from usercart where id=?";
	pool.query(sql,[id],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
// removeAll 删除
router.get("/removeAll",(req,res)=>{
	var uid=req.query.uid;
	var sql = "delete from usercart where uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
module.exports=router;

