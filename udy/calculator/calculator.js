const express = require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

 app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
 }); 
 app.post("/",function(req,res){
    //res.send("Thanks for posting.");
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result=n1 + n2;
    res.send("Result = "+result)
    console.log(req.body);
});

app.get("/bmicalc",function(req,res){
   res.sendFile(__dirname+"/bmicalc.html")
});
app.post("/bmicalc",function(req,res){
   var w=Number(req.body.w);
   var h=Number(req.body.h);
   var bmi=w/(h*h);
   res.send("BMI Index = "+bmi);
});
app.listen(3000,function(){
   console.log("Server at 3000.");
});


