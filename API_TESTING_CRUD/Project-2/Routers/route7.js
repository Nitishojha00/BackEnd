const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');//GET /users → Fetch all users

async function route7(req, res)
{
    const val = Number(req.params.id);
    console.log(val);
     const order = await Order.findOne({ id: val });
     res.status(200).send(order);
}

module.exports = route7;