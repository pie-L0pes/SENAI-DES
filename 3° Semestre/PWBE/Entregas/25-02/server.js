require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const veiculosroutes = require("./src/routes/veiculos.routes");

app.use(express.json());
app.use(cors());
app.use(veiculosroutes);

app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});