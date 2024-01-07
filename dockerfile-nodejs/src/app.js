const express = require("express");
const path = require("path");

const app = express();

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
