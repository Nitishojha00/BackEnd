const mongoose = require("mongoose");
const { Schema } = mongoose;

async function main(){
     await mongoose.connect("mongodb+srv://nitishojha00:Bsndojhaji%4000@cluster0.5kohvit.mongodb.net/Restaurant_Management_System?retryWrites=true&w=majority");

}

module.exports = main;