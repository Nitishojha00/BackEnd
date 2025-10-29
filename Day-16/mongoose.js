const mongoose = require("mongoose");

const {schema} = mongoose;

async function main(){
    await mongoose.connect("mongodb+srv://nitishojha00:Bsndojhaji%4000@cluster0.5kohvit.mongodb.net/Nitish_Ojha");
}

module.exports = main;