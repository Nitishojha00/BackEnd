const express = require('express');
const app = express();
const middleware = require('./Middlewares/middleware')
const main = require('./db');
const User = require('./Models/user');
const Order = require('./Models/order');
const {route1 , route2 , route3, route4, route5 , route6 , route7 , route8 , route9 , route10 , route11} = require('./Routers');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Its a Home Page Baby 😂");
});

app.get('/users',middleware,route1);
app.get('/users/:id',middleware,route2);
app.post('/users/register',middleware,route3);
app.put('/users/:id',middleware,route4);
app.delete('/users/:id',middleware,route5);

app.get('/orders', route6)
app.get('/orders/:id', route7)
app.post('/orders/:id', route8)
app.put('/orders/:id', route9)
app.delete('/orders/:id',route10)
app.get('/orders/user/:id', route11);

main()
.then(async () => {
    console.log("DB Connected");
    app.listen(4000, () => {
        console.log("Listening at port 4000");
    });
});