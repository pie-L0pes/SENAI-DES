const express = require("express");
const router = express.Router();

const PedidosControllers = (require("../controllers/pedidos.controller"));

router.post ("/pedido", PedidosControllers.cadastrar);
router.patch ("/pedidos/:id", PedidosControllers.alterar);
router.get ("/pedidos", PedidosControllers.listar);

module.exports = router;