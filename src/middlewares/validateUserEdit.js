const path = require('path');
const { body } = require('express-validator')

module.exports = [
    body('fullName')
        .notEmpty() .withMessage('Completa con tu nombre'),
    body('userName')
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

        body('email')
        .notEmpty() .withMessage('Completa con tu Email') .bail()
        .isEmail() .withMessage('Debes usar un formato de email valido, EJ: usuario@hotmail.com'),
        
        

];
