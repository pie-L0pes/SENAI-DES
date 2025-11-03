const express = require("express");
const router = express.Router();

const VeiculosControllers = (require("../controllers/veiculos.controller"));

router.get("/veiculos", VeiculosControllers.listar);
router.get("/veiculos/:id", VeiculosControllers.buscar);
router.post("/veiculo", VeiculosControllers.cadastrar);
router.delete("/veiculos/:id", VeiculosControllers.apagar);

module.exports = router;