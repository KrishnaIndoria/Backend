const express = require("express");

const app = express();


app.use("/about",(req,res)=>{
    res.send("I am about page");
})

app.use("/",(req,res)=>{
    res.send("Home page");
});

app.listen(4000,()=>{
    console.log("Server running at port no:4000");
});