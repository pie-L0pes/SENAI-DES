const express = require("express");
const router = express.Router();

const ContratosControllers = (require("../controllers/contratos.controller"));

router.get("/contratos", ContratosControllers.listar);
router.get("/contratos/:id", ContratosControllers.buscar);
router.post("/contrato", ContratosControllers.cadastrar);
router.delete("/contratos/:id", ContratosControllers.apagar);

module.exports = router;