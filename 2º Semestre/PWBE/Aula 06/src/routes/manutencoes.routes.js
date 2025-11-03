const express = require("express");
const router = express.Router();

const ManutencoesControllers = (require("../controllers/manutencoes.controller"));

router.get("/manutencoes", ManutencoesControllers.listar);
router.get("/manutencoes/:id", ManutencoesControllers.buscar);
router.post("/manutencao", ManutencoesControllers.cadastrar);
router.delete("/manutencoes/:id", ManutencoesControllers.apagar);

module.exports = router;