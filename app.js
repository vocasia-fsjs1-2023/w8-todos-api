const express = require("express");
const bodyParser = require("body-parser");

const {todos} = require("./models");

const app = express();
const UserController = require('./controller/userController');
const routes = require("./routes/index")
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(routes);
const port = 3000;

const ToDoList = [];

app.get("/", (req,res) => {
    res.send("Hello Word");
});

app.listen(port, () => {
    console.log(`Example app listening on por ${port}`);
});