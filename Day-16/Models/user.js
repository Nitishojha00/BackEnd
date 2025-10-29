const mongoose = require('mongoose');
const { Schema } = mongoose; // ✅ Capital 'S'

const userSchema = new Schema({ // ✅ Capital 'S'
    name: String,
    age: Number,
    rollno: Number
});

const User = mongoose.model('User', userSchema); // ✅ Capital 'U' for model name
module.exports = User;