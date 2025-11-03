const express = require("express");
const router = express.Router();

const equipamentoController = require("../controllers/equipamentos.controlllers");

router.get("/equipamentos", equipamentoController.listarequipamento);
router.post("/equipamento", equipamentoController.cadastrarequipamento);
router.get("/equipamentos/:id", equipamentoController.buscarEquipamento);
router.delete("/equipamento/:id", equipamentoController.excluirequipamento);
router.put("/equipamento", equipamentoController.atualizarequipamento);

module.exports = router;