const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/cart', userController.carrito);
router.get('/login', userController.login);
router.get('/register', userController.registro);

module.exports = router;