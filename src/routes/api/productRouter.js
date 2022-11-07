const express = require('express');
const router = express.Router();
const productApiController = require('../../controllers/api/productApiController');

//Rutas
//Listado de todos los generos
router.get('/products', productApiController.list);
// /*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productApiController.detail); 

module.exports = router