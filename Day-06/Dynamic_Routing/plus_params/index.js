// 3. + (One or More Characters)

// + allows one or more occurrences of the previous character in the URL.

// Example: /ab+cd will match: abcd, abbcd, abbbcd, etc.

// Example:

app.get("/ab+cd", (req, res) => {
  res.send("Route matched: /ab+cd");
});