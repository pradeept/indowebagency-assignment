const express = require('express');
const {getPosts, editPost} = require('../controller/user/postController');
const {login,register} = require('../controller/user/loginController');

const userRoutes = express.Router();

//login
userRoutes.post('/login',login);
userRoutes.post('/register',register);

userRoutes.get('/posts/:type',getPosts);
userRoutes.post('/posts',editPost)

module.exports = userRoutes;