const express = require('express');
const bodyParser = require('body-parser');

const { Todos } = require('./models');
const TodosController = require('./controller/todosController');
const routers = require("./routers/index");

const app = express();
app.use(express.json());
const port = 3000;

app.use(routers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
