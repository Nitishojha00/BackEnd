const mongoose = require('mongoose');

async function main()
{
    await mongoose.connect("mongodb+srv://nitishojha00:Bsndojhaji%4000@cluster0.5kohvit.mongodb.net/Project_2");
}

module.exports = main;