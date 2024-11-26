// console.log("i am sahid");
const prompt=require('prompt-sync')({sigint:true});
// let a=prompt("enter the value of a :");
// let b=prompt("enter the value of b :");
// console.log(`after addition:${parseInt(a)+parseInt(b)}`)
const http=require('http');
const fs =require('fs')
http.createServer(function(req,res){
    // res.write("this is node");
    fs.readFile('index.html',function(err,data){
        if(err)throw err;
        res.write(data);
        res.end();
    });
    
}).listen(8081);

