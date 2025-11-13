const express = require('express');
const vagasController = require("../controllers/vagas.controllers");
// const validate = require('../middlewares/auth');

const vagasroutes = express.Router();

vagasroutes.get("/vagas", vagasController.listarvagas);
vagasroutes.get("/vagas/:id", vagasController.buscarvagas);
vagasroutes.post("/vaga", vagasController.cadastrarvagas);
vagasroutes.delete("/vaga/:id", vagasController.excluirvagas);
vagasroutes.put("/vaga/:id", vagasController.atualizarvagas);

module.exports = vagasroutes;