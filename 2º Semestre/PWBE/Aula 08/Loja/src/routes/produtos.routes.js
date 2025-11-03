const express = require("express");
const router = express.Router();

const ProdutosControllers = (require("../controllers/produtos.controller"));

router.post ("/produto", ProdutosControllers.cadastrar);
router.get("/produtos/:id", ProdutosControllers.buscar);
router.delete("/produtos/:id", ProdutosControllers.apagar);
router.patch ("/produtos/:id", ProdutosControllers.alterar)
module.exports = router;