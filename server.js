const express = require('express');
const hbs= require('hbs');
const fs =require('fs');
var app =express();

app.set('view engine','hbs');
 
app.use((req,res,next)=>{
    var now = new Date().toString;
     console.log(now); 
    next();
});

app.get('/',(req,res)=>{
    res.render('about.hbs');

}); 


app.listen(3000,()=>{
    console.log("server is up");
});