const { body } = require('express-validator');

module.exports = [
    body('password')
    .notEmpty() .withMessage('Tienes que ingresar tu contraseña') 
    .isLength({ min: 8}) .withMessage('Debe contener un mínimo de 8 carateres'),

    body('repassword')
    .custom((value, { req }) => {
        if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden');
        }

        return true;
    })

]