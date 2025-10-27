// ✅ 1. :param (Route Parameter)

// : is used to define a dynamic route placeholder.

// It captures the value from the URL as req.params.

// Example:

app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});