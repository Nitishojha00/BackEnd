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