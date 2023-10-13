const { Todos } = require("../models");

class Controller {
    static addTodos(req, res) {
        const { title, description } = req.body;
        Todos.create({
            title,
            description,
            status: "created" 
        }).then((todos) => {
            res.status(201).json(todos);
        }).catch((error) => {
            res.status(500).json(error);
        });
      }

    static getTodos(req, res) {
        Todos.findAll()
        .then(result => {
          res.status(200).json(result);
        })
        .catch(error => {
          res.status(500).json({ error: "Internal Server Error" });
        });
    }

    static async getTodosId(req, res) {
        const id= Number(req.params['id']);
        Todos.findAll({
            where: {
              id: id,
            },
          })
            .then(result => {
              res.status(200).json(result);
            })
            .catch(error => {
              res.status(500).json({ error: "Internal Server Error" });
            });
    }

    static async updateTodos(req, res) {
        const id = Number(req.params.id);
        const { title, description, status } = req.body;
      
        const findId = await Todos.findByPk(id);
              if (!findId) {
                  return res.status(404).json({ message: "Todo tidak ditemukan" });
              }
              let response;
              try {
                  await Todos.update({ 
                      title,
                      description,
                      status
                  }, {
                      where: {
                          id: id
                      }
                  });
                  response = `Todo dengan id ${id} berhasil diupdate`;
              } catch (error) {
                  console.log(error);
                  response = JSON.stringify(error);
              }
              res.status(200).json(response);
    }

    static async patchTodos(req, res) {
        const id = Number(req.params['id']);
        const { status } = req.body;
    
        try {
            const [updatedRows] = await Todos.update({ status }, { where: { id } });
            
            if (updatedRows > 0) {
                const updatedTodo = await Todos.findByPk(id);
                res.status(200).json(updatedTodo);
            } else {
                res.sendStatus(404);
            }
        } catch (error) {
            res.sendStatus(500);
        }
    }

    static async deleteTodos(req, res) {
        const id = Number(req.params["id"]);
      
        await Todos.destroy({
          where: {
              id: id,
          },
        });
        res.status(200).json({ message: `Todo dengan id ${id} berhasil dihapus` });
      }
}

module.exports = Controller;
