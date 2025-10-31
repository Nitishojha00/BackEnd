const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');//GET /users → Fetch all users

async function route6(req, res)
{
     const order = await Order.find({status:"Pending"});
     res.status(200).send(order);
}

module.exports = route6;