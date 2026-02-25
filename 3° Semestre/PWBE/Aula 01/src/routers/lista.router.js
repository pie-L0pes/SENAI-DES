const express = require("express");
const router = express.Router();

const listacrontroller = require("../controllers/lista.controller");

router.get("/listar", listacrontroller.listarItens);

module.exports = router;