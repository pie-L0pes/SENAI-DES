const salaController = require("../controllers/salas.controllers");

const express = require('express');

const salaroutes = express.Router();

salaroutes.get("/salas", salaController.listar);
salaroutes.post("/sala", salaController.cadastrar);
salaroutes.delete("/salas/:id", salaController.excluir);
salaroutes.put("/salas/:id", salaController.atualizar);

module.exports = salaroutes;