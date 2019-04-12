  // 获取用户名
  var url=document.URL;
  var uname=url.split("=")[1];
  if(uname!=undefined){
       $("#login").removeAttr("href").html(`欢迎,${uname}`).next().remove();
  }
  $(function(){
      var pno=1;
      var html="";
      var list=[];
      $.ajax({
          url:"content/txt_list?",
          type:"get",
          data:{},
          dataType:"json",
          success:function(result){
              list=result;
              for(var res of result){
                  html+=` <div class="col-12">
                  <div class="body_title">
                      <a href="${res.txt_url}"><img src="img/_txthead.png" alt="" class="mr-3"></a> 
                      <div>
                          <p>21客志</p>
                          <span class="mycolor myfont">${res.dtimer}</span>
                      </div>
                  </div>
                  <div class="content">
                      <div>
                          <h3 class="mt-5 ml-4 mb-5">${res.title}</h3>
                          <a href="${res.txt_url}" class="mycolor myfont mt-5 ml-5">阅读全文</a>
                      </div>
                      <div>
                          <a href="${res.txt_url}"><img src="${res.txt_img}" alt=""></a>
                      </div>
                  </div>
                </div>`
              }
          $(".container>div:nth-child(1)").html(html)
          }   
      });
      $(".add-more>a").click(function(){
        pno+=1;
        $.ajax({
            url:"content/txt_list?pno="+pno,
            type:"get",
            data:{},
            dataType:"json",
            success:function(result){
                if(result.length==0){
                    $(".add-more>a").html("没有了···")
                }
                var row=list.concat(result);
                list=row;
                html="";
                for(var res of list){
                    html+=`<div class="col-12">
                    <div class="body_title">
                        <a href="${res.txt_url}"><img src="img/_txthead.png" alt="" class="mr-3"></a> 
                        <div>
                            <p>21客志</p>
                            <span class="mycolor myfont">${res.dtimer}</span>
                        </div>
                    </div>
                    <div class="content">
                        <div>
                            <h3 class="mt-5 ml-4 mb-5">${res.title}</h3>
                            <a href="${res.txt_url}" class="mycolor myfont mt-5 ml-5">阅读全文</a>
                        </div>
                        <div>
                            <a href="${res.txt_url}"><img src="${res.txt_img}" alt=""></a>
                        </div>
                    </div>
                </div>`
                }
                $(".container>div:nth-child(1)").html(html)
            }   
        });
    });
  });