const express=require('express');
//引入mysql连接模块
const pool=require('../pool.js');
//使用express来创建路由器对象
var router=express.Router();
//往路由器添加路由
//1.登录模块————login
router.post("/login",(req,res)=>{
	//获取参数
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	//查询数据库
	var sql="select * from hf_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("登录失败,用户名或者密码");
		}
	});
});
//2.用户列表————userlist
router.get('/userlist',(req,res)=>{
	var sql="select * from hf_user";
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send(result);
		}
	})
}) 
//3.删除————delete
router.get('/deleteUser',(req,res)=>{
	var $uid=req.query.uid;
	if(!$uid){
		res.send("请输入编号");
		return;
	}
	var  sql="delete from hf_user where uid=?"
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		//if(result.affectedRows>0){
			res.send("1");//1代表删除成功
		//}
 })
})
//4.添加add
 router.post('/reg',(req,res)=>{
	 var obj=req.body;
	 for(var key in obj){
		if(!obj[key]){
		 res.send(key+"不能为空");
		 return;
		}
	 }
	 var sql="insert into hf_user set ?"
	 pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
			res.send("1");
	 })
 })
//5.查询用户————query
router.get('/query',(req,res)=>{
	//接受uid
	var $uid=req.query.uid;
	if(!$uid){
		res.send("不存在");
		return;
	}
	//根据uid查询用户信息
	var sql="select * from hf_user where uid=?";
    pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result[0]);
		}else{
			res.send("查无此人");
		}
	})
})
//6.修改————update
router.post("/update",(req,res)=>{
	//接收数据
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uname){
		res.send("uname不存在");
		return;
	}
	if(!$uid){
		res.send("uid不存在");
		return;
	}
	if(!$upwd){
		res.send("upwd不存在");
		return;
	}
	if(!$email){
		res.send("email不存在");
		return;
	}
	if(!$phone){
		res.send("phone不存在");
		return;
	}
	if(!$gender){
		res.send("gender不存在");
		return;
	}
	if(!$user_name){
		res.send("user_name不存在");
		return;
	}
	//数据库操作
	var sql="update hf_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?";
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		res.send("修改成功");
	});
});
//7.注册————register
router.post("/register",(req,res)=>{
	var $uname=req.body.uname;
	console.log($uname);
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uname){
		res.send("用户名称不存在");
		return;
	}
	if(!$upwd){
		res.send("用户密码不存在");
		return;
	}
	if(!$email){
		res.send("电子邮箱不存在");
		return;
	}
	if(!$phone){
		res.send("联系方式不存在");
		return;
	}
	if(!$user_name){
		res.send("真实姓名不存在");
		return;
	}
	if(!$gender){
		res.send("用户性别不存在");
		return;
	}
	//插入数据库
	var sql="insert into hf_user values(null,?,?,?,?,null,?,?)";
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
			res.send("1");
	})
})
router.get("/checkUname",(req,res)=>{
	var $uname=req.query.uname;
	console.log($uname);
	if(!$uname){
		res.send("用户名不为空");
		return;
	}
	var sql="select * from hf_user where uname=?"
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("0");
		}else{
			res.send("1");
		}
	})
})
//路由器对象导出
module.exports=router;