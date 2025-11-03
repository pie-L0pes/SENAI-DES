const postsController = require("../controllers/posts.controller");

const express = require('express');
const validate = require("../middlewares/auth");

const postsRoutes = express.Router();

postsRoutes.post('/posts', validate, postsController.createpost);

module.exports = postsRoutes;