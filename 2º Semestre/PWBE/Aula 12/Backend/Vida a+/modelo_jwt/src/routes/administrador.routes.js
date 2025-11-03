const administradorController = require("../controllers/administrador.controllers");

const express = require('express');
const validate = require('../middlewares/auth');
const {validaAdministrador, validaAtendente, validaMedico} = require("../middlewares/validaCargo");

const adminroutes = express.Router();

adminroutes.get("/pacientes", administradorController.listarpaciente);
adminroutes.delete("/pacientes/:id", validate, validaAdministrador, administradorController.excluirpaciente);
adminroutes.post("/paciente", validate, validaAtendente, administradorController.cadastrarpaciente);

adminroutes.get("/medicos", validate, validaAtendente, administradorController.listarmedico);
adminroutes.delete("/medicos/:id", validate, validaAdministrador, administradorController.excluirmedico);
adminroutes.post("/medico", validate, validaAdministrador, administradorController.cadastrarmedico);

adminroutes.get("/consultas/:id", validate, validaMedico, administradorController.listarconsultapormedico);
adminroutes.delete("/consultas/:id", validate, validaAdministrador, administradorController.excluirconsulta);
adminroutes.post("/consulta", validate, validaAtendente, administradorController.cadastrarconsulta);

adminroutes.get("/consultas/relatorio", validate, validaAdministrador, administradorController.consultasporespecialidades);
adminroutes.get("/pacientes/medicos", validate, validaAdministrador, administradorController.pacientespormedico);
adminroutes.get("/lista/geral", validate, validaAdministrador, administradorController.listageral);

module.exports = adminroutes;