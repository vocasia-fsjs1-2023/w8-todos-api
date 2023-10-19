const router = require("express").Router();
const dealerRouter = require("./dealer/index");

router.use("/todos", dealerRouter);

module.exports = router;
