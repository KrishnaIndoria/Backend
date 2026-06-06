const express = require('express');
const app = express();

app.use(express.json());


const products = [
    {"id":1,"name":"phone","price":5000},
    {"id":2,"name":"laptop","price":15000},
    {"id":3,"name":"earphone","price":250}
]


app.get("/products",(req,res)=>{
    res.send(products);
})

app.get("/products/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const product = products.find((info)=>info.id==id);
    res.send(product);
})

app.post("/products",(req,res)=>{
    products.push(req.body);
    res.send("Added");
})

app.delete("/products/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = products.findIndex((info)=>info.id==id);
    if(index==-1)
        return res.send("item not present");
    products.splice(index,1)
    res.send("deleted");
})

app.listen(5000,()=>{
    console.log("Listening at port no: 5000");
})
