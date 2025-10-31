const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');

async function route10(req, res) {
  const userId = Number(req.params.id); // use your custom 'id' field

  const order = await User.findOne({ id: userId });
  const deletedOrders = await Order.deleteMany({ id: userId, status: "Pending" });

  res.status(200).send("orders deleted successfully ✅");
}

module.exports = route10;
