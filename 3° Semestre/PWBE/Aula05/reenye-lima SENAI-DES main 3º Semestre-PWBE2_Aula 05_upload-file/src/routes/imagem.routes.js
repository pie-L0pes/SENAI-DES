const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadImagem");

const {
  cadastrar,
  listar,
  buscar,
  atualizar,
  excluir,
} = require("../controllers/imagem.controller");

router.post("/cadastrar/:id", upload, cadastrar);
router.get("/listar", listar);
router.get("/buscar/:id", buscar);
router.put("/atualizar/:id", atualizar);
router.delete("/excluir/:id", excluir);

module.exports = router;
