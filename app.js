const express=require("express");
const ejs=require("ejs")
var mymodule=require(__dirname+"/public/index2.js")
const app=express();
app.set('view engine', 'ejs');


var animalsName1=mymodule.animalsNames1();
var animalsName=mymodule.animalsNames();


app.use(express.static("public"));

app.get("/",function(req,res){
   res.render("index",({animalsName1:animalsName1,animalsName:animalsName}));

})

app.listen(3000,function(){
    console.log("server started on port 3000");
}); 