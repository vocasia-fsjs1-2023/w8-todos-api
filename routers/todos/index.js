const userController = require("../../controllers/todoController");
const router = require("express").Router();

router.post("/", userController.addUser);
router.get("/", userController.getTodosList);
router.get("/:id", userController.getTodoId);
router.put("/:id", userController.updateTodosList);
router.patch("/:id", userController.updateTodoStatus);
router.delete("/:id", userController.deleteTodos);

module.exports = router;
