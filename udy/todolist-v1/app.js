//jshint esversion:6
const express=require("express")
const bodyParser=require("body-parser")
const app=express(); 

app.get("/",function(req,res){
    var today=new Date();
    var currentday=today.getDay();
    var day="";
    if(currentday===6 || currentday===0){
        day="Weekend";
    }
    else{
        day="Weekday";
    }
    res.render("list.ejs",{day_today:day});
});
app.listen(3000,function(){
    console.log("Server Port=3000")
});
