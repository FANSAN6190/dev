//jshint esversion:6
const express=require("express")
const bodyParser=require("body-parser")
const app=express(); 

app.get("/",function(req,res){
    var today=new Date();
    var currentday=today.getDay();
    var day="";
    /*if(currentday===6 || currentday===0){
        day="Weekend";
    }
    else{
        day="Weekday";
    }*/
    switch (currentday) {
        case 0:
            day="Sunday"
            break;
        case 1:
            day="Monday"
            break;
        case 2:
            day="Tuesday"
            break;
        case 3:
            day="Wednesday"
            break;
        case 4:
            day="Thursday"
            break;
        case 5:
            day="Friday"
            break;
        case 6:
            day="Saturday"
            break;
        default:
            day="\"an ERROR\""
            break;
    }
    res.render("list.ejs",{day_today:day});
});
app.listen(3000,function(){
    console.log("Server Port=3000")
});
