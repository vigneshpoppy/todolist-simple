const express=require("express");
const app=express();
const bodyparser= require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

var items=[];
var worklist=[];
app.get("/",function(req,res){

    var today= new Date();
   // var cday=today.getDay();//need to get current day
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"

    }
     var day= today.toLocaleDateString("en-us", options);
     
   
    
    res.render("list",{listtitle:day,itemlist:items});

});
app.post("/",function(req,res){
    var item = req.body.newitem;
    if (req.body.list==="work-list"){
        worklist.push(item);
        res.redirect("/work");
    }
    else{
    items.push(item);
    res.redirect("/");
    }
});
app.get("/work",function(req,res){
    res.render("list",{listtitle:"work-list",itemlist:worklist});
});


app.listen(3000,function(){
    console.log("server is runing");
});
