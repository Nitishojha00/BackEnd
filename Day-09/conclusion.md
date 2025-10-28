# Error Handling in Middlewares
# 3 ways to use middlewares in our code

🔸 1️⃣ Global Middleware (app.use)
✅ Syntax:
app.use(middlewareFunction);

✅ Example:
app.use((req, res, next) => {
  console.log("This middleware runs for every request!");
  next(); // aage next route handler ko control de diya
});

🧠 Explanation:

Ye middleware poore application ke sabhi routes ke liye chalta hai.

Har incoming request ke liye ye automatically execute hota hai.

next() call karne par request next route par chali jati hai.

Use case: logging, authentication check, request timing, etc.

🔸 2️⃣ Route-Specific Middleware ( ‘link’, middleware, (req,res) )
✅ Syntax:
app.get('/path', middlewareFunction, (req, res) => {
  // final response
});

✅ Example:
function checkAuth(req, res, next) {
  console.log("User Authentication Checked!");
  next(); // allow next function to run
}

app.get('/user', checkAuth, (req, res) => {
  res.send("Welcome, Authorized User!");
});

🧠 Explanation:

Ye middleware sirf us route ke liye chalega jahan likha gaya hai.

Agar multiple routes hain to har route ke liye alag middleware use kar sakte hain.

next() ka use karke control final response tak pahunchta hai.

Use case: route-specific validation, permission checks, etc.

🔸 3️⃣ Simple / Reusable Middleware Function
✅ Syntax:
function middlewareName(req, res, next) {
  // code logic
  next();
}

app.get('/route', middlewareName, (req, res) => {
  res.send("Response with simple middleware!");
});

✅ Example:
function logger(req, res, next) {
  console.log(`Request received at: ${new Date()}`);
  next();
}

app.get('/home', logger, (req, res) => {
  res.send("Home Page Loaded!");
});

app.get('/about', logger, (req, res) => {
  res.send("About Page Loaded!");
});

🧠 Explanation:

Ye ek simple function hota hai jise hum multiple routes me reuse kar sakte hain.

Function me next() call zaroor karna hota hai warna request ruk jayegi.

Common kaam jaise logging, header setup, user tracking ke liye useful hai.





| Range   | Meaning      | Example             |
| ------- | ------------ | ------------------- |
| **200** | OK           | Success             |
| **201** | Created      | POST new data       |
| **400** | Bad Request  | Wrong Input         |
| **401** | Unauthorized | Token/Login Missing |
| **403** | Forbidden    | Access Denied       |
| **404** | Not Found    | Invalid Route       |
| **500** | Server Error | Code crash          |


200 → OK  
201 → Created  
204 → No Content  
400 → Bad Request  
401 → Unauthorized  
403 → Forbidden  
404 → Not Found  
409 → Conflict  
500 → Internal Server Error  
503 → Service Unavailable
