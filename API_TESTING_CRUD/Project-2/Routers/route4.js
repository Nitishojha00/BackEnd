const main = require('./../db');
const User = require('./../Models/user');
const Order = require('./../Models/order');//GET /users → Fetch all users

async function route4(req, res)
{
     const info = req.body;
     const user = await User.findOne({ id: Number(req.params.id) });
     const order = await User.findOne({ id: Number(req.params.id) });
     if (!order) return res.status(404).send("Order not found ❌");
     if (!user) return res.status(404).send("User not found ❌");
     else
        {
            if(info.name && user.name !== info.name)
            {
                user.name = info.name;
            }
            if(info.email && user.email !== info.email)
            {
                user.email = info.email;
            }
            if(info.address && user.address !== info.address)
            {
                user.address = info.address;
            }
            if(info.age && user.age!==info.age)
            {
                user.age = info.age
            }
            if(info.item && order.status!=="Delivered" && order.item !== info.item)
            {
                order.item = info.item;
            }
            if(info.quantity && order.status!=="Delivered" && order.quantity !== info.quantity)
            {
                order.quantity = info.quantity;
            }
            if(info.price && order.status!=="Delivered" && order.price !== info.price)
            {
                order.price = info.price;
                user.totalAmountSpent += info.price - order.price;
            }
            if(info.status && order.status!=="Delivered" && order.status !== info.status)
            {
                order.status = info.status;
            }
            await user.save();
            await order.save()
        }
     res.status(200).send("Successfully updated");
}

module.exports = route4;