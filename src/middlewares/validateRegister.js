const path = require('path');
const { body } = require('express-validator')

module.exports = [
    body('fullname')
        .notEmpty() .withMessage('Completa con tu nombre'),
    body('username')
        .notEmpty() .withMessage('Completa con tu nombre de usuario'),    
    
    body('avatar')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.png', '.gif']
            if (!file) {
                throw new Error ('Tienes que subir una imagen');
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error ('Las extensiones permitidas son .jpg, .png y .gif')
                }
            }
            return true;
        }),    
        //body('birthday')
          //  .c,
        body('email')
        .notEmpty() .withMessage('Completa con tu Email') .bail()
        .isEmail() .withMessage('Debes usar un formato de email valido, EJ: usuario@hotmail.com'),
        
        body('password')
        .notEmpty() .withMessage('Tienes que ingresar tu contraseña') 
        .isLength({ min: 8}) .withMessage('(*) Debe contener un mínimo de 8 carateres'),
        
        body('repassword')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
            throw new Error('(*) Las contraseñas no coinciden');
            }
        
            return true;
        })
        
];
