require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

/* IMPORTAR ROTAS E APLICA-LAS*/

//FIM DAS ROTAS //

app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});