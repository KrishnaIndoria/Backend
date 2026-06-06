const express = require('express');
const app = express();
const bookRouter = require('./routes/book')

app.use(express.json());

app.use("/book",bookRouter)


app.listen(5000,()=>{
    console.log("Server listening at port no : 5000");
})