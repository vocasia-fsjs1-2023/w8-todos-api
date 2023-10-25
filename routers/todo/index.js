const UserController = require("../../controller/userController");
const router = require("express").Router()

router.post("/", UserController.createTodo);
router.get("/", UserController.getTodo);
router.get("/:id", UserController.getTodoId);
router.put("/:id", UserController.updateTodoStatus);
router.patch("/:id", UserController.updateTodoStatusById);
router.delete("/:id", UserController.deleteTodoById);



module.exports = router;

