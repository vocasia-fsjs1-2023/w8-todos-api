const TodoController = require("../../controllers/todoController");
const router = require("express").Router();

// POST/todos
router.post("/", TodoController.postTodo);

// GET/todos
router.get("/", TodoController.getTodo);

// GET/todos/:id
router.get("/:id", TodoController.getTodoid);

// PUT/todos/:id
router.put("/:id", TodoController.putTodoid);

// PATCH/todos/:id
router.patch("/:id", TodoController.patchTodoid);

// DELETE/todos/:id
router.delete("/:id", TodoController.deleteTodoid);

module.exports = router;