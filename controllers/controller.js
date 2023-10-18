const { Todo } = require("../models");

class Controller {
    static add(req, res) {
        const { title, description } = req.body; // Menggunakan req.body untuk mengambil data dari body permintaan

        console.log(req.body);

        Todo.create({
            title,
            description
        }).then((data) => {
            res.status(201).json(data);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }


    static async readData(req, res) {
        let response;
        try {
            const todos = await Todo.findAll();
            response = todos;
        } catch (error) {
            console.log(error);
            response = "ERROR";
        }
        res.status(200).json({ todos: response });
    }

    static async read(req, res) {
        let id = Number(req.params["id"]);
        const findId = await Todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        let response;
        try {
            const todos = await Todo.findAll({
                where: {
                    id: id
                }
            });
            response = todos;
        } catch (error) {
            console.log(error);
            response = JSON.stringify(error);
        }
        res.status(200).json(response);
    }

    static async input(req, res) {
        const { title, description, status } = req.body;
        let id = Number(req.params["id"]);
        const findId = await Todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        let response;
        try {
            await Todo.update({
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

    static async update(req, res) {
        const { status } = req.body;
        let id = Number(req.params["id"]);
        const findId = await Todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        let response;
        try {
            await Todo.update({ status },
                {
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

    static async delete(req, res) {
        let id = Number(req.params["id"]);
        const findId = await Todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }

        await Todo.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Todo dengan id ${id} berhasil dihapus`);
    }
}

module.exports = Controller