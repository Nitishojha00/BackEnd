// yaha data ayega
const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');//GET /users → Fetch all users

async function route3(req , res)
{
     const { id, name, email, address, age, item, quantity, price, status } = req.body;


     // 1️⃣ Check if user already exists
  let user = await User.findOne({ id });

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
    // 3️⃣ User doesn't exist → create new user + order
    const newUser = new User({
      id,
      name,
      email,
      address,
      age,
      numberOfOrders: 1,
      totalAmountSpent: price
    });

    await newUser.save();

    const newOrder = new Order({
      id: id,
      item,
      quantity,
      price,
      status
    });

    await newOrder.save();

    res.send("New user and first order created ✅");
}
}

module.exports = route3;