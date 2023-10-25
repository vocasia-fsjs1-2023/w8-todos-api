const express = require("express");
const bodyParser = require("body-parser");
const { Todo } = require("./models");

const UserController = require("./controller/userController");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;

const todoRouter = require("./routers/todo/index");
app.use(todoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


