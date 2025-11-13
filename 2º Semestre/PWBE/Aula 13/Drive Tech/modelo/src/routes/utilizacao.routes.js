const express = require('express');
const utilizacaoController = require("../controllers/utilizacao.controllers");
// const validate = require('../middlewares/auth');

const utilizacaoroutes = express.Router();

utilizacaoroutes.get("/utilizacoes", utilizacaoController.listarutilizacao);
utilizacaoroutes.get("/utilizacoes/:id", utilizacaoController.buscarutilizacao);
utilizacaoroutes.post("/utilizacao", utilizacaoController.cadastrarutilizacao);
utilizacaoroutes.delete("/utilizacao/:id", utilizacaoController.excluirutilizacao);
utilizacaoroutes.put("/utilizacao/:id", utilizacaoController.atualizarutilizacao);

module.exports = utilizacaoroutes;