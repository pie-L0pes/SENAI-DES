const express = require("express");
const router = express.Router();

const veiculoControlller = require("../controllers/veiculos.controller");

router.get("/veiculos", veiculoControlller.listar);
router.get("/veiculo/:id", veiculoControlller.buscar);
router.delete("/veiculo/:id", veiculoControlller.apagar);
router.post("/veiculo", veiculoControlller.cadastrar);
router.put("/veiculo/:id", veiculoControlller.atualizar);

module.exports = router;