const express = require("express");
const router = express.Router();

const FilmesController = require("../controllers/filme.controller");

router.get("/filmes", FilmesController.listarFilmes);
router.get("/filme/:id", FilmesController.buscarFilme);
router.get("/filmes/locacoes/categorias", FilmesController.quantidadeporCategoria);
router.get("/filmes/faturamento/categoria", FilmesController.totalCategoria);
router.post("/filme", FilmesController.cadastrarFilme);
router.delete("/filmes/:id", FilmesController.excluirFilme);
router.put("/filme", FilmesController.atualizarFilme);

module.exports = router;