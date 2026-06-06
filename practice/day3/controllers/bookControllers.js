const books = [
    {"id":1,"name":"class1","price":100},
    {"id":2,"name":"class7","price":250},
    {"id":3,"name":"class10","price":250}
]

const getBooks = (req,res)=>{
    res.send(books)
}

const addBooks = (req,res)=>{
    books.push(req.body);
    res.send("Added suscesfully");
}

const deleteBooks = (req,res)=>{
    const id = parseInt(req.params.id);
    const index = books.findIndex((info)=>info.id==id);

    books.splice(index,1);
    res.send("Deleted");
}

module.exports = {getBooks,addBooks,deleteBooks};