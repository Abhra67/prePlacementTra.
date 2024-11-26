const express=require('express');
const path =require('path');
const app=express();
let port=8080;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// '/' means 
app.get('/',function(req,res){
    res.render('demo');
});
app.listen(port,()=>{
    console.log("sjhjshw");
})