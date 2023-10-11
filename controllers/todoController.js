const { Todo } = require("../models");

class Controller {
  static addUser(req, res) {
    //request
    const body = req.body;
    const { title, description } = body;

    Todo.create({
      title,
      description,
    })
      //response
      .then((post) => {
        res.status(201).json(post);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static getTodosList(req, res) {
    Todo.findAll()
      .then((result) => {
        const listTodos = { todos: result };
        res.status(200).json(listTodos);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static async getTodoId(req, res) {
    let id = req.params.id;
    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo tidak ada" });
    }

    let response;
    try {
      const todos = await Todo.findAll({
        where: {
          id: id,
        },
      });
      response = todos;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async updateTodosList(req, res) {
    const body = req.body;
    let id = req.params.id;
    const { title, description, status } = body;
    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo tidak ada " });
    }

    let response;
    try {
      await Todo.update(
        {
          title,
          description,
          status,
        },
        {
          where: {
            id: id,
          },
        }
      );
      response = `Todo dengan ${id} berhasil diupdate`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async updateTodoStatus(req, res) {
    let id = req.params.id;
    const body = req.body;
    const { status } = body;

    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo tidak ada" });
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
      response = `Todo status dengan id ${id} berhasil diubah`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async deleteTodos(req, res) {
    let id = req.params.id;
    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo tidak berhasil ditemukan" });
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
