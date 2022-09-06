const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage( {
    destination: function (req, file, cb) {
        cb(null, '../../public/images/users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldName + '-' + Date.now());
    }
});     
const upload = multer({ storage });

module.exports = upload;
