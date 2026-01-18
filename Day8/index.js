const express = require('express');
const app = express();

app.use(express.json());

const bookstore =[
    {id:1,name:"Harry potter",author:"DevFlux"},
    {id:2,name:"Friends",author:"vikas"},
    {id:3,name:"Nexus",author:"rohit"},
]

app.get("/book",(req,res)=>{
    res.send(bookstore);
})

app.get("/book/:id",(req,res)=>{
    // we get the id in string form , so we use parseInt to convert id to number
    const id = parseInt(req.params.id);
    const book = bookstore.find((info)=>info.id==id);
    res.send(book);
})

app.post("/book",(req,res)=>{
    bookstore.push(req.body);
    res.send("Added succesfully");
})

app.patch("/book",(req,res)=>{
    console.log(req.body);
    const book = bookstore.find(info=>info.id === req.body.id);
    if(req.body.author)
    book.author = req.body.author;

    if(req.body.name)
    book.name = req.body.name
    res.send("patch updated");

})

app.put("/book",(req,res)=>{
    console.log(req.body)
    const book = bookstore.find(info=>info.id === req.body.id);
    book.author = req.body.author;
    book.name = req.body.name;
    res.send("Put updated");
})

app.delete("/book/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    const index = bookstore.findIndex(info=>info.id === id);
    console.log(index);
    bookstore.splice(index,1);
    res.send("Succesfully deleted");
})

app.listen(5000,()=>{
    console.log("Listening at port 5000");
})