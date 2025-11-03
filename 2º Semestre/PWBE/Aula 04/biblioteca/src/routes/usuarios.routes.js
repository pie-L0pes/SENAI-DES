const express = require("express");
const router = express.Router();

const UsuariosControllers = (require("../controllers/usuarios.controller"));

//Define os métodos e rota da aplicação
router.get("/usuarios", UsuariosControllers.listar);
router.get("/usuarios/:matricula", UsuariosControllers.buscar);
router.post("/usuario", UsuariosControllers.cadastrar);
router.delete("/usuarios/:matricula", UsuariosControllers.apagar);
router.put("/usuario", UsuariosControllers.atualizar );
router.patch("/usuario/:matricula", UsuariosControllers.alterar);

module.exports = router;