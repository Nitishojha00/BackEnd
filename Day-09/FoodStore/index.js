import express from "express";
import middleware from "./middleware.js"; // ✅ default import

const app = express();
app.use(express.json());

let FoodMenu = [
  {id: 1, food: "Chowmein", category: "veg", price: "100"},
  {id: 2, food: "Fried Rice", category: "veg", price: "120"},
  {id: 3, food: "Paneer Butter Masala", category: "veg", price: "180"},
  {id: 4, food: "Dal Makhani", category: "veg", price: "150"},
  {id: 5, food: "Aloo Paratha", category: "veg", price: "80"},
  {id: 6, food: "Veg Biryani", category: "veg", price: "160"},
  {id: 7, food: "Manchurian", category: "veg", price: "130"},
  {id: 8, food: "Spring Roll", category: "veg", price: "90"},
  {id: 9, food: "Masala Dosa", category: "veg", price: "110"},
  {id: 10, food: "Pav Bhaji", category: "veg", price: "100"},
  {id: 11, food: "Chicken Biryani", category: "non-veg", price: "200"},
  {id: 12, food: "Egg Curry", category: "non-veg", price: "150"},
  {id: 13, food: "Butter Chicken", category: "non-veg", price: "220"},
  {id: 14, food: "Fish Fry", category: "non-veg", price: "240"},
  {id: 15, food: "Chicken Momos", category: "non-veg", price: "120"},
  {id: 16, food: "Mutton Curry", category: "non-veg", price: "260"},
  {id: 17, food: "Tandoori Chicken", category: "non-veg", price: "250"},
  {id: 18, food: "Chicken Kebab", category: "non-veg", price: "200"},
  {id: 19, food: "Veg Momos", category: "veg", price: "100"},
  {id: 20, food: "Paneer Tikka", category: "veg", price: "180"}
];

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/Food", middleware, (req, res) => {
  res.status(200).send(FoodMenu);
});

app.post("/addFood", middleware, (req, res) => {
  const food = req.body;
  FoodMenu.push(food);
  res.status(200).send("Food added successfully");
});

app.patch("/updateMenu", middleware, (req, res) => {
  const id = req.body.id;
  let item = FoodMenu.find(item => item.id === id);
  if (!item) return res.status(404).send("Food not found");

  if (req.body.food) item.food = req.body.food;
  if (req.body.category) item.category = req.body.category;
  if (req.body.price) item.price = req.body.price;

  res.status(200).send("Food updated successfully");
});

app.delete("/removeMenu", middleware, (req, res) => {
  const id = Number(req.query.id);
  let index = FoodMenu.findIndex(item => item.id === id);
  
  if (index !== -1) {
    FoodMenu.splice(index, 1);
    res.status(200).send("Food removed successfully");
  } else {
    res.status(404).send("Food not found in Menu");
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
