const express = require("express");
const router = express.Router();

const ClientesControllers = (require("../controllers/clientes.controller"));

router.get("/clientes", ClientesControllers.listar);
router.get("/clientes/:id", ClientesControllers.buscar);
router.post("/cliente", ClientesControllers.cadastrar);
router.delete("/clientes/:id", ClientesControllers.apagar);

module.exports = router;