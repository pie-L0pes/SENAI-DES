const express = require ("express");
const cors = require ("cors");

const ReservasRoutes = require("./src/Routes/reservas.routes");

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(ReservasRoutes);

app.listen(3000, ()=>{
    console.log("Servidor Online na porta 3000");
});