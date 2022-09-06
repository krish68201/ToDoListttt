const express=require("express");
const bodyparser=require("body-parser");
const ejs = require('ejs');

const app=express();

app.set('view engine' ,'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
let newItems=["Add After This"];
app.get("/", (req,res) =>{
  let options={ weekday:"long",year:"numeric", month:"long",day:"numeric"}
  var today=new Date();
  var day=today.toLocaleDateString("en-US",options);
  
  res.render("list",{
    kindofDay:day,
    newlistitems:newItems
});
});
 
app.post("/", function(req,res){
let newItem= req.body.newItem;
newItems.push(newItem);

 res.redirect("/");
})

app.listen(3000,function(){
    console.log("port 3000 started")
});