const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.product);

// /*** GET ALL PRODUCTS ***/ 
// router.???('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
// router.???('/???/', productsController.create); 
// router.???('/', productsController.store); 


// /*** GET ONE PRODUCT ***/ 
// router.???('/:id/', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
// router.???('/:id/???', productsController.edit); 
// router.???('/:id', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.???('/:id', productsController.destroy); 

module.exports = router;