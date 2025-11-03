const express = require("express");
const router = express.Router();

const pedidosControllers = require("../controllers/pedidos.controllers");

router.get("/pedidos", pedidosControllers.listarpedidos);
router.get("/pedidos/:id", pedidosControllers.buscarpedidos);

module.exports = router;