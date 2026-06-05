const express = require('express');
const app = express();

app.use(express.json());

const students = [
    {
        name:"Krishna",age:"19"
    },
    {
        name:"Giridhar",age:"20"
    }
]

app.get("/students",(req,res)=>{
    res.send(students);
})

app.get("/students/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const student = students[id];
    res.send(student);
})

app.post("/students",(req,res)=>{
    students.push(req.body);
    res.send("Added sucesfully");
})

app.listen(5000,()=>{
    console.log("Listening at port no : 5000");
})