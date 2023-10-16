const router = require("express").Router()
const todoRouter = require("./todo/index");

router.use('/todo', todoRouter);

module.exports = router;