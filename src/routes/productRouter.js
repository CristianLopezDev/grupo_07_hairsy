const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/products/product', productController.productDetail);


module.exports = router;