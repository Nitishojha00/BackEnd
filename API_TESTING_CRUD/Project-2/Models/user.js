
// {
//   id: ObjectId,
//   name: String,
//   email: String,
//   address: String,
//   age: Number,
//   numberOfOrders: { type: Number, default: 0 },
//   totalAmountSpent: { type: Number, default: 0 }
// }
const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  id: Number,
  name: String,
  email: String,
  address: String,
  age: Number,
  numberOfOrders: { type: Number, default: 0 },
  totalAmountSpent: { type: Number, default: 0 }
})

const user = mongoose.model('user', userSchema); // ✅ Capital 'U' for model name
module.exports = user;