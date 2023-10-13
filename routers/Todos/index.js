const TodosController = require("../../controller/todosController")
const router = require("express").Router()

router.post('/', TodosController.addTodos);
router.get('/', TodosController.getTodos);
router.get("/:id", TodosController.getTodosId);
router.put("/:id", TodosController.updateTodos);
router.patch("/:id", TodosController.patchTodos);
router.delete("/:id", TodosController.deleteTodos);

module.exports = router;