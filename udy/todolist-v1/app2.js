//jshint esversion:6
const express=require("express")
const bodyParser=require("body-parser")
const app=express(); 
app.set("view engine",'ejs');
app.get("/",function(req,res){
    var today=new Date();
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day=today.toLocaleDateString("en-IN",options);
    
    res.render("list2.ejs",{day_today:day});
});


app.listen(3000,function(){
    console.log("Server Port=3000")
});
