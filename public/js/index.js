$(function(){
    // 轮播图信息
       $.ajax({
        url:"content/index_banner",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            var html="";
            html+=`<div class="carousel-item active">
                        <a href="${result[0].http_url}"><img src="${result[0].img_url}"class="w-100"/></a>
                    </div>
                    <div class="carousel-item">
                        <a href="${result[1].http_url}"><img src="${result[1].img_url}" class="w-100"/></a>
                    </div>
                    <div class="carousel-item">
                        <a href="${result[2].http_url}"><img src="${result[2].img_url}" class="w-100"/></a>
                    </div>`
            $("#demo>div:nth-child(1)").html(html);
        }
       });
    // 首页新品
       $.ajax({
        url:"content/index_new",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            var html="";
            for(var res of result){
                 html+=`<div class="col-lg-3 col-md-6 mycolor tupian p-0 pr-2 ">
                 <a href="${res.href}" class="aaa"><img class="w-100" src="${res.pic}" id="img11" alt=""></a>
                 <div class="floor_details">
                     <p style="font-size: 15px" class="pname">${res.details_1}</p>
                     <p>${res.details_2}</p>
                     <div class="mt-1 mb-1">
                         <a href="javascript:;" class="directions">情侣></a>
                         <a href="javascript:;" class="directions">人气></a>
                         <a href="javascript:;" class="directions">情人节></a>
                     </div>
                     <span class="mt-2">¥${res.price}.00/1.0磅</span>
                     <a href="javascript:;" class="cards mt-2">加入购物车</a>
                 </div>
                 <div class="floor_add mycolor">
                     <div class="close1">
                         <span class="count">¥${res.price}.00/1.0磅</span>
                         <span type="text" class="count2" style="display:none">${res.price}</span>
                         <span type="text" class="count1" style="display:none">${res.price}</span>
                         <a href="javascript:;" title="关闭" class="h4">X</a>
                     </div>
                     <a href="javascript:;" class="mycolor active" title="yes">1.0磅</a>
                     <a href="javascript:;" class="mycolor" title="no">2.0磅</a>
                     <a href="javascript:;" class="mycolor" title="no">3.0磅</a>
                     <p>
                         <a href="${res.href}" class="mycolor">立即购买</a>
                         <a href="javascript:;" class="addcart1">加入购物车</a>
                     </p>
                 </div>
             </div>`
            }
            $("#floor1>div:nth-child(2)>div:nth-child(2)").html(html);
            
            $(".cards").click(function(){
                //判断是有含有 title属性值为yes的div，如果有，改变title的值为no
                if($("div[title=yes]").length==1){
                    $("div[title=yes]")
                    .removeClass("show")
                    .attr("title","no");
                    $(this)
                    .parent()
                    .next()
                    .addClass("show")
                    .attr("title","yes");
                }else{
                // 如果没有，就将title的值设置为yes，并且添加class属性值：show
                    $(this)
                    .parent()
                    .next()
                    .addClass("show")
                    .attr("title","yes");
                }
            });
            $(".close1").click(function(){
                $(this)
                .parent()
                .removeClass("show")
                .attr("title","no");
            });
            $("div.floor_add>a").click(function(e){
                e.preventDefault();
                if($("div.floor_add>a[title=yes]")){
                    $("div.floor_add>a[title=yes]")
                    .removeClass("active")
                    .attr("title","no");
                    $(this).addClass("active")
                    .attr("title","yes");
                }else{
                    $(this)
                    .addClass("active")
                    .attr("title","yes");
                }
                //查看商品的重量
                var sum=Number($(this).html().slice(0,-1));
                //查看商品的价格
                var priceString=$(this).parent().find(".count1")
                                .html();       
                var price=parseInt(priceString);
                $(this).parent().find(".count").html(`￥${price*sum}.00/${sum}.0磅`);
                $(this).parent().find(".count2").html(`${price*sum}`);
            })
               $(".addcart1").click(function(){
                if(!uid){
                    alert("请先登录")
                }else{
                    var price=$(this).parent().parent().find(".count2").html();
                var pid=$(this).parent().parent().parent().find(".aaa").attr("href").split("=")[1];
                var pname=$(this).parent().parent().parent().find(".floor_details>p.pname").html();
                var pweight=$(this).parent().parent().parent().find(".active").html().slice(0,1);
               $.ajax({
                   url:"content/addcart",
                   type:"get",
                   data:{uid,pid,price,pname,pweight},
                   dataType:"json",
                   success:function(result){
                    console.log(price)
                     if(result==1){
                         alert("加入成功");
                     }
                   }
               })
                }
                
            });
            
        }  
       });
    // 儿童专区
       $.ajax({
        url:"content/index_child",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            var html="";
            for(var res of result){
                html+=`<div class="col-lg-3 col-md-6 mycolor tupian p-0 pr-2 ">
                <a href="${res.href}" class="aaa"><img class="w-100" src="${res.pic}" id="img11" alt=""></a>
                <div class="floor_details">
                    <p style="font-size: 15px" class="pname">${res.details_1}</p>
                    <p>${res.details_2}</p>
                    <div class="mt-1 mb-1">
                        <a href="javascript:;" class="directions">情侣></a>
                        <a href="javascript:;" class="directions">人气></a>
                        <a href="javascript:;" class="directions">情人节></a>
                    </div>
                    <span class="mt-2">¥${res.price}.00/1.0磅</span>
                    <a href="javascript:;" class="cards mt-2">加入购物车</a>
                </div>
                <div class="floor_add mycolor">
                    <div class="close1">
                        <span class="count">¥${res.price}.00/1.0磅</span>
                        <span type="text" class="count2" style="display:none">${res.price}</span>
                        <span type="text" class="count1" style="display:none">${res.price}</span>
                        <a href="javascript:;" title="关闭" class="h4">X</a>
                    </div>
                    <a href="javascript:;" class="mycolor active" title="yes">1.0磅</a>
                    <a href="javascript:;" class="mycolor" title="no">2.0磅</a>
                    <a href="javascript:;" class="mycolor" title="no">3.0磅</a>
                    <p>
                        <a href="${res.href}" class="mycolor">立即购买</a>
                        <a href="javascript:;" class="addcart2">加入购物车</a>
                    </p>
                </div>
            </div>`
           }
            $("#floor2>div.floor_body>div:nth-child(2)").html(html);
            $(".cards").click(function(){
                //判断是有含有 title属性值为yes的div，如果有，改变title的值为no
                if($("div[title=yes]").length==1){
                    $("div[title=yes]")
                    .removeClass("show")
                    .attr("title","no");
                    $(this)
                    .parent()
                    .next()
                    .addClass("show")
                    .attr("title","yes");
                }else{
                // 如果没有，就将title的值设置为yes，并且添加class属性值：show
                    $(this)
                    .parent()
                    .next()
                    .addClass("show")
                    .attr("title","yes");
                }
            });
            $(".close1").click(function(){
                $(this)
                .parent()
                .removeClass("show")
                .attr("title","no");
            });
            $("div.floor_add>a").click(function(e){
                e.preventDefault();
                if($("div.floor_add>a[title=yes]")){
                    $("div.floor_add>a[title=yes]")
                    .removeClass("active")
                    .attr("title","no");
                    $(this).addClass("active")
                    .attr("title","yes");
                }else{
                    $(this)
                    .addClass("active")
                    .attr("title","yes");
                }
                //查看商品的重量
                var sum=Number($(this).html().slice(0,-1));
                //查看商品的价格
                var priceString=$(this)
                                .parent()
                                .find(".count1")
                                .html();       
                var price=parseInt(priceString);
                $(this)
                .parent()
                .find(".count")
                .html(`￥${price*sum}.00/${sum}.0磅`);
            })
            $(".addcart2").click(function(){
                if(!uid){
                    alert("请先登录")
                }else{
                    var price=$(this).parent().parent().find(".count2").html();
                    var pid=$(this).parent().parent().parent().find(".aaa").attr("href").split("=")[1];
                    var pname=$(this).parent().parent().parent().find(".floor_details>p.pname").html();
                    var pweight=$(this).parent().parent().parent().find(".active").html().slice(0,1);
                   $.ajax({
                       url:"content/addcart",
                       type:"get",
                       data:{uid,pid,price,pname,pweight},
                       dataType:"json",
                       success:function(result){
                        console.log(price)
                         if(result==1){
                             alert("加入成功");
                         }
                       }
                   })
                }
                
            });
        }
       });
    // 聚会专区
        $.ajax({
            url:"content/index_part",
            type:"get",
            data:{},
            dataType:"json",
            success:function(result){
                var html="";
                for(var res of result){
                    html+=`<div class="col-lg-3 col-md-6 mycolor tupian p-0 pr-2 ">
                    <a href="${res.href}" class="aaa"><img class="w-100" src="${res.pic}" id="img11" alt=""></a>
                    <div class="floor_details">
                        <p style="font-size: 15px" class="pname">${res.details_1}</p>
                        <p>${res.details_2}</p>
                        <div class="mt-1 mb-1">
                            <a href="javascript:;" class="directions">情侣></a>
                            <a href="javascript:;" class="directions">人气></a>
                            <a href="javascript:;" class="directions">情人节></a>
                        </div>
                        <span class="mt-2">¥${res.price}.00/1.0磅</span>
                        <a href="javascript:;" class="cards mt-2">加入购物车</a>
                    </div>
                    <div class="floor_add mycolor">
                        <div class="close1">
                            <span class="count">¥${res.price}.00/1.0磅</span>
                            <span type="text" class="count2" style="display:none">${res.price}</span>
                            <span type="text" class="count1" style="display:none">${res.price}</span>
                            <a href="javascript:;" title="关闭" class="h4">X</a>
                        </div>
                        <a href="javascript:;" class="mycolor active" title="yes">1.0磅</a>
                        <a href="javascript:;" class="mycolor" title="no">2.0磅</a>
                        <a href="javascript:;" class="mycolor" title="no">3.0磅</a>
                        <p>
                            <a href="${res.href}" class="mycolor">立即购买</a>
                            <a href="javascript:;" class="addcart3">加入购物车</a>
                        </p>
                    </div>
                </div>`
               }
                $("#floor3>div.floor_body>div:nth-child(2)").html(html);
                $(".cards").click(function(){
                    //判断是有含有 title属性值为yes的div，如果有，改变title的值为no
                    if($("div[title=yes]").length==1){
                        $("div[title=yes]")
                        .removeClass("show")
                        .attr("title","no");
                        $(this)
                        .parent()
                        .next()
                        .addClass("show")
                        .attr("title","yes");
                    }else{
                    // 如果没有，就将title的值设置为yes，并且添加class属性值：show
                        $(this)
                        .parent()
                        .next()
                        .addClass("show")
                        .attr("title","yes");
                    }
                });
                $(".close1").click(function(){
                    $(this)
                    .parent()
                    .removeClass("show")
                    .attr("title","no");
                });
                $("div.floor_add>a").click(function(e){
                    e.preventDefault();
                    if($("div.floor_add>a[title=yes]")){
                        $("div.floor_add>a[title=yes]")
                        .removeClass("active")
                        .attr("title","no");
                        $(this).addClass("active")
                        .attr("title","yes");
                    }else{
                        $(this)
                        .addClass("active")
                        .attr("title","yes");
                    }
                    //查看商品的重量
                    var sum=Number($(this).html().slice(0,-1));
                    //查看商品的价格
                var priceString=$(this)
                                .parent()
                                .find(".count1")
                                .html();       
                var price=parseInt(priceString);
                $(this)
                .parent()
                .find(".count")
                .html(`￥${price*sum}.00/${sum}.0磅`);
                })
                   $(".addcart3").click(function(){
                    if(!uid){
                        alert("请先登录")
                    }else{
                       var price=$(this).parent().parent().find(".count2").html();
                    var pid=$(this).parent().parent().parent().find(".aaa").attr("href").split("=")[1];
                    var pname=$(this).parent().parent().parent().find(".floor_details>p.pname").html();
                    var pweight=$(this).parent().parent().parent().find(".active").html().slice(0,1);
                   $.ajax({
                       url:"content/addcart",
                       type:"get",
                       data:{uid,pid,price,pname,pweight},
                       dataType:"json",
                       success:function(result){
                        console.log(price)
                         if(result==1){
                             alert("加入成功");
                         }
                       }
                   })
                    }
                    
                });
                
                
            }
        })
    // 生日专区
        $.ajax({
            url:"content/index_birth",
            type:"get",
            data:{},
            dataType:"json",
            success:function(result){
                var html="";
                for(var res of result){
                    html+=`<div class="col-lg-3 col-md-6 mycolor tupian p-0 pr-2 ">
                    <a href="${res.href}" class="aaa"><img class="w-100" src="${res.pic}" id="img11" alt=""></a>
                    <div class="floor_details">
                        <p style="font-size: 15px" class="pname">${res.details_1}</p>
                        <p>${res.details_2}</p>
                        <div class="mt-1 mb-1">
                            <a href="javascript:;" class="directions">情侣></a>
                            <a href="javascript:;" class="directions">人气></a>
                            <a href="javascript:;" class="directions">情人节></a>
                        </div>
                        <span class="mt-2">¥${res.price}.00/1.0磅</span>
                        <a href="javascript:;" class="cards mt-2">加入购物车</a>
                    </div>
                    <div class="floor_add mycolor">
                        <div class="close1">
                            <span class="count">¥${res.price}.00/1.0磅</span>
                            <span type="text" class="count2" style="display:none">${res.price}</span>
                            <span type="text" class="count1" style="display:none">${res.price}</span>
                            <a href="javascript:;" title="关闭" class="h4">X</a>
                        </div>
                        <a href="javascript:;" class="mycolor active" title="yes">1.0磅</a>
                        <a href="javascript:;" class="mycolor" title="no">2.0磅</a>
                        <a href="javascript:;" class="mycolor" title="no">3.0磅</a>
                        <p>
                            <a href="${res.href}" class="mycolor">立即购买</a>
                            <a href="javascript:;" class="addcart4">加入购物车</a>
                        </p>
                    </div>
                </div>`
               }
                $("#floor4>div.floor_body>div:nth-child(2)").html(html);
                $(".cards").click(function(){
                    //判断是有含有 title属性值为yes的div，如果有，改变title的值为no
                    if($("div[title=yes]").length==1){
                        $("div[title=yes]")
                        .removeClass("show")
                        .attr("title","no");
                        $(this)
                        .parent()
                        .next()
                        .addClass("show")
                        .attr("title","yes");
                    }else{
                    // 如果没有，就将title的值设置为yes，并且添加class属性值：show
                        $(this)
                        .parent()
                        .next()
                        .addClass("show")
                        .attr("title","yes");
                    }
                });
                $(".close1").click(function(){
                    $(this)
                    .parent()
                    .removeClass("show")
                    .attr("title","no");
                });
                $("div.floor_add>a").click(function(e){
                    e.preventDefault();
                    if($("div.floor_add>a[title=yes]")){
                        $("div.floor_add>a[title=yes]")
                        .removeClass("active")
                        .attr("title","no");
                        $(this).addClass("active")
                        .attr("title","yes");
                    }else{
                        $(this)
                        .addClass("active")
                        .attr("title","yes");
                    }
                    //查看商品的重量
                    var sum=Number($(this).html().slice(0,-1));
                    //查看商品的价格
                var priceString=$(this)
                                .parent()
                                .find(".count1")
                                .html();       
                var price=parseInt(priceString);
                $(this)
                .parent()
                .find(".count")
                .html(`￥${price*sum}.00/${sum}.0磅`);
                })
                
                
                $(".addcart4").click(function(){
                    if(!uid){
                        alert("请先登录")
                    }else{
                       var price=$(this).parent().parent().find(".count2").html();
                    var pid=$(this).parent().parent().parent().find(".aaa").attr("href").split("=")[1];
                    var pname=$(this).parent().parent().parent().find(".floor_details>p.pname").html();
                    var pweight=$(this).parent().parent().parent().find(".active").html().slice(0,1);
                    
                   $.ajax({
                       url:"content/addcart",
                       type:"get",
                       data:{uid,pid,price,pname,pweight},
                       dataType:"json",
                       success:function(result){
                        console.log(price)
                         if(result==1){
                             alert("加入成功");
                         }
                       }
                   })
                    }
                    
                });
                
            }
        })
    // 文章专区
        $.ajax({
            url:"content/index_txt",
            type:"get",
            data:{},
            dataType:"json",
            success:function(result){
                // console.log(result)
                var html="";
                html+=`<div>
                    <a href="${result[0].txt_url}"><img src="${result[0].txt_img}" class="border" alt=""></a>
                    <h3 class="m-3">${result[0].title}</h3>
                    <a href="${result[0].txt_url}" class="m-3 mycolor myfont">阅读全文 > ></a>
                </div>
                <div>
                    <a href="${result[1].txt_url}"><img src="${result[1].txt_img}" class="border" alt=""></a>
                    <h3 class="m-3">${result[1].title}</h3>
                    <a href="${result[1].txt_url}" class="m-3 mycolor myfont">阅读全文 > ></a>
                </div>`
                $("#floor6_contains").html(html);
            }
        })
})