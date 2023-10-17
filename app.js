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

app.listen(3000, function () {
    console.log('Server start on port 3000');
});


