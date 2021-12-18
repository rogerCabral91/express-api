const port = 3003;

const express = require("express");
const app = express();
const database = require("./dataBase");

app.get("/products", (req, res, next) => {
  res.send(database.getProducts());
});

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
