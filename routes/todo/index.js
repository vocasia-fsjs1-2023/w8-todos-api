const Todo = require("../../controllers/controllers");
const route = require("express").Router()

route.post("", Todo.addTodo);
route.get("", Todo.getTodo);
route.get("/:id", Todo.getTodobyID);
route.put("/:id", Todo.updateTodo);
route.patch("/:id", Todo.updateStatus);
route.delete("/:id", Todo.deleteTodo);

module.exports=route;