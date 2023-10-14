const { Todo } = require("../models");

class Controller {
  static postTodo(req, res) {
    const body = req.body;
    const { title, description } = body;

    Todo.create({
      title,
      description,
    })
      .then((todo) => {
        res.status(201).json(todo);
      })
      .catch((error) => {
        res.status(500).json(error);
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

  static async getTodoid(req, res) {
    const id = Number(req.params["id"]); 

    let response;
    try {
      const Todos = await Todo.findOne({
        where: {
          id: id,
        },
      });
      response = Todos;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async putTodoid(req, res) {
    const id = Number(req.params["id"]);
    const body = req.body;
    const { title, description } = body;

    let response;
    try {
      await Todo.update(
        { title: title, description: description },
        {
          where: {
            id: id,
          },
        }
      );
      response = `Todos dengan id ${id} berhasil diedit`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async patchTodoid(req, res) {
    const id = Number(req.params["id"]);
    const body = req.body;
    const { status } = body;

    let response;
    try {
      await Todo.update(
        { status: status },
        {
          where: {
            id: id,
          },
        }
      );
      response = `Status pada Todos dengan id ${id} berhasil diubah`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async deleteTodoid(req, res) {
    const id = Number(req.params["id"]);
    const findId = await Todo.findByPk(id);
    
    if (!findId ) {
      return res.status(404).json({ message: `Todo dengan id ${id} tidak ditemukan`});
    }
    await Todo.destroy({
      where: {
        id: id,
      }
    });
    res.status(200).json(`Todo dengan id ${id} berhasil dihapus`);
  }
}

module.exports = Controller;