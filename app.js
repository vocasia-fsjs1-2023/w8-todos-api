const express = require('express');
const bodyParser = require('body-parser');

const { Buku } = require('./models')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hellow Word');
});

// Ambil Data
app.get('/todos', function (req, res) {
    // let response;
    Buku.findAll()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json(error);
        });

});

// Kirim Data
app.post('/todos', function (req, res) {
    const body = req.body;
    const { title, status, description } = body;

    Buku.create({
        title,
        status,
        description,
    }).then((post) => {
        res.status(201).json(post);
    }).catch((error) => {
        res.status(500).json(error);
    });
});

// Update Data
app.put('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const buku = await Buku.findByPk(id);
        if (buku) {
            await buku.update({ title, description });
            res.status(200).json('Data buku berhasil di update!');
        } else {
            res.status(404).json('Buku dengan id tersebut tidak ditemukan!');
        }
    } catch (error) {
        res.status(500).json('Terjadi kesalahan saat mengupdate data')
    }
});

// upadate status
app.patch('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const buku = await Buku.findByPk(id);
        if (buku) {
            await buku.update({ status });
            res.status(200).json('Data buku berhasil di update!');
        } else {
            res.status(404).json('Buku dengan id tersebut tidak ditemukan!');
        }
    } catch (error) {
        res.status(500).json('Terjadi kesalahan saat mengupdate data')

    }
});

// Select Data
app.get('/todos', async (req, res) => {
    const id = Number(req.query['id']);

    let response;
    try {
        const Bukus = await Buku.findOne({
            where: {
                id: id,
            },
        });

        response = Bukus;
    } catch (error) {
        console.log(error);
        response = JSON.stringify(error);
    }
    res.status(200).json(response);
});

// delete data
app.delete('/todos/:id', async (req, res) => {
    const id = Number(req.params['id']);
    await Buku.destroy({
        where: {
            id: id,
        }
    });
    res.status(200).json(`Data Dengan id ${id} telah di hapus`);
});

app.listen(3000, function () {
    console.log('Server start on port 3000');
});


