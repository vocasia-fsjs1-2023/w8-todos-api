const DealerController = require("../../controllers/DealerController");
const router = require("express").Router();

router.get("/", DealerController.getDealer);
router.post("/", DealerController.addDealer);
router.get("/:id", DealerController.getById);
router.put("/:id", DealerController.updateData);
router.patch("/:id", DealerController.updateStatus);
router.delete("/:id", DealerController.deleteData);

module.exports = router;
