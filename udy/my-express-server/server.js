const express=require("express");
const app=express();
app.get("/",function(req,res){
    console.log(req);
    res.send("<h1>Hello fansan, this message is from Server.</h1><br><a href='http://localhost:3000/contact'>Contact</a><br><a href='http://localhost:3000/about'>About</a>");
});
app.get("/contact",function(req,res){
    res.send("Constact me at : fanin.s.pbl@gmail.com");
});

app.get("/about",function(req,res){
    res.send("Hello my name is Fanindra Saini, I am Computer Science Student.");

})

app.listen(3000,function(){
    console.log("Server started at port 3000.");
});
