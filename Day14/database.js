const mongoose = require('mongoose');


async function main(){
  await mongoose.connect("mongodb+srv://krishnaindoria5:Jaishreeshyam@codingadda.b6dhtkv.mongodb.net/Bookstore");

}

module.exports = main;
