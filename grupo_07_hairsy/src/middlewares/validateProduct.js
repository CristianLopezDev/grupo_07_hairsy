const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('title')
        .notEmpty().withMessage('(*) Escribe un nombre para el producto').bail(),
    body('productImage').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.psd'];
        if (file) {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(`(*) Las extensiones de archivos permitidas son (${acceptedExtensions.join(', ')})`)
            }
        }
        return true;
    }),
    body('price').notEmpty().withMessage('(*) Tienes que escribir un importe para el producto'),
    body('category').notEmpty().withMessage('(*) Por favor seleccione una categoría')
]