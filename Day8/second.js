const express = require('express');
const app = express();
// here first,second,third ones are middleware
// and the fourth one is request handler as it is sending response "hello" to request from client
app.use("/user",(req,res,next)=>{
    console.log("First");
    next();
})
// next(); calls the below function
app.use("/user",(req,res,next)=>{
    console.log("second");
    next();
})

app.use("/user",(req,res,next)=>{
    console.log("third");
    next();
})

app.use("/user",(req,res)=>{
    console.log("fourth");
    res.send("Hello");
})


app.listen(3000,()=>{
    console.log("Listening at port 3000");
})