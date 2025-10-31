const mongoose = require('mongoose');
const { Schema } = mongoose;

const restrauntSchema = new Schema({
  id: Number,
  name: String,
  rating: Number,
  location: String
});


const restraunt = mongoose.model('restraunt', restrauntSchema);

module.exports = restraunt;
