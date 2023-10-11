const { Todo } = require("../models");

class Controller {
  static addTodo(req, res) {
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
      const Todos = await Todo.findAll();
      res.status(200).json(Todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getTodoByID(req, res) {
    const todoID = Number(req.params["id"]); //Set tipe data id dari String menjadi Number

    let response;
    try {
      const Todos = await Todo.findOne({
        where: {
          id: todoID,
        },
      });
      response = Todos;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async updateTodo(req, res) {
    const todoID = Number(req.params["id"]);
    const body = req.body;
    const { title, description } = body;

    let response;
    try {
      const Todos = await Todo.update(
        { title: title, description: description },
        {
          where: {
            id: todoID,
          },
        }
      );
      response = `${Todos} data berhasil diupdate, dengan ID: ${todoID}`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async updateTodoStatus(req, res) {
    const todoID = Number(req.params["id"]);
    const body = req.body;
    const { status } = body;

    let response;
    try {
      const Todos = await Todo.update(
        { status: status },
        {
          where: {
            id: todoID,
          },
        }
      );
      response = `${Todos} status berhasil diupdate, dengan ID: ${todoID}`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async deleteTodo(req, res) {
    const todoID = Number(req.params["id"]);

    let response;
    try {
      const Todos = await Todo.destroy({
        where: {
          id: todoID,
        },
      });
      response = `${Todos} data berhasil dihapus, dengan ID: ${todoID}`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }
}

module.exports = Controller;
