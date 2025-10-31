🔥 PROJECT 1 —  RESTAURANT MANAGEMENT SYSTEM
🎯 Objective:

Build an Express.js API to manage restaurants and their menus with full CRUD operations and linked data handling.

🧩 MODULE 1 — RESTAURANTS

Implement the following endpoints:

GET /restaurants → Fetch all restaurants

GET /restaurants/:id → Fetch one restaurant by ID

POST /restaurants → Add a new restaurant

PUT /restaurants/:id → Update restaurant details

DELETE /restaurants/:id → Delete a restaurant

🧩 MODULE 2 — MENUS

Implement the following endpoints:

GET /menus → Fetch all menu items

GET /menus/:id → Fetch one menu item by ID

POST /menus → Add a new menu item (linked with a restaurant by restaurantId)

PUT /menus/:id → Update menu item details (price, availability, etc.)

DELETE /menus/:id → Delete a menu item

GET /menus/restaurant/:restaurantId → Get all menu items for a specific restaurant 🔥🔥🔥🔥🔥🔥 ye rhi tgdi chij

🧠 ADVANCED REQUIREMENTS

Prevent adding a menu item for a non-existing restaurant.

When a restaurant is deleted, delete all its menu items.

Add an endpoint /restaurants/:id/summary that returns:

total number of menu items for that restaurant

average price of all dishes

Add query-based filters:

/menus?category=Starter → return menu items of given category

/restaurants/search?location=Delhi → return all restaurants in that city

🧪 POSTMAN TESTING REQUIREMENTS

Add multiple restaurants and menus using POST requests.

Verify restaurant–menu linking works correctly.

Update a menu item and check updated data using GET.

Delete a restaurant and confirm its menus are also deleted.

Test query-based search and filter endpoints.

Test invalid cases (e.g., wrong restaurantId).


[
  {
    "name": "Spice Villa",
    "rating": 4.5,
    "location": "Gomti Nagar, Lucknow",
    "menuName": "Paneer Butter Masala",
    "price": 250,
    "category": "North Indian"
  },
  {
    "name": "Ocean Grill",
    "rating": 4.3,
    "location": "Marine Drive, Mumbai",
    "menuName": "Grilled Fish with Lemon Butter Sauce",
    "price": 450,
    "category": "Seafood"
  },
  {
    "name": "Pizza Town",
    "rating": 4.0,
    "location": "Connaught Place, Delhi",
    "menuName": "Farmhouse Pizza",
    "price": 350,
    "category": "Italian"
  },
  {
    "name": "Taste of China",
    "rating": 4.2,
    "location": "Banjara Hills, Hyderabad",
    "menuName": "Hakka Noodles",
    "price": 220,
    "category": "Chinese"
  },
  {
    "name": "The Burger Hub",
    "rating": 4.1,
    "location": "Sector 18, Noida",
    "menuName": "Cheese Burst Burger",
    "price": 180,
    "category": "Fast Food"
  }
]
