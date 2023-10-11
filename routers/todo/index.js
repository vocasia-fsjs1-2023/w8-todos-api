const TodoController = require("../../controllers/todoController");
const router = require("express").Router();

//POST Create Todos
router.post("/", TodoController.addTodo);

//GET Todos List
router.get("/", TodoController.getTodo);

// GET Todo List By ID
router.get("/:id", TodoController.getTodoByID);

//Put Todos Update Data
router.put("/:id", TodoController.updateTodo);

//Patch Todos Update Status
router.patch("/:id", TodoController.updateTodoStatus);

//Delete Todos By ID
router.delete("/:id", TodoController.deleteTodo);

module.exports = router;
