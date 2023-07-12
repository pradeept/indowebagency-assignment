const express = require('express');
const {getAllPosts,editPost} = require('../controller/vendor/postController');
const {getAllCategories,requestCategory} = require('../controller/vendor/categoryController');
const {uploadImage,uploadVideo} = require('../controller/vendor/uploadsController');
const {login,register} = require('../controller/vendor/loginController');

const vendorRoutes = express.Router();

//login
vendorRoutes.post('/login',login);
vendorRoutes.post('/register',register);


//posts
vendorRoutes.get('/posts/:id',getAllPosts);
vendorRoutes.put('/posts',editPost);

//categories
vendorRoutes.get('/category',getAllCategories);
vendorRoutes.post('/category',requestCategory);


//uploads
vendorRoutes.post('/upload/:category/image',uploadImage);
vendorRoutes.post('/upload/:category/video',uploadVideo);



module.exports = vendorRoutes;