const express = require("express");
const router = express.Router();

const ClientesControllers = (require("../controllers/clientes.controller"));

router.post ("/cliente", ClientesControllers.cadastrar);
router.get ("/clientes/:cpf", ClientesControllers.buscar);
router.get ("/clientes", ClientesControllers.listar);

module.exports = router;