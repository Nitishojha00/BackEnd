const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');

async function route5(req, res) {
  const userId = Number(req.params.id); // use your custom 'id' field

  const user = await User.findOne({ id: userId });
  if (!user) return res.status(404).send("User not found ❌");

  const deletedUser = await User.findOneAndDelete({ id: userId });
  const deletedOrders = await Order.deleteMany({ id: userId });

  res.status(200).send({
    message: `User and ${deletedOrders.deletedCount} orders deleted successfully ✅`,
    deletedUser
  });
}

module.exports = route5;
