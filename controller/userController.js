const { Todo } = require("../models");

class Controller {
  static async createTodo(req, res) {
    const body = req.body;
    const { title, description, status } = body;

    Todo.create({
      title,
      description,
      status,
    })
      .then((todo) => {
        res.status(201).json(todo);
      })
      .catch((error) => {
        res.status(500).json(error);
        console.log(error);
      });  
  }

  static async getTodo(req, res) {
    try {
      const todos = await Todo.findAll();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getTodoId(req, res) {
    let id = req.params.id;
    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo not found" });
    }

    let response;
    try {
      const todo = await Todo.findByPk(id);
      response = todo;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async updateTodoStatus(req, res) {
    const todoId = Number(req.params.id);
    let result;

    try {
      const todos = await Todo.findOne({
        where: {
          id: todoId,
        },
      });
      result = todos;
    } catch (error) {
      console.log(error);
      result = JSON.stringify(error);
    }
    res.status(200).json(result);
  }

  static async updateTodoStatusById(req, res) {
    let id = req.params.id;
    const body = req.body;
    const { status } = body;
  
    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo not found" });
    }
  
    let response;
    try {
      await Todo.update(
        {
          status,
        },
        {
          where: {
            id: id,
          },
        }
      );
      response = `Todo dengan id ${id} berhasil diubah`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
  
    res.status(200).json(response);
  }

  static async deleteTodoById(req, res) {
    let id = req.params.id;
  const findId = await Todo.findByPk(id);
  if (!findId) {
    return res.status(404).json({ message: "Todo not found" });
  }
  await Todo.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).json(`Todo dengan id ${id} berhasil dihapus`);
  }
}

module.exports = Controller;
