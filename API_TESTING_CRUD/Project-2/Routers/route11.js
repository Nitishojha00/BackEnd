const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');

async function route11(req, res) {
  const id = Number(req.params.id);

  const orders = await Order.find({ 'id': id }); // or { id: id } if that's your design

  if (orders.length === 0) {
    return res.status(404).send(`No orders found for user ID ${id} ❌`);
  }

  res.status(200).send(orders);
}

module.exports = route11;
