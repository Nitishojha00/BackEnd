const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
  id: Number,
  menuName: [String],
  price: Number,
  category: String
});


const menu = mongoose.model('menu', menuSchema);

module.exports = menu;
