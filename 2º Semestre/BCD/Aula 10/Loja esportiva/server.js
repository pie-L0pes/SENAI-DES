const express = require('express');
const cors = require('cors');

const equipamentosrouter = require("./src/routes/equipamentos.routes");

const app = express();

app.use(express.json());
app.use(cors());


app.use(equipamentosrouter);

app.listen (3000, () => {
    console.log("Servidor Online");
});