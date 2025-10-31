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

GET /menus/restaurant/:restaurantId → Get all menu items for a specific restaurant

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


🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

🧍‍♂️ PROJECT 2 — USER & ORDER MANAGEMENT SYSTEM
🎯 Objective:

Develop a two-module API for users and their orders with linked data, summaries, and advanced CRUD testing.

🧩 MODULE 1 — USERS

Endpoints:

GET /users → Fetch all users

GET /users/:id → Fetch user by ID

POST /users/register → Register a new user

PUT /users/:id → Update user details

DELETE /users/:id → Delete a user and all their orders

🧩 MODULE 2 — ORDERS

Endpoints:

GET /orders → Fetch all orders

GET /orders/:id → Fetch one order by ID

POST /orders → Create a new order linked to a valid userId

PUT /orders/:id → Update order details (item, quantity, status)

DELETE /orders/:id → Delete an order

GET /orders/user/:userId → Fetch all orders placed by a specific user

🧠 ADVANCED REQUIREMENTS

Prevent order creation with invalid userId.

When a user is deleted, all their orders must also be deleted.

Add an endpoint /users/:id/summary that returns:

total number of orders

total amount spent

Add query-based filter for /orders?status=Delivered.

Create a middleware that logs request method and time for every request.

🧪 POSTMAN TESTING REQUIREMENTS

Register multiple users using POST.

Create multiple orders for different users.

Fetch orders by userId.

Update order status and verify via GET.

Delete one user and confirm all their orders are also deleted.

Test query-based filtering of orders by status.

Confirm middleware logs details on each request.

⚡ FINAL OUTCOME

By completing these three projects, you will demonstrate:

Strong understanding of Express.js CRUD design

Ability to handle multi-module APIs

Proper use of query params, validation, and linked data

Proficiency in Postman API testing

