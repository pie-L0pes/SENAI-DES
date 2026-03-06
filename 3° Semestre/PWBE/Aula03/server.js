require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const veiculosroutes = require("./src/routes/veiculos.routes");
const clientesroutes = require("./src/routes/clientes.routes");

app.use(express.json());
app.use(cors());
app.use(veiculosroutes);
app.use(clientesroutes);

app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});