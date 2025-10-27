// 4. * (Wildcard — Match Anything)

    // * matches any number of characters.

    // Used as a wildcard route.

    // Example:

app.get("/file/*", (req, res) => {
  res.send("Wildcard: matches any file path");
});


// Matches: /file/a, /file/a/b/c, /file/images/photo