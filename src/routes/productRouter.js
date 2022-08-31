const express = require('express');
const router = express.Router();
const multer = require('multer');

//Multer        
const storage = multer.diskStorage( {
    destination: function (req, file, cb) {
        cb(null, '../public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldName + '-' + Date.now());
    }
});

//Variable para Multer
const upload = multer({ storage });

//#######Controller required#######//
const productController = require('../controllers/productController');

// /*** GET ALL PRODUCTS ***/ 
// router.get('/', productController.product); 

// /*** CREATE ONE PRODUCT ***/
router.get('/create', productController.create);
router.post('/create', upload.single('image'), productController.store);

// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productController.edit); 
router.put('/edit/:id', productController.update); 

// /*** DELETE ONE PRODUCT***/ 
router.get('/productDelete', productController.destroy);
router.delete('/productDelete', productController.destroy) 

router.get('/:category', productController.product); 


module.exports = router;