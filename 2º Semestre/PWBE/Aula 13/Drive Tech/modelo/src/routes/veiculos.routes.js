const express = require('express');
const veiculosController = require("../controllers/veiculos.controllers");
// const validate = require('../middlewares/auth');

const veiculosroutes = express.Router();

veiculosroutes.get("/veiculos", veiculosController.listarveiculos);
veiculosroutes.get("/veiculos/:placa", veiculosController.buscarveiculos);
veiculosroutes.post("/veiculo", veiculosController.cadastrarveiculo);
veiculosroutes.delete("/veiculo/:placa", veiculosController.excluirveiculo);
veiculosroutes.put("/veiculo/:placa", veiculosController.atualizarveiculo);

module.exports = veiculosroutes;
