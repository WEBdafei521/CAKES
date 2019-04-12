$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/content/products_new",
        type:"get",
        data:{},
        dataType:"json",
        success:function(result){
            console.log(result)
            var html="";
            for(var res of result){
                html+=`<div class="col-lg-3 col-md-6 mycolor tupian p-0 pr-2 ">
                <a href="${res.href}"><img class="w-100" src="${res.pic}" alt=""></a>
                <div class="floor_details">
                <p style="font-size: 15px">${res.details}</p>
                    <p>¥458.00/2.0磅</p>
                    <div class="mt-1 mb-1">
                        <a href="javascript:;" class="directions">儿童></a>
                        <a href="javascript:;" class="directions">新品></a>
                        <a href="javascript:;" class="directions">相识></a>
                    </div>
                    <a href="javascript:;" class="cards mt-2"><span class="cart_tu"></span>加入购物车</a>
                </div>
                <div class="floor_add mycolor">
                    <div class="close1">
                        <span class="count">¥198.00/1.0磅</span>
                        <span type="text" class="count1" style="display:none">${res.price}</span>
                        <a href="javascript:;" title="关闭" class="h4">X</a>
                    </div>
                    <a href="javascript:;" class="mycolor active" title="yes">1.0磅</a>
                    <a href="javascript:;" class="mycolor" title="no">2.0磅</a>
                    <a href="javascript:;" class="mycolor" title="no">3.0磅</a>
                    <p>
                        <a href="${res.href}" class="mycolor">立即购买</a>
                        <a href="javascript:;">加入购物车</a>
                    </p>
                </div>
              </div>` 
            }
        $("div.floor_body>div").html(html);
        $(".cards").click(function(){
            //判断是有含有 title属性值为yes的div，如果有，改变title的值为no
            if($("div[title=yes]").length==1){
                $("div[title=yes]")
                .removeClass("show")
                .attr("title","no");
                $(this).parent()
                        .next()
                        .addClass("show")
                        .attr("title","yes");
            }else{
                // 如果没有，就将title的值设置为yes，并且添加class属性值：show
                $(this).parent()
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
                $(this).addClass("active")
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
            $(this).parent()
                    .find(".count")
                    .html(`￥${price*sum}.00/${sum}.0磅`);
            })
        }
    })
})