const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Cash out ser is running");
});

app.listen(port, () => {
  console.log(`Easy Cash running on port ${port}`);
});
