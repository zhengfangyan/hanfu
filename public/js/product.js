$(function(){
$(document).ready(function(){
$(".tabs>ul>li").bind("click",function(){
$(".items").hide();
$("#"+$(this).attr("name")).show();
 $(".tabs>ul>li").css({
    "padding":"0.4rem 0 0.4rem 1.2rem ",
    "border-bottom":"1px solid grey",
    "background":"#f6f6f6",
    "color":"#555"
 });
 $(".tabs>ul>li>a").css({
    "color":"#ff4466"
 });
 $(this).css({
    "border":"0",
    "background":"#ff4466",
    "color":"#fff"
 });
 
});
$("li:first-child").click();
});
})