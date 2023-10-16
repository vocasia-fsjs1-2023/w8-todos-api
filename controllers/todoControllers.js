const { todo } = require("../models");

class Controller {
    static addTodo(req, res) {
        const { title, description } = req.body;

        todo.create({
            title,
            description
        }).then((data) => {
            res.status(201).json(data);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static async getTodo(req, res) {
        let response;
        try {
            const todos = await todo.findAll();
            response = todos;
        } catch (error) {
            response = "ERROR";
        }
        res.status(200).json(response);
    }

    static async getTodobyID(req, res) {
        let id = Number(req.params["id"]);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        let response;
        try {
            const todos = await todo.findAll({
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

    static async updateTodo(req, res) {
        const { title, description, status } = req.body;
        let id = Number(req.params["id"]);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        let response;
        try {
            await todo.update({ 
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

    static async updateStatus(req, res) {
        const { status } = req.body;
        let id = Number(req.params["id"]);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }
        let response;
        try {
            await todo.update({ status }, 
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

    static async deleteTodo(req, res) {
        let id = Number(req.params["id"]);
        const findId = await todo.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: "Todo tidak ditemukan" });
        }

        await todo.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Todo dengan id ${id} berhasil dihapus`);
    }
}

module.exports = Controller;