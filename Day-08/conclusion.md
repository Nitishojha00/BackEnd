# <-- Middlewares  -->  -> kuch hai nhi ek fuction hai bs ye samjhlo

# server 1 request -> only 1 respond by server ✅
                quest 1  ->      What if server respond multiple time ?
                ans ->       Bhai jbbhi user request krta hai kuch server se to
                             ek socket banta and wo 1 br respond server krna ke bad ht jata agar 
                             ekse jada respond hua to error dene lagega

                example -> app.use('/user',(req,res,next)=>{
                      res.send("Hello");
                      next();
                      console.log("niche wala middleware chalna ke bad ye chalega");
                },(req,res)=>{
                    res.send("Nhi chalega Error Dega")
                });


                quest 2 -> If request krna ka bad bhi agar server kuch repond nhi kiya to ?
                ans -> to kuch der socket connection bana rahega fir htjayega


🔹 Middlewares in Express.js
👉 Simple Definition:

Socket = IP Address + Port Number

Middleware ek function hota hai jo request (req) aur response (res) ke beech me kaam karta hai.
Server me request aane ke baad, middleware use process karta hai aur decide karta hai ki:

aage next function ko control dena hai (next()),

ya respond bhejna hai (res.send()).

🔹 Server Request-Response Rule

⚙️ “For every client request → there must be exactly one server response.”

Jab bhi koi user (client) server se kuch maangta hai (request send karta hai), ek socket connection banta hai.
Server jab ek response send kar deta hai, to wo socket connection band ho jata hai.

🧩 Question 1:
❓ What if server responds multiple times?
✅ Answer:

Agar server ek request ke liye multiple responses bhejne ki koshish karega to error aayega,
kyunki connection ek hi response ke baad close ho jata hai.

⚡ Example:
app.use('/user', (req, res, next) => {
    res.send("Hello");
    next();  // ye call karne ke baad niche ka middleware bhi chalega
    console.log("niche wala middleware chalna ke bad ye chalega");
}, (req, res) => {
    res.send("Nhi chalega Error Dega");  // ❌ ERROR: Can't set headers after they are sent
});

🧠 Explanation:

res.send("Hello") → server ne respond kar diya (connection close ho gaya)

next() call hone ke baad next middleware run hoga,
lekin agar wo bhi res.send() karega to error aayega:
“Error: Can't set headers after they are sent to the client”

🧩 Question 2:
❓ What if server never responds to the request?
✅ Answer:

Agar request ke baad server ne kuch respond nahi kiya,
to client ka socket connection kuch time tak open rahega (waiting for response).
Uske baad timeout hone par wo automatically close ho jayega.

⚡ Example:
app.get('/wait', (req, res) => {
    // No response given
    // Client waits for some time, then socket closes automatically
});

🔸 Summary Points

Middleware = ek function jo req/res ke beech me hota hai.

Ek request = ek hi response (multiple response ❌).

Agar response nahi bheja gaya to socket thodi der baad expire ho jata hai.

next() → control ko next middleware me bhejta hai.

res.send() → response bhejta hai aur connection close karta hai.

Chahe ise short me likhna ho to aise likh sakta hai:

Middleware ek function hai jo req aur res ke beech me work karta hai. Ek request ke liye ek hi response allowed hai. Agar multiple response diye to error aayega. Agar response hi nahi diya to socket kuch der tak wait karega aur fir close ho jayega.