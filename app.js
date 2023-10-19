const express = require("express");
const routers = require("./routers/index");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.text());
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is ready!");
});

app.use(routers);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}...`);
});