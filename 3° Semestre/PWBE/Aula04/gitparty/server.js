require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const incricoesRoutes = require('./src/routes/incricoes.routes');

app.use('/incricoes', incricoesRoutes);

const imagemRoutes = require("./src/routes/imagens.routes");

app.use("/imagem", imagemRoutes);

const eventosRoutes = require('./src/routes/eventos.routes');

app.use('/eventos', eventosRoutes);


const usuariosRoutes = require('./src/routes/usuarios.routes');

app.use('/usuarios', usuariosRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
