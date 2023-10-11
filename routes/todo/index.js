const router= require("express").Router();
const TodoController= require("../../controller/todoController");

router.post('/', TodoController.addTodo);
router.get('/', TodoController.getTodo);
router.get('/:id', TodoController.getId_Todo);
router.put('/:id', TodoController.updateTodo);
router.patch('/:id', TodoController.updateStatusTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports=router;