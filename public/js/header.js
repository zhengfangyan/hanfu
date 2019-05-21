$(function(){
  //1.发送ajax请求。请求header.html中的<header>片段
  $.ajax({
    url:"header.html",
    type:"get",
    //不用写dataType，因为现在获取的是html片段，用json的话出错
    success:function(header){
    $(header).replaceAll("header")
    //用片段创建新<header> 查找旧的<header>
    //3.动态添加<link href="css/header">
    $(`<link rel="stylesheet" href="../css/header.css"/>`)
    .appendTo("head");
    }
  })
})
