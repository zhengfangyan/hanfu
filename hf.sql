SET NAMES UTF8;
DROP DATABASE IF EXISTS hf;
CREATE DATABASE hf CHARSET=UTF8;
USE hf;


/**用户信息**/
CREATE TABLE hf_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);
/*首页商品*/
CREATE TABLE hf_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128),
  type VARCHAR(64),
  details VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq TINYINT
);
INSERT INTO  hf_index_product VALUES
(NULL,"女装 裙套","image/index/7.jpg","【迎】纨素黑色仙鹤印花单层衫一片式双层洒金褶裙套汉服",99,"11",1),
(NULL,"女装 立领对襟","image/index/9.jpg","【忧】倾杯序原创绣花刺绣女立领对襟琵琶袖长袄齐腰明制汉服",89,"11",1),
(NULL,"女装 齐胸对襟襦裙","image/index/9.jpg","【落】国色芳华传统汉服女齐胸对襟襦裙春夏款绣花日常小清新",19,"11",1),
(NULL,"女装 立领对襟","image/index/9.jpg","【忧】倾杯序原创绣花刺绣女立领对襟琵琶袖长袄齐腰明制汉服",89,"11",1),
(NULL,"女装 立领对襟","image/index/9.jpg","【忧】倾杯序原创绣花刺绣女立领对襟琵琶袖长袄齐腰明制汉服",89,"11",1);
/*******************/
/******数据导入******/

/**用户信息**/
INSERT INTO hf_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '顶顶', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '豆豆', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '丫丫', '0');