require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunoroutes = require("./src/routes/alunos.routes");
const salaroutes = require("./src/routes/salas.routes");
const reservaroutes = require("./src/routes/reservas.routes");
const relatorioroutes = require("./src/routes/relatorio.routes");

app.use(express.json());
app.use(cors());

app.use(alunoroutes);
app.use(salaroutes);
app.use(reservaroutes);
app.use(relatorioroutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})