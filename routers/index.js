const router = require("express").Router();
const todoRouter = require("./todo/index");

router.use("/todos", todoRouter);

module.exports = router;
