const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller");

router.get("/clientes", clientesController.listar);
router.get("/clientes/:id", clientesController.buscar);
router.post("/cliente", clientesController.cadastrar);
router.put("/cliente/:id", clientesController.atualizar);
router.delete("/cliente/:id", clientesController.apagar);

module.exports = router;
