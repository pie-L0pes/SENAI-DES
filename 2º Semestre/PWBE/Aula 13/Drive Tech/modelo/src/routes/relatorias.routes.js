const express = require('express');
const relatoriosController = require("../controllers/relatorias.controllers");
// const validate = require('../middlewares/auth');

const relatorioroutes = express.Router();

relatorioroutes.get("/carrosestacionados", relatoriosController.veiculosnoestacionamente);
relatorioroutes.get("/valor/total", relatoriosController.valortotal);
relatorioroutes.get("/historico", relatoriosController.historico);
relatorioroutes.get("/taxa", relatoriosController.taxa);


module.exports = relatorioroutes;
