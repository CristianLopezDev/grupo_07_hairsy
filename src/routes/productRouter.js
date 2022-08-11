const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage( {
    destination: function (req, file, cb) {
        cb(null, '  /public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldName + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });

//#######Controller required#######//
const productController = require('../controllers/productController');

router.get('/', productController.product);

// /*** GET ALL PRODUCTS ***/ 
// router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/
router.get('/create', productController.create);
router.post('/create', upload.single('image'), productController.store);

// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
// router.???('/:id/???', productsController.edit); 
// router.???('/:id', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
// router.???('/:id', productsController.destroy); 

module.exports = router;