const loginController = require('../controllers/login.controller');

const express = require('express');
const validate = require('../middlewares/auth');
const { validaGerente } = require('../middlewares/validaCargo');

const loginRoutes = express.Router();

loginRoutes.post('/login', loginController.Login);
loginRoutes.post('/register', loginController.cadastrarUsuario);
loginRoutes.get('/validate', validate);
//gerente apenas
loginRoutes.get('/users', validate, validaGerente, loginController.listarUsuarios);//lista todos os usuarios
loginRoutes.get('/posts/autor/:id', validate, validaGerente, loginController.postAutor);//pega o autor do post

module.exports = loginRoutes;