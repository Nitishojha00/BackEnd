const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');//GET /users → Fetch all users

async function route1(req, res)
{
     const users = await User.find();
     res.status(200).send(users);
}

module.exports = route1;