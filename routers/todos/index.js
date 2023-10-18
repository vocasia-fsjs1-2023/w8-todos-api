const controller = require("../../controllers/controller");
const router = require("express").Router();

router.post("/", controller.add);
router.get("/", controller.readData);
router.get("/:id", controller.read);
router.put("/:id", controller.input);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;