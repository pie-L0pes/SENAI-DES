const express = require("express");
const router = express.Router();

const ClientesController = require("../controllers/cliente.controller");

router.get("/clientes", ClientesController.listarClientes);
router.get("/cliente/:id", ClientesController.buscarCliente);
router.get("/cliente/total/gasto", ClientesController.totalgastocliente);
router.post("/cliente", ClientesController.cadastrarCliente);
router.delete("/clientes/:id", ClientesController.excluirCliente);
router.put("/cliente", ClientesController.atualizarCliente);

module.exports = router;