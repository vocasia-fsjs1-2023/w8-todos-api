const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const routers = require("./routers/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routers);

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
