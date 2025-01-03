const router = require('express').Router();

const { adminRegister, adminLogIn} = require('../controllers/admin-controller.js');

// Admin 
router.post('/AdminReg',adminRegister)
router.post('/AdminLogin',adminLogIn);

