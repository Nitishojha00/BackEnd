import express from "express";
import middleware from "./middleware.js";

const app = express();
app.use(express.json());

// Using Map for O(1) lookup
const FoodMenu = new Map([
  [1, { id: 1, food: "Chowmein", category: "veg", price: "100" }],
  [2, { id: 2, food: "Fried Rice", category: "veg", price: "120" }],
  [3, { id: 3, food: "Paneer Butter Masala", category: "veg", price: "180" }],
  [4, { id: 4, food: "Dal Makhani", category: "veg", price: "150" }],
  [5, { id: 5, food: "Aloo Paratha", category: "veg", price: "80" }],
  [6, { id: 6, food: "Veg Biryani", category: "veg", price: "160" }],
  [7, { id: 7, food: "Manchurian", category: "veg", price: "130" }],
  [8, { id: 8, food: "Spring Roll", category: "veg", price: "90" }],
  [9, { id: 9, food: "Masala Dosa", category: "veg", price: "110" }],
  [10, { id: 10, food: "Pav Bhaji", category: "veg", price: "100" }],
  [11, { id: 11, food: "Chicken Biryani", category: "non-veg", price: "200" }],
  [12, { id: 12, food: "Egg Curry", category: "non-veg", price: "150" }],
  [13, { id: 13, food: "Butter Chicken", category: "non-veg", price: "220" }],
  [14, { id: 14, food: "Fish Fry", category: "non-veg", price: "240" }],
  [15, { id: 15, food: "Chicken Momos", category: "non-veg", price: "120" }],
  [16, { id: 16, food: "Mutton Curry", category: "non-veg", price: "260" }],
  [17, { id: 17, food: "Tandoori Chicken", category: "non-veg", price: "250" }],
  [18, { id: 18, food: "Chicken Kebab", category: "non-veg", price: "200" }],
  [19, { id: 19, food: "Veg Momos", category: "veg", price: "100" }],
  [20, { id: 20, food: "Paneer Tikka", category: "veg", price: "180" }],
]);

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Get all food
app.get("/Food", middleware, (req, res) => {
  res.status(200).json(Array.from(FoodMenu.values()));
});

// Add food
app.post("/addFood", middleware, (req, res) => {
  const food = req.body;
  FoodMenu.set(food.id, food);
  res.status(200).send("Food added successfully");
});

// Update food
app.patch("/updateMenu", middleware, (req, res) => {
  const id = req.body.id;
  const item = FoodMenu.get(id);
  if (!item) return res.status(404).send("Food not found");

  // Update only provided fields
  if (req.body.food) item.food = req.body.food;
  if (req.body.category) item.category = req.body.category;
  if (req.body.price) item.price = req.body.price;

  FoodMenu.set(id, item); // re-save updated item
  res.status(200).send("Food updated successfully");
});

// Remove food
app.delete("/removeMenu/:id", middleware, (req, res) => {
  const id = Number(req.params.id);
  if (FoodMenu.has(id)) {
    FoodMenu.delete(id);
    res.status(200).send("Food removed successfully");
  } else {
    res.status(404).send("Food not found in Menu");
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));
