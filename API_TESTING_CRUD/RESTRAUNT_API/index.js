const express = require("express");
const app = express();
const menu = require("./Models/menu");
const restraunt = require("./Models/restraunt");
const main = require("./db");

app.use(express.json());

app.get('/',(req,res)=>{
   res.send("Home Page");
})

let id = 1;
app.post('/restraunt',async(req,res)=>{
         const  {name, rating ,location, menuName , price , category } = req.body;
         console.log(name);
         const r = new restraunt({id,name,rating,location});
         const m = new menu({id, menuName, price , category});
         id++;
         await r.save();
         await m.save();
         res.status(201).send("successfully added");
})


app.get('/restraunt',async(req,res)=>{
          const restro = await restraunt.find({});
          console.log("successfull");
          res.status(200).send(restro);
})


app.get('/restraunt/:id',async(req,res)=>{
          const id = Number(req.params.id);
          const restro = await restraunt.findOne({ id: id });  // good practice ram m nhi ati chije
          console.log("successfull");
          res.status(200).send(restro);
})

app.put('/restraunt/:id',async(req,res)=>{
          const info = req.body;
          const id = Number(req.params.id);
          const restro = await restraunt.findOne({ id: id });
          const menuu = await menu.findOne({ id: id });
          console.log(menuu);
          if(info.name)
            restro.name = info.name;
          if(info.rating)
            restro.rating = info.rating;
          if(info.location)
             restro.location = info.location;
          if(info.menuName)
             menuu.menuName = info.menuName;
          if(info.price)
            menuu.price = info.price;
          if(info.category)
            menuu.category = info.category;
        
         await restro.save();
         await menuu.save();
          console.log("successfull");
          res.status(200).send(restro);
});

//GET /menus → Fetch all menu items
app.get("/menus",async(req,res)=>{
     const val = await menu.find({});
     res.status(200).send(val);
})

// app.get()
app.get("/menus/:id",async(req,res)=>{
    const id = req.params.id;
     const val = await menu.find({id:id});
     res.status(200).send(val);
})

// app.post()

app.post("/menus/:id",async(req,res)=>{
    const id = Number(req.params.id);
    const obj = await menu.findOne({ id: id });
    //  console.log(obj);
    obj.menuName.push(req.body.menuName);
     await obj.save();
     res.status(200).send("Successfully");
})


app.put("/menus/:id",async(req,res)=>{
    const id = Number(req.params.id);
    const obj = await menu.findOne({ id: id });
    //  console.log(obj);
     obj.price = req.body.price;
     await obj.save();
     res.send("price set successfully");
})


main()
.then(async () => {
    console.log("DB Connected");
    app.listen(4000, () => {
        console.log("Listening at port 4000");
    });
});