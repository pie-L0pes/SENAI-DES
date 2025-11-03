const postsController = require("../controllers/posts.controller");

const express = require('express');
const validate = require('../middlewares/auth');
const {validaGerente, validaEditor} = require('../middlewares/validaCargo');

const postsRoutes = express.Router();

postsRoutes.post('/posts',validate, validaEditor, postsController.createpost);
postsRoutes.put('/posts/:id', validate, validaEditor, postsController.atualizarPost);
postsRoutes.get('/posts', validate, validaEditor, postsController.listarPost);
postsRoutes.get('/posts/:id', validate, validaEditor, postsController.buscarPost);

//gerente apenas
postsRoutes.delete('/posts/:id', validate, validaGerente, postsController.excluirPost);
postsRoutes.get('/total/posts', validate, validaGerente, postsController.TotalPosts);



module.exports = postsRoutes;