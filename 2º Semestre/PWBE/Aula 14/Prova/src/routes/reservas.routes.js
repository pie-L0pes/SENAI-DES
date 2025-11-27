const reservaController = require("../controllers/reservas.controllers");

const express = require('express');

const reservaroutes = express.Router();

reservaroutes.get("/reservas", reservaController.listar);
reservaroutes.post("/reserva", reservaController.cadastrar);
reservaroutes.delete("/reservas/:id", reservaController.excluir);
reservaroutes.put("/reservas/:id", reservaController.atualizar);

module.exports = reservaroutes;