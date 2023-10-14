const router = require("express").Router();
const userRouter = require("./user/index");

router.use('/todos', userRouter);
module.exports = router;