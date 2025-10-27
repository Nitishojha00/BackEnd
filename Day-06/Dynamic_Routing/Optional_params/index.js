// ✅ 2. ? (Optional Parameter)

// ? makes a route parameter optional.

// The route works with or without that part of the URL.

// Example:

app.get("/product/:name?", (req, res) => {
  res.send(req.params.name ? `Product: ${req.params.name}` : "All Products");
});
