const router = require("express").Router()
const todoRouter = require("./todos/index");

router.use('/todos', todoRouter);

module.exports = router;