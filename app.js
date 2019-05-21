const express=require('express');
const bodyParser=require('body-parser');
//引入路由器
const mypor=require('./routes/mypor.js');
//创建web服务器
var server=express();
server.listen(8080);
//托管静态资源到public下
server.use(express.static('public'));
//配置body-parser中间件
server.use(bodyParser.urlencoded({
  extended:false
}));
//服务器使用路由器
//把路由器挂载到特定的前缀 /user
//访问形式  /user/detail

//把商品路由器挂载到 /product下
server.use('/mypor',mypor);
