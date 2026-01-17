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

app.listen(5000,()=>{
    console.log("Listening at port 5000");
})























// // app.use("/user",(req,res)=>{
// //     res.send({name:"Krishna"});
// // });

// app.use(express.json()); //the json data is parsed (converted into JS object)

// app.get("/user",(req,res)=>{
//     res.send({name:"Krishna"});
// });

// app.post("/user",(req,res)=>{
//     console.log(req.body);
//     res.send("Data recieved succesfully");
// })

// app.listen(4000,()=>{
//     console.log("Listening at 4000 port no")
// })