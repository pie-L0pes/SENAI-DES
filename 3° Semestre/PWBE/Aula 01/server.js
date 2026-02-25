require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const listaroutes = require("./src/routers/lista.router");

app.use(express.json());
app.use(cors());
app.use(listaroutes);

app.get("/", (req, res) => {
    res.send("App Online").end();
});

app.listen(3000, () => {
    console.log("Online na 3000");
});