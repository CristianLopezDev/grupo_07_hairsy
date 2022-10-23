const express = require('express');
const router = express.Router();

/********CONTROLLER****************************/
const userController = require('../controllers/userController');

/**********MIDDLEWARES**************************/
const upload = require('../middlewares/multerMiddleware');
const validateRegister = require('../middlewares/validateRegister');
const validatePassword = require('../middlewares/validatePassword');
const validateUserEdit = require('../middlewares/validateUserEdit');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
/*********************************************/

// REGISTER FORM
router.get('/register', userController.register);           

// REGISTER POST (CARGA INFO)
router.post('/register', upload.single('avatar'), validateRegister, userController.processRegister);



// LOGIN FORM
router.get('/login',/*  guestMiddleware, */ userController.login);
// LOGIN POST (CARGA INFO)
router.post('/login', userController.loginProcess);

// USER EDIT

// DELETE (BUSCAR EN VIDEO METODO DELETE EN USER CONTROLLER)

//router.delete('/delete/:id', authMiddleware, usersController.delete);

// CART
router.get('/cart', userController.cart);

// PROFILE
router.get('/profile', authMiddleware, userController.profile);

//router.get('/profileUsers/:id/', authMiddleware, usersController.profileUsers);

// LOGOUT
router.get('/logout', userController.logout);


module.exports = router;





/* const { route } = require('./mainRouter'); */