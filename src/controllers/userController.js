const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/user.json');
const user = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    cart: (req, res) => {
        res.render("user/cart");
    },
    login: (req, res) => {
        res.render("user/login");
    },
    register: (req, res) => {
        res.render("user/register");
    },
    store: (req, res) => {
            const userClone = user;
            const newUser = {
                name: req.body.firstname,
                image: req.file.fileName
            };
            userClone.push(newUser);

            fs.writeFileSync(usersFilePath, JSON.stringify(userClone, null, ' '));
            res.redirect ('/');
        },
    }

module.exports = userController;