const router = require("express").Router();
const userRouter = require("./todos/index");

router.use("/todos", userRouter);

module.exports = router;
