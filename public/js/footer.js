$(function(){
  //1.发送ajax请求。请求header.html中的<header>片段
  $.ajax({
    url:"footer.html",
    type:"get",
    //不用写dataType，因为现在获取的是html片段，用json的话出错
    success:function(footer){
    $(footer).replaceAll("footer")
    //用片段创建新<header> 查找旧的<header>
    //3.动态添加<link href="css/header">
    $(`<link rel="stylesheet" href="../css/footer.css"/>`)
    .appendTo("foot");
    }
  })
})