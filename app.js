const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");

const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server ready");
});

app.use(routes);

app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});