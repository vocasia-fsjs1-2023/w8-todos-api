const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routers/index");


const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("<h1>Routing API Todo App | Server Is Ready Yuhuuu</h1>");
});

app.use(routers);
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}...`);
});

