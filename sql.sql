
/*用户注册*/
create table user(
    uid int primary key auto_increment,
    uname varchar(30),
    upwd varchar(16),
    phone varchar(11),
    email varchar(30)
);
/*轮播图*/
create table banner(
    id int primary key auto_increment,
    bid int(100),
    http_url varchar(128),
    img_url varchar(128)
);
insert into banner values(null,1,"/details.html?lid=1","img/2eb5adabe75b62a89a15cfeb16b3364a(1).jpg");
insert into banner values(null,2,"/details.html?lid=2","img/89902fbb678d9c2fad4f22cc4c36deb6.jpg");
insert into banner values(null,3,"/details.html?lid=3","img/banner11.jpg");
/*首页商品*/
/*新品*/
create table details_new(
    id int primary key auto_increment,
    nid int(128),
    details_1 varchar(128),
    details_2 varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into details_new values(null,4,"草莓奶油蛋糕","甜润奶油，与草莓的自然甜度搭配","img/new_1.png","/details.html?lid=4","198");
insert into details_new values(null,5,"黑森林","樱桃酒味，从巧克力卷的缝隙飘出","img/new_2.png","/details.html?lid=5","298");
insert into details_new values(null,6,"栗蓉暗香","栗泥毛线球，点缀比利时黑巧克力豆","img/new_3.png","/details.html?lid=6","198");
insert into details_new values(null,7,'小重组','均一,轻褐的千层酥,三种“重组可能','img/new_4.png','/details.html?lid=7','198');
/*儿童*/
create table details_child(
    id int primary key auto_increment,
    nid int(128),
    details_1 varchar(128),
    details_2 varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into details_child values(null,15,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/child_1.png","/details.html?lid=15","198");
insert into details_child values(null,16,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/child_2.png","/details.html?lid=16","298");
insert into details_child values(null,17,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/child_3.png","/details.html?lid=17","98");
insert into details_child values(null,18,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/child_4.png","/details.html?lid=18","198");
/*聚会*/
create table details_part(
    id int primary key auto_increment,
    nid int(128),
    details_1 varchar(128),
    details_2 varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into details_part values(null,26,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/part_1.png","/details.html?lid=26","198");
insert into details_part values(null,27,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/part_2.png","/details.html?lid=27","198");
insert into details_part values(null,28,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/part_3.png","/details.html?lid=28","198");
insert into details_part values(null,29,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/part_4.png","/details.html?lid=29","198");

/*生日*/
create table details_birth(
    id int primary key auto_increment,
    nid int(128),
    details_1 varchar(128),
    details_2 varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into details_birth values(null,37,"黑白巧克力慕斯 彼尔德（Party）","'孩子的世界，简单到非黑即白。'","img/floor1_1.png","/details.html?lid=37","198");
insert into details_birth values(null,38,"黑白巧克力慕斯 彼尔德（Party）","'孩子的世界，简单到非黑即白。'","img/floor1_2.png","/details.html?lid=38","198");
insert into details_birth values(null,39,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/floor1_3.png","/details.html?lid=39","198");
insert into details_birth values(null,40,"黑白巧克力慕斯 彼尔德（Party）","' 孩子的世界，简单到非黑即白。'","img/floor1_4.png","/details.html?lid=40","198");

/*文章*/
create table details_txt(
    id int primary key auto_increment,
    tid int(128),
    dtimer varchar(128),
    uname varchar(128),
    title varchar(128),
    txt_img varchar(128),
    txt_url varchar(128)
    
);
insert into details_txt values(null,1,"2018.11.23","21客志","冬季刊·进博会","img/txt_1.jpg","/txt_details.html?tid=1");
insert into details_txt values(null,2,"2018.11.23","21客志","廿一志秋刊·客服Q&A","img/txt_2.jpg","/txt_details.html?tid=2");
insert into details_txt values(null,3,"2018.11.23","21客志","廿一志秋刊·客服Q&A","img/txt_3.jpg","/txt_details.html?tid=3");
insert into details_txt values(null,4,"2018.11.23","21客志","廿一志秋刊·客服Q&A","img/txt_4.jpg","/txt_details.html?tid=4");
insert into details_txt values(null,5,"2018.11.23","21客志","廿一志秋刊·客服Q&A","img/txt_5.jpg","/txt_details.html?tid=5");
insert into details_txt values(null,6,"2018.11.23","21客志","廿一志秋刊·客服Q&A","img/txt_6.jpg","/txt_details.html?tid=6");
insert into details_txt values(null,7,"2018.11.23","21客志","廿一志秋刊·客服Q&A","img/txt_7.jpg","/txt_details.html?tid=7");
insert into details_txt values(null,8,"2018.11.23","21客志","廿一志秋刊·客服Q&A","img/txt_8.jpg","/txt_details.html?tid=8");

/*文章详情*/
create table txt_content(
    id int primary key auto_increment,
    lid int(128),
    txt_title varchar(128),
    pTimer varchar(128),
    pic1 varchar(128),
    pic2 varchar(128),
    pic3 varchar(128),
    pic4 varchar(128),
    pic5 varchar(128),
    pic6 varchar(128),
    pic7 varchar(128),
    pic8 varchar(128),
    pic9 varchar(128),
    pic10 varchar(128)
);
insert into txt_content values(null,1,"冬季刊·进博会","2018.11.23","img/txt1_1.jpg","img/txt1_2.jpg","img/txt1_3.jpg","img/txt1_4.jpg","img/txt1_5.jpg","img/txt1_6.jpg","img/txt1_7.jpg","img/txt1_8.jpg","img/txt1_9.jpg","img/txt10_10.jpg");
insert into txt_content values(null,2,"冬季刊·进博会","2018.11.23","img/txt2_1.jpg","img/txt2_2.jpg","img/txt2_3.jpg","img/txt2_4.jpg","img/txt2_5.jpg","img/txt2_6.jpg","img/txt2_7.jpg","img/txt2_8.jpg","img/txt2_9.jpg","img/txt11_10.jpg");
insert into txt_content values(null,3,"冬季刊·进博会","2018.11.23","img/txt3_1.jpg","img/txt3_2.jpg","img/txt3_3.jpg","img/txt3_4.jpg","img/txt3_5.jpg","img/txt3_6.jpg","img/txt3_7.jpg","img/txt3_8.jpg","img/txt3_9.jpg","img/txt12_10.jpg");
insert into txt_content values(null,4,"冬季刊·进博会","2018.11.23","img/txt4_1.jpg","img/txt4_2.jpg","img/txt4_3.jpg","img/txt4_4.jpg","img/txt4_5.jpg","img/txt4_6.jpg","img/txt4_7.jpg","img/txt4_8.jpg","img/txt4_9.jpg","img/txt13_10.jpg");
insert into txt_content values(null,5,"冬季刊·进博会","2018.11.23","img/txt5_1.jpg","img/txt5_2.jpg","img/txt5_3.jpg","img/txt5_4.jpg","img/txt5_5.jpg","img/txt5_6.jpg","img/txt5_7.jpg","img/txt5_8.jpg","img/txt5_9.jpg","img/txt14_10.jpg");
insert into txt_content values(null,6,"冬季刊·进博会","2018.11.23","img/txt6_1.jpg","img/txt6_2.jpg","img/txt6_3.jpg","img/txt6_4.jpg","img/txt6_5.jpg","img/txt6_6.jpg","img/txt6_7.jpg","img/txt6_8.jpg","img/txt6_9.jpg","img/txt15_10.jpg");
insert into txt_content values(null,7,"冬季刊·进博会","2018.11.23","img/txt7_1.jpg","img/txt7_2.jpg","img/txt7_3.jpg","img/txt7_4.jpg","img/txt7_5.jpg","img/txt7_6.jpg","img/txt7_7.jpg","img/txt7_8.jpg","img/txt7_9.jpg","img/txt16_10.jpg");
/*新品列表*/
create table new_list(
    id int primary key auto_increment,
    nid int(128),
    details varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into new_list values(null,4,"草莓奶油蛋糕","img/new_1.png","/details.html?lid=4","198");
insert into new_list values(null,5,"黑森林","img/new_2.png","/details.html?lid=5","298");
insert into new_list values(null,6,"栗蓉暗香","img/new_3.png","/deta.htmlils?lid=6","198");
insert into new_list values(null,7,'小重组','img/new_4.png','/details.html?lid=7','198');
insert into new_list values(null,8,'小重组','img/new_5.png','/details.html?lid=8','198');
insert into new_list values(null,9,'小重组','img/new_5.png','/details.html?lid=9','198');
insert into new_list values(null,10,'小重组','img/new_6.png','/details.html?lid=10','198');
insert into new_list values(null,11,'小重组','img/new_7.png','/details.html?lid=11','198');
insert into new_list values(null,12,'小重组','img/new_8.png','/details.html?lid=12','198');
insert into new_list values(null,13,'小重组','img/new_9.png','/details.html?lid=13','198');
insert into new_list values(null,14,'小重组','img/new_10.png','/details.html?lid=14','198');

/*儿童列表*/
create table child_list(
    id int primary key auto_increment,
    nid int(128),
    details varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into child_list values(null,15,"草莓奶油蛋糕","img/new_1.png","/details.html?lid=15","198");
insert into child_list values(null,16,"黑森林","img/new_2.png","/details.html?lid=16","298");
insert into child_list values(null,17,"栗蓉暗香","img/new_3.png","/deta.htmlils?lid=17","198");
insert into child_list values(null,18,'小重组','img/new_4.png','/details.html?lid=18','198');
insert into child_list values(null,19,'小重组','img/new_5.png','/details.html?lid=19','198');
insert into child_list values(null,20,'小重组','img/new_5.png','/details.html?lid=20','198');
insert into child_list values(null,21,'小重组','img/new_6.png','/details.html?lid=21','198');
insert into child_list values(null,22,'小重组','img/new_7.png','/details.html?lid=22','198');
insert into child_list values(null,23,'小重组','img/new_8.png','/details.html?lid=23','198');
insert into child_list values(null,24,'小重组','img/new_9.png','/details.html?lid=24','198');
insert into child_list values(null,25,'小重组','img/new_10.png','/details.html?lid=25','198');
/*聚会列表*/
create table part_list(
    id int primary key auto_increment,
    nid int(128),
    details varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into part_list values(null,26,"草莓奶油蛋糕","img/new_1.png","/details.html?lid=26","198");
insert into part_list values(null,27,"黑森林","img/new_2.png","/details.html?lid=27","298");
insert into part_list values(null,28,"栗蓉暗香","img/new_3.png","/deta.htmlils?lid=28","198");
insert into part_list values(null,29,'小重组','img/new_4.png','/details.html?lid=29','198');
insert into part_list values(null,30,'小重组','img/new_5.png','/details.html?lid=30','198');
insert into part_list values(null,31,'小重组','img/new_5.png','/details.html?lid=31','198');
insert into part_list values(null,32,'小重组','img/new_6.png','/details.html?lid=32','198');
insert into part_list values(null,33,'小重组','img/new_7.png','/details.html?lid=33','198');
insert into part_list values(null,34,'小重组','img/new_8.png','/details.html?lid=34','198');
insert into part_list values(null,35,'小重组','img/new_9.png','/details.html?lid=35','198');
insert into part_list values(null,36,'小重组','img/new_10.png','/details.html?lid=36','198');

/*生日列表*/
create table birth_list(
    id int primary key auto_increment,
    nid int(128),
    details varchar(128),
    pic varchar(128),
    href varchar(128),
    price varchar(128)
);
insert into birth_list values(null,37,"草莓奶油蛋糕","img/new_1.png","/details.html?lid=37","198");
insert into birth_list values(null,38,"黑森林","img/new_2.png","/details.html?lid=38","298");
insert into birth_list values(null,39,"栗蓉暗香","img/new_3.png","/deta.htmlils?lid=39","198");
insert into birth_list values(null,40,'小重组','img/new_4.png','/details.html?lid=40','198');
insert into birth_list values(null,41,'小重组','img/new_5.png','/details.html?lid=41','198');
insert into birth_list values(null,42,'小重组','img/new_5.png','/details.html?lid=42','198');
insert into birth_list values(null,43,'小重组','img/new_6.png','/details.html?lid=43','198');
insert into birth_list values(null,44,'小重组','img/new_7.png','/details.html?lid=44','198');
insert into birth_list values(null,45,'小重组','img/new_8.png','/details.html?lid=45','198');
insert into birth_list values(null,46,'小重组','img/new_9.png','/details.html?lid=46','198');
insert into birth_list values(null,47,'小重组','img/new_10.png','/details.html?lid=47','198');































/*商品详情页  图片栏*/

create table details_pic(
     id int primary key auto_increment,
     pid int,
     pic_lg varchar(128),
     pic_sm1 varchar(128),
     pic_sm2 varchar(128),
     pic_sm3 varchar(128),
     pic_sm4 varchar(128),
     pic_sm5 varchar(128)
);
insert into details_pic values(null,1,"img/2eb5adabe75b62a89a15cfeb16b3364a(1).jpg","img/product1_1.jpg","img/product1_2.jpg","","","");
insert into details_pic values(null,2,"img/89902fbb678d9c2fad4f22cc4c36deb6.jpg","img/product2_1.jpg","img/product2_2.jpg","img/product2_3.jpg","","");
insert into details_pic values(null,3,"img/product3.jpg","img/product3_1.jpg","img/product3_2.jpg","img/product3_3.jpg","","");
insert into details_pic values(null,4,"img/product4_1.jpg","img/product4_1.jpg","img/product4_2.jpg","img/product4_3.jpg","","");
insert into details_pic values(null,5,"img/product5.jpg","img/product5_1.jpg","img/product5_2.jpg","img/product5_3.jpg","img/product5_4.jpg","");
insert into details_pic values(null,6,"img/product6.jpg","img/product6_1.jpg","img/product6_2.jpg","img/product6_3.jpg","img/product6_4.jpg","");
insert into details_pic values(null,7,"img/product7.jpg","img/product7_1.jpg","img/product7_2.jpg","img/product7_3.jpg","img/product7_4.jpg","");



/*商品详情页  商品名与提示*/
create table details_name(
     id int primary key auto_increment,
     pid int,
     uname varchar(128),
     warm varchar(128)
);
insert into details_name values(null,1,"一家三口","一家三口 39.9元");
insert into details_name values(null,2,"可可岛","精品巧克力蛋糕");
insert into details_name values(null,3,"野餐篮","6口味小切块一盒+北海道（4片）一包+阳光葡萄卷一个+蓝莓丹麦一个+红枣一包+棕色冰包一个");
insert into details_name values(null,4,"草莓奶油蛋糕","此款为应季水果蛋糕，可能受限于原料供应；如出现无法交付的情况，届时我们会主动联系您进行告知");
insert into details_name values(null,5,"可可岛","精品巧克力蛋糕");
insert into details_name values(null,6,"Chestnut Cream （新）栗蓉暗香","");
insert into details_name values(null,7,"小重组（树莓套组","巧克力蛋糕");

/*商品分类  */
create table details_type(
     id int primary key auto_increment,
     pid int,
     type1 varchar(128),
     type1_url varchar(128),
     type2 varchar(128),
     type2_url varchar(128),
     type3 varchar(128),
     type3_url varchar(128),
     type4 varchar(128),
     type4_url varchar(128)
);
insert into details_type values(null,1,"生日","birth_list.html","新品","new_list.html","","","","");
insert into details_type values(null,2,"生日","birth_list.html","聚会","new_list.html","儿童","child_list.html","","");
insert into details_type values(null,3,"生日","birth_list.html","聚会","new_list.html","儿童","child_list.html","","");
insert into details_type values(null,4,"生日","birth_list.html","聚会","new_list.html","聚会","part_list.html","儿童","child_list.html");
insert into details_type values(null,5,"儿童","child_list.html","聚会","new_list.html","","","","");

insert into details_type values(null,6,"新品","birth_list.html","聚会","new_list.html","儿童","child_list.html","","");
insert into details_type values(null,7,"生日","birth_list.html","聚会","new_list.html","","","","");



/*商品历史*/
create table details_content(
    id int primary key auto_increment,
    pid int,
    content1 varchar(128),
    content12 varchar(128),
    content13 varchar(128),
    conditions varchar(128),
    sweet1 varchar(128),
    sweet2 varchar(128),
    sweet3 varchar(128),
    sweet4 varchar(128),
    sweet5 varchar(128)
);

insert into details_content values(null,1,"/草莓配奶油，从王室，前往温布尔登的雨季/","Now 21cake has encapsulated this gloriously English tradition in square cake form. At Wimbledon, which dates back to 1877, protocol and propriety rule. Players must wear white...","","0－4℃保藏10小时，5℃食用为佳","img/sweet_02.png","img/sweet_02.png","img/sweet_01.png","img/sweet_01.png","img/sweet_01.png");
insert into details_content values(null,2,"/精品巧克力蛋糕/","Now 21cake has encapsulated this gloriously English tradition in square cake form. At Wimbledon, which dates back to 1877, protocol and propriety rule. Players must wear white...","","0－4℃保藏10小时，5℃食用为佳","img/sweet_02.png","img/sweet_01.png","img/sweet_01.png","img/sweet_01.png","img/sweet_01.png");
insert into details_content values(null,3,"/草莓配奶油，从王室，前往温布尔登的雨季/","Now 21cake has encapsulated this gloriously English tradition in square cake form. At Wimbledon, which dates back to 1877, protocol and propriety rule. Players must wear white...","","0－4℃保藏10小时，5℃食用为佳","img/sweet_02.png","img/sweet_02.png","img/sweet_02.png","img/sweet_02.png","img/sweet_01.png");
insert into details_content values(null,4,"/精品巧克力蛋糕/","Now 21cake has encapsulated this gloriously English tradition in square cake form. At Wimbledon, which dates back to 1877, protocol and propriety rule. Players must wear white...","","0－4℃保藏10小时，5℃食用为佳","img/sweet_02.png","img/sweet_02.png","img/sweet_02.png","img/sweet_02.png","img/sweet_02.png");

insert into details_content values(null,5,"/草莓配奶油，从王室，前往温布尔登的雨季/","Now 21cake has encapsulated this gloriously English tradition in square cake form. At Wimbledon, which dates back to 1877, protocol and propriety rule. Players must wear white...","","0－4℃保藏15小时，20℃食用为佳","img/sweet_02.png","img/sweet_01.png","img/sweet_01.png","img/sweet_01.png","img/sweet_01.png");
insert into details_content values(null,6,"/精品巧克力蛋糕/","Now 21cake has encapsulated this gloriously English tradition in square cake form. At Wimbledon, which dates back to 1877, protocol and propriety rule. Players must wear white...","","0－4℃保藏13小时，9℃食用为佳","img/sweet_02.png","img/sweet_02.png","img/sweet_01.png","img/sweet_01.png","img/sweet_01.png");
insert into details_content values(null,7,"/草莓配奶油，从王室，前往温布尔登的雨季/","Now 21cake has encapsulated this gloriously English tradition in square cake form. At Wimbledon, which dates back to 1877, protocol and propriety rule. Players must wear white...","","0－4℃保藏20小时，5℃食用为佳","img/sweet_02.png","img/sweet_02.png","img/sweet_02.png","img/sweet_02.png","img/sweet_01.png");


/*details_weight 商品重量*/

create table details_weight(
    id int primary key auto_increment,
    pid int,
    count int(128),
    details_weight varchar(128),
    details_img varchar(128)
);
insert into details_weight values(null,1,'1.0',1,'img/size_smm.jpg');
insert into details_weight values(null,1,'2.0',2,'img/size_lg.jpg');
insert into details_weight values(null,2,'1.0',1,'img/size_smm.jpg');
insert into details_weight values(null,2,'2.0',2,'img/size_md.jpg');
insert into details_weight values(null,2,'3.0',3,'img/size_md.jpg');
insert into details_weight values(null,2,'4.0',4,'img/size_lg.jpg');
insert into details_weight values(null,2,'5.0',5,'img/size_sp.jpg');
insert into details_weight values(null,3,'1.0',1,'img/size_smm.jpg');
insert into details_weight values(null,3,'2.0',2,'img/size_md.jpg');
insert into details_weight values(null,3,'4.0',3,'img/size_sp.jpg');
insert into details_weight values(null,4,'1.0',1,'img/size_md.jpg');
insert into details_weight values(null,4,'2.0',2,'img/size_lg.jpg');
insert into details_weight values(null,5,'1.0',1,'img/size_smm.jpg');
insert into details_weight values(null,5,'3.0',2,'img/size_md.jpg');
insert into details_weight values(null,5,'5.0',3,'img/size_lg.jpg');
insert into details_weight values(null,6,'1.0',1,'img/size_m.jpg');
insert into details_weight values(null,6,'2.0',2,'img/size_md.jpg');
insert into details_weight values(null,6,'3.0',3,'img/size_lg.jpg');
insert into details_weight values(null,7,'1.0',1,'img/size_md.jpg');
insert into details_weight values(null,7,'2.0',2,'img/size_lg.jpg');

/*details_adpt 商品适合尺寸*/
create table details_adpt(
    id int primary key auto_increment,
    pid int,
    count int(128),
    details_size varchar(128),
    details_adpt varchar(128),
    details_contain varchar(128),
    details_send varchar(128),
    details_price varchar(128)
);
insert into details_adpt values(null,1,1,'13*13','3-4','包含5套餐具','14:00','198/1.0');
insert into details_adpt values(null,1,2,'15*15','5-6','包含8套餐具','14:00','298/2.0');
insert into details_adpt values(null,2,1,'13*13','3-4','包含5套餐具','14:00','98/1.0');
insert into details_adpt values(null,2,2,'15*15','5-6','包含8套餐具','14:00','198/2.0');
insert into details_adpt values(null,2,3,'17*17','7-8','包含10套餐具','14:00','298/3.0');
insert into details_adpt values(null,2,4,'19*19','8-10','包含12套餐具','14:00','398/4.0');
insert into details_adpt values(null,2,5,'21*21','11-13','包含15套餐具','14:00','498/5.0');
insert into details_adpt values(null,3,1,'13*13','3-4','包含5套餐具','14:00','98/1.0');
insert into details_adpt values(null,3,2,'15*15','5-6','包含8套餐具','14:00','198/2.0');
insert into details_adpt values(null,3,3,'17*17','7-8','包含10套餐具','14:00','298/4.0');
insert into details_adpt values(null,4,1,'12*12','3-4','包含5套餐具','14:00','98/1.0');
insert into details_adpt values(null,4,2,'15*15','5-6','包含8套餐具','14:00','198/2.0');
insert into details_adpt values(null,5,1,'14*14','5-6','包含8套餐具','14:00','198/1.0');
insert into details_adpt values(null,5,2,'15*15','7-8','包含10套餐具','14:00','298/3.0');
insert into details_adpt values(null,5,3,'16*16','11-13','包含15套餐具','14:00','498/5.0');
insert into details_adpt values(null,6,1,'10*10','3-4','包含5套餐具','14:00','98/1.0');
insert into details_adpt values(null,6,2,'12*12','7-8','包含10套餐具','14:00','298/2.0');
insert into details_adpt values(null,6,3,'13*13','8-10','包含12套餐具','14:00','398/3.0');
insert into details_adpt values(null,7,1,'12*12','3-4','包含5套餐具','14:00','198/1.0');
insert into details_adpt values(null,7,2,'15*15','5-6','包含8套餐具','14:00','298/2.0');


create table usercart(
    id int primary key auto_increment,
    uid varchar(128),
    pid varchar(128),
    pname varchar(128),
    price varchar(128),
    pweight varchar(128),
    count int(128)
);

