const express = require("express");
const bodyParser = require("body-parser");

const {todos} = require("./models");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

const ToDoList = [];

app.get("/", (req,res) => {
    res.send("Hello Word");
});

app.get("/todos", async (req, res) => {
    try {
        const result = await todos.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/todos/:id", async (req, res) => {
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
});

app.post('/todos', (req, res) => {
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

});



app.put('/todos/:id', async (req, res) => {
    const body = req.body;
    const { title, description, status} = body;

    todos.create({
        title,
        description,
        status: "done" 
    }).then((user) => {
        res.status(201).json(user); 
    }).catch((error) => {
        res.status(500).json(error);
    });

});



app.patch('/todos/:id', async (req, res) => {
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
});

app.delete('/todos/:id', async (req, res) => {
    const id= Number(req.params['id']);

    await todos.destroy({
        where: {
            id:id
        }
    });
    res.status(200).json({ message: `Berhasil menghapus todo id ${id}` });
    
});

app.listen(port, () => {
    console.log(`Example app listening on por ${port}`);
});