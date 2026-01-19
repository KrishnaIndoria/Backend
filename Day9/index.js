const express = require("express");
const app = express();

app.use(express.json());

// database (think like it is the json file which we get whn we fetch using api)
const foodmenu= [
    {id:1,food:"Noodles",category:"veg",price:200},
    {id:2,food:"chicken",category:"non-veg",price:500},
    {id:3,food:"rice",category:"veg",price:100},
    {id:4,food:"roti",category:"veg",price:50},
    {id:5,food:"panner",category:"veg",price:200},
    {id:6,food:"salad",category:"veg",price:30},
    {id:7,food:"mutton",category:"non-veg",price:500},
    {id:8,food:"egg",category:"non-veg",price:40},
    {id:9,food:"naan",category:"veg",price:50},
    {id:10,food:"biryani",category:"veg",price:100},
    {id:11,food:"dosa",category:"veg",price:40},
    {id:12,food:"idli",category:"veg",price:30},
];

// user ka cart hai yeh , isme user ka selected food item yaha hoga
const AddToCart=[];

// middleware for authentication
app.use("/admin",(req,res,next)=>{
    // add item into foodmenu (database), now this can be done only by the admin not by a general user
    // so we have to authenticate whether the request being sent is from admin or not
    // so for now we write a dummy code to check
    // even for delete fooditem from database

    const token = "ABCDEF";
    const access = (token==="ABCDEF")?1:0;
    if(!access){
        res.status(403).send("No permission");
    }

    next(); //goes to the particular request being sent from client
})

app.get("/food",(req,res)=>{
    res.status(200).send(foodmenu);
})

app.post("/admin",(req,res)=>{
        foodmenu.push(req.body);
        res.status(201).send("Food Item added in database");
})

app.delete("/admin/:id",(req,res)=>{

        const id = parseInt(req.params.id);
        const index = foodmenu.findIndex(item=>item.id===id);

        if(index===-1){
            res.send("item not present");
        }
        else{
            foodmenu.splice(index,1);
            res.send("Succesfully deleted from database");
        }
})

app.listen(3000,(req,res)=>{
    console.log("Listening at port 3000")
})
