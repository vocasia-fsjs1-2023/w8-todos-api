const TodoController = require("../../controllers/todoController");
const router = require("express").Router()

router.post("/", TodoController.addTodo);
router.get("/", TodoController.getTodo);
router.get("/:id", TodoController.getTodobyID);
router.put("/:id", TodoController.updateTodo);
router.patch("/:id", TodoController.updateStatus);
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;