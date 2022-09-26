$(document).ready(function(){
    $("h1").css("color","green")
});
$("h1").text("Bye");
$("button").html("<em>hey</em>");
$(document).keypress(function(event){
    $("h1").html(event.key);
    console.log(event.key);
});
$("div").on("mouseover",function(){
    $("div").css("background-color","Purple");
    setTimeout(function(){
        $("div").css("background-color","rgb(111, 192, 196)");
    },500)
});

$("button").on("click",function(){
    $("h1").slideUp().animate({opacity:0}).slideDown();
});