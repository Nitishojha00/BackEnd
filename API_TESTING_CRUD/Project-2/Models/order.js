const mongoose = require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    id: Number ,
    item: String,
    quantity: Number,
    price: Number,
    status: String //(e.g. "Pending", "Delivered")
})

const order = mongoose.model('order', orderSchema); // ✅ Capital 'U' for model name
module.exports = order;