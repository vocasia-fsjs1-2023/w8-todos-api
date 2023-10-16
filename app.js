const express = require('express');
const bodyParser = require('body-parser');

// const { Buku } = require('./models')
const BukuController = require('./controllers/bukuController');
const routers = require('./routers/index');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hellow Word');
});

app.use(routers);

// Select Data By ID
app.get('/todos/:id', BukuController.getById);

// Update Data
app.put('/todos/:id', BukuController.updateData);

// upadate status
app.patch('/todos/:id', BukuController.updateStatus);

// delete data
app.delete('/todos/:id', BukuController.deleteData);

app.listen(3000, function () {
    console.log('Server start on port 3000');
});


