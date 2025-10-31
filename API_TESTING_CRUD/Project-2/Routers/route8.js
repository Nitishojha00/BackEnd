// POST /orders → Create a new order linked to a valid userId
// yaha data ayega
const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');//GET /users → Fetch all users

async function route8(req , res)
{
     const { item, quantity, price, status } = req.body;
     const id = Number(req.params.id);

     // 1️⃣ Check if user already exists
  let user = await User.findOne({ 'id':id });

  if (user) {
    // 2️⃣ User exists → create order + update totals
    const newOrder = new Order({
      id: user.id,
      item,
      quantity,
      price,
      status
    });

    await newOrder.save();

    // Update user totals
    user.numberOfOrders += 1;
    user.totalAmountSpent += price;
    await user.save();

    res.send("Existing user updated with new order ✅");
  } else {
    res.send("User Not Exist");
}
}

module.exports = route8;