const alunoController = require("../controllers/alunos.controllers");

const express = require('express');

const alunoroutes = express.Router();

alunoroutes.get("/alunos", alunoController.listar);
alunoroutes.post("/aluno", alunoController.cadastrar);
alunoroutes.delete("/alunos/:id", alunoController.excluir);
alunoroutes.put("/alunos/:id", alunoController.atualizar);

module.exports = alunoroutes;