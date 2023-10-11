const { todo } = require("../models");

class Controller {
    static addTodo(req, res) {
        const { title, description} = req.body;
        const status = req.body.status || "created";
        todo.create({
            status,
            title,
            description,
        }).then((data) => {
            res.status(201).json(data);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static async getTodo(req, res) {
        try {
            const todos = await todo.findAll(); 
            res.status(200).json({todos});
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data todo' });
          }
    }

    static async getId_Todo(req, res) {
        try{
        let id = Number(req.params.id);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Todo dengan id: ${id} tidak ditemukan` });
        }
        res.status(200).json(findId);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data todo' });
        }
    }

    static async updateTodo(req, res) {
        const { title, description, status } = req.body;
        let id = Number(req.params.id);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Todo dengan id: ${id} tidak ditemukan` });
        }
        try {
            await todo.update(
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
            res.status(200).json(findId);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data todo' });
        }  
    }

    static async updateStatusTodo(req, res) {
        const { status } = req.body;
        let id = Number(req.params["id"]);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Todo dengan id: ${id}  tidak ditemukan` });
        }
        try {
            await todo.update( 
                {
                    status,
                },
                {
                    where: {
                        id: id
                    }
                });
                res.status(200).json(findId);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data todo' });
        }
    }

    static async deleteTodo(req, res) {
        let id = Number(req.params["id"]);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Todo dengan id: ${id}  tidak ditemukan` });
        }
        await todo.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Todo dengan id ${id} berhasil dihapus`);
    }
}

module.exports=Controller;
