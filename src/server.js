const port = 3003;

const express = require("express");
const app = express();

app.get("/products", (req, res, next) => {
  res.send({ nome: "MacBook Air M1", preco: 12999.0 });
});

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
