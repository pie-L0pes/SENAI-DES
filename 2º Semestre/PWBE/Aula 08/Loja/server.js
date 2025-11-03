const express = require ("express");
const cors = require ("cors");

const ClientesRoutes = require("./src/routes/clientes.routes");
const PedidosRoutes = require("./src/routes/pedidos.routes");
const ProdutosRoutes = require("./src/routes/produtos.routes");

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(ClientesRoutes);
app.use(PedidosRoutes);
app.use(ProdutosRoutes);

app.listen(3000, ()=>{
    console.log("Servidor Online na porta 3000");
});