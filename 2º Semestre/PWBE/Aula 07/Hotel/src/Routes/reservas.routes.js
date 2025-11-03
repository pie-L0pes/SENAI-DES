const express = require("express");
const router = express.Router();

const ReservasControllers = require("../Controllers/reservas.controller");

router.get("/reservas", ReservasControllers.listar);
router.post("/reserva", ReservasControllers.cadastrar);
router.put("/reservas/:id", ReservasControllers.atualizar); 

module.exports = router;              