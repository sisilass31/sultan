const express = require("express");
const app = express();
const port = 3000;

// Route par défaut
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Écoute sur le port spécifié
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
