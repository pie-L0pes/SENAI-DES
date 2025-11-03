const express = require("express");
const router = express.Router();

const LivrosControllers = (require("../controllers/livros.controller"));

router.get("/livros", LivrosControllers.listar);
router.get("/livros/:id", LivrosControllers.buscar);
router.post("/livro", LivrosControllers.cadastrar);
router.delete("/livros/:id", LivrosControllers.apagar);

module.exports = router;