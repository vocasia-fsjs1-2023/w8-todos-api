const dealerController = require("../../controller/dealerController");
const router = require("express").Router();

router.get("/", dealerController.getDealer);
router.post("/", dealerController.addDealer);
router.get("/:id", dealerController.getById);
router.put("/:id", dealerController.updateData);
router.patch("/:id", dealerController.updateStatus);
router.delete("/:id", dealerController.deleteData);

module.exports = router;
