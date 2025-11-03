const express = require ("express");
const cors = require ("cors");

const UsuariosRoutes = require("./src/routes/usuarios.routes");
const LivrosRoutes = require("./src/routes/livros.routes");

const app = express (); //Carrega config. inicisl do express

app.use(cors()); //Aplica CORS ao express
app.use(express.json()); //Habilita a comunicação com JSON

app.use(UsuariosRoutes); //Inclui as rotas ao express
app.use(LivrosRoutes);
//Incicia a API na porta 3000
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});