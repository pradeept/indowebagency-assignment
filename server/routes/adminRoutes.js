const express = require('express');
const {getAllAccounts,createAccount,editAccount,deleteAccount} = require('../controller/admin/accountsController');
const {getAllCategories,createCategory, deleteCategory, updateCategory } = require('../controller/admin/categoryController');
const {login} =require('../controller/admin/loginController');

const adminRoutes = express.Router();

//login
adminRoutes.post('/login',login);

adminRoutes.get('/accounts',getAllAccounts);
adminRoutes.post('/accounts',createAccount);
adminRoutes.put('/accounts',editAccount);
adminRoutes.delete('/accounts/:id/:type',deleteAccount);

adminRoutes.get('/category',getAllCategories);
//to approve categories
adminRoutes.put('/category',updateCategory);
adminRoutes.post('/category',createCategory);
adminRoutes.delete('/category/:name',deleteCategory);


module.exports = adminRoutes;