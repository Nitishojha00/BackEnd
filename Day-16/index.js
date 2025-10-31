const express = require("express");
const app = express();
const main = require("./mongoose");
const user = require("./Models/user")

app.use(express.json());

app.get('/',(req,res)=>{
   res.send("Hello Home Page");
})

// GET ALL USERS
app.get('/info', async (req, res) => {
    const ans = await user.find({});
    res.send(ans);
});

// GET USER BY ID
app.get('/user/:id', async (req, res) => {
    const userData = await user.findById(req.params.id);
    res.send(userData);
});

// CREATE NEW USER
app.post('/user', async (req, res) => {
    const newUser = new user(req.body);
    await newUser.save();
    res.send("User created successfully");
});

// UPDATE USER BY ID
app.patch('/user/:id', async (req, res) => {
    await user.findByIdAndUpdate(req.params.id, req.body);
    res.send("User updated successfully");
});

// DELETE USER BY ID
app.delete('/user/:id', async (req, res) => {
    await user.findByIdAndDelete(req.params.id);
    res.send("User deleted successfully");
});

main()
.then(async () => {
    console.log("DB Connected");
    app.listen(4000, () => {
        console.log("Listening at port 4000");
    });
});