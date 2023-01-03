const express = require("express")
const bodyParser=require("body-parser")

const app=express();

app.set('view engine','ejs');

app.get("/",function(req,res){
	var today=new Date();

	res.render("list",{
		kod:today.getDay()
	});
});
app.listen(3000,function(){
	console.log("Server at 3000");
});


