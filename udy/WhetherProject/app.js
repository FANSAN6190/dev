const express=require("express");
const bodyParse= require("body-parser");
const https=require("https");

const app = express();

app.use(bodyParse.urlencoded({extended:true}));
   
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    console.log(req.body.cityName);
    const query=req.body.cityName;
    const apiKey="b62135ca16d7e5c21516d3b88cb52311"
    const unit="metric"
    const url1="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
    https.get(url1,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const wdata=JSON.parse(data);
            const tem=JSON.stringify(wdata.main.temp);
            const wdesc=JSON.stringify(wdata.weather[0].description);
            const imurl="http://openweathermap.org/img/wn/"+wdata.weather[0].icon+"@2x.png"
            console.log(tem);
            console.log(wdesc);

            res.write("<p>the weather is currently "+wdesc+".</p>");
            res.write("<h1>Temperature in "+query+" is "+tem+" degree Celcius.</h1>");
            //res.write("<img src=http://openweathermap.org/img/wn/"+wdata.weather[0].icon+"@2x.png>");
            res.write("<img src="+imurl+">");
            res.send();
        });
    });
});


/* */

app.listen(3000,function(){
    console.log("Server running at port 3000");
});
