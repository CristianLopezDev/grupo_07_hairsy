const express = require('express');
const router = express.Router();
const multer = require('multer');

const userController = require('../controllers/userController');

const storage = multer.diskStorage( {
    destination: function (req, file, cb) {
        cb(null, '../../public/images/users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldName + '-' + Date.now());
    }
});     
const upload = multer({ storage });

router.get('/cart', userController.cart);
router.get('/login', userController.login);
router.post('/login', userController.loginProcess);

router.get('/register', userController.register);
router.post('/register', upload.single('image'), userController.store);

module.exports = router;