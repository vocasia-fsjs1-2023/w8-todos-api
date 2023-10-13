const router = require("express").Router();
const todosRouter = require("./Todos/index");

router.use('/todos', todosRouter);

module.exports = router;