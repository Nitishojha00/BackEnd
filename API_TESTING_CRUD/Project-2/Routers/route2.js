const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');//GET /users → Fetch all users

async function route2(req, res)
{
     const user = await User.findOne({ id: Number(req.params.id) });
     res.status(200).send(user);
}

module.exports = route2;