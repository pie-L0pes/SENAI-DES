require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const veiculosroutes = require("./src/routes/veiculos.routes");
const vagasroutes = require("./src/routes/vagas.routes");
const utilizacaoroutes = require("./src/routes/utilizacao.routes");
const relatorioroutes = require("./src/routes/relatorias.routes");
const loginroutes = require("./src/routes/login.routes");

app.use(express.json());
app.use(cors());

app.use(veiculosroutes);
app.use(vagasroutes);
app.use(utilizacaoroutes);
app.use(relatorioroutes);
app.use(loginroutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})