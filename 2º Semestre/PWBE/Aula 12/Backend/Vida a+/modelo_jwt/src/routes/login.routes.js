const loginController = require('../controllers/login.controllers');

const express = require('express');
const validate = require('../middlewares/auth');
const { validaAdministrador } = require('../middlewares/validaCargo');

const loginRoutes = express.Router();


loginRoutes.post('/login', loginController.Login);
loginRoutes.post('/register', loginController.cadastrarUsuario);
loginRoutes.get('/validate', validate);
loginRoutes.get('/users', validate, validaAdministrador, loginController.listarUsuarios);

module.exports = loginRoutes;