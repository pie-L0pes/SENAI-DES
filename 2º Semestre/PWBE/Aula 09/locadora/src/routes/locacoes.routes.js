const express = require("express");
const router = express.Router();

const locacaoController = require("../controllers/locacoes.controller");

router.get("/locacoes", locacaoController.listarlocacao);
router.get("/locacao/:id", locacaoController.buscarlocacao);
router.post("/locacao", locacaoController.cadastrarlocacao);
router.delete("/locacoes/:id", locacaoController.excluirlocacao);
router.put("/locacao", locacaoController.atualizarlocacao);
router.get("/locacoes/cliente/:idcliente", locacaoController.listarlocacao_id);
router.get("/locacoes/status/:status", locacaoController.listarlocacao_status);
router.get("/locacoes/total", locacaoController.totalFaturamento);
router.get("/locacoes/quant/faturamento", locacaoController.quantfaturamento)
module.exports = router;