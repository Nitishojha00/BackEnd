const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');

async function route9(req, res) {
  const info = req.body;
  const orderId = Number(req.params.id);

  // 1️⃣ Find the order first
  const order = await Order.findOne({ id: orderId });
  if (!order) return res.status(404).send("Order not found ❌");

  // 2️⃣ Find the user linked to this order
  const user = await User.findOne({ id: order.id});
//   if (!user) return res.status(404).send("User not found for this order ❌");

  // 3️⃣ Allow updates only if not Delivered
  if (order.status === "Delivered") {
    return res.status(400).send("Delivered orders cannot be updated 🚫");
  }

  // 4️⃣ Update allowed fields
  if (info.item && order.item !== info.item) order.item = info.item;
  if (info.quantity && order.quantity !== info.quantity) order.quantity = info.quantity;

  // Update price and adjust user's total spent
  if (info.price && order.price !== info.price) {
    user.totalAmountSpent += info.price - order.price; // adjust difference
    order.price = info.price;
  }

  if (info.status && order.status !== info.status) order.status = info.status;

  // 5️⃣ Save both
  await order.save();
  await user.save();

  res.status(200).send({
    message: "Order updated successfully ✅",
    updatedOrder: order
  });
}

module.exports = route9;
