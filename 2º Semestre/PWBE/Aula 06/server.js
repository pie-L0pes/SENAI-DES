const express = require ("express");
const cors = require ("cors");

const ClientesRoutes = require("./src/routes/clientes.routes");
const ContratosRoutes = require("./src/routes/contratos.routes");
const ManutencoesRoutes = require("./src/routes/manutencoes.routes");
const VeiculosRoutes = require("./src/routes/veiculos.routes");

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(ClientesRoutes);
app.use(ContratosRoutes);
app.use(ManutencoesRoutes);
app.use(VeiculosRoutes);

app.listen(3000, ()=>{
    console.log("Servidor Online na porta 3000");
});