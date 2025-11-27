const relatorioController = require("../controllers/relatorios.controllers");

const express = require('express');

const relatorioroutes = express.Router();

relatorioroutes.get("/relatoriosala", relatorioController.reservaporsala);
relatorioroutes.get("/relatorioaluno", relatorioController.reservaporaluno);

module.exports = relatorioroutes;