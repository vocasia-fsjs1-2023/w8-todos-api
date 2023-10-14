const {todos} = require("../models");

class Controller {

    static async AddGettodos (req, res){
        try {
            const result = await todos.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async AddGettodosId (req, res) {
        const id= Number(req.params['id']);
    
        try {
            const result = await todos.findAll({
                where: {
                    id: id,
                },
            });
    
             res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static AddPosttodos(req, res) {
        const body = req.body;
        const { title, description} = body;
    
        todos.create({
            title,
            description,
            status: "created" 
        }).then((user) => {
            res.status(201).json(user); 
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static async AddPuttodos(req, res) {
        const { title, description, status } = req.body;
        const todoId = req.params.id;
      
        try {
        
          const todo = await todos.findByPk(todoId);
      
          if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
          }
      
        
          todo.title = title;
          todo.description = description;
          todo.status = status;
      
       
          await todo.save();
      
          return res.status(200).json(todo);
        } catch (error) {
          return res.status(500).json({ error: "Internal Server Error" });
        }
      }

    static async AddPatchtodos (req, res) {
        const id = Number(req.params['id']);
        const { status } = req.body;
    
        try {
            const [updatedRows] = await todos.update({ status }, { where: { id } });
            
            if (updatedRows > 0) {
                const updatedTodo = await todos.findByPk(id); // Mengambil data yang diupdate
                res.status(200).json(updatedTodo);
            } else {
                res.sendStatus(404);
            }
        } catch (error) {
            res.sendStatus(500);
        }
    }

    static async AddDeletetodos (req, res) {
        const id= Number(req.params['id']);
    
        await todos.destroy({
            where: {
                id:id
            }
        });
        res.status(200).json({ message: `Berhasil menghapus todo id ${id}` });
        
    }
}
module.exports = Controller;
