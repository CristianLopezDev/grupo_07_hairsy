const express = require('express');
const router = express.Router();
const multer = require('multer');

// //Multer        
const storage = multer.diskStorage( {
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });
//#######Middlewares##########//
const validateProduct = require('../middlewares/validateProduct');

//#######Controller required#######//
const productController = require('../controllers/productController');

// /*** CREATE ONE PRODUCT ***/
router.get('/create', productController.create);
router.post('/create', upload.single('image'),validateProduct,  productController.store);

// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit:id', productController.edit); 
router.put('/edit:id', productController.update); 

// /*** DELETE ONE PRODUCT***/ 
router.get('/delete', productController.delete);
router.delete('/delete/:id', productController.destroy);

router.get('/:category', productController.product); 


module.exports = router;