const express = require('express');
const cors = require('cors');

const clienteRoutes = require("./src/routes/cliente.routes");
const filmesRoutes = require("./src/routes/filme.routes");
const locacaoRoutes = require("./src/routes/locacoes.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(clienteRoutes);
app.use(filmesRoutes);
app.use(locacaoRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});