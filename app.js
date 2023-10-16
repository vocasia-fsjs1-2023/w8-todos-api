const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers/index");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Routing API Todo App</h1>");
});

app.use(routers);

app.listen(port, () => {
  console.log(`Started server at on port ${port}`);
});