const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const usersFilePath = path.join(__dirname, '../data/user.json');
const user = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
    cart: (req, res) => {
        res.render("user/cart");
    },
    login: (req, res) => {
        res.render("user/login");
    },

    loginProcess: (req, res) => {

        let userToLogIn = User.findByField('username', req.body.username);

        if (userToLogIn) {
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogIn.password)

            if (correctPassword) {
                delete userToLogIn.password;
                req.session.userLogged = userToLogIn;
            
                return res.redirect('profile');
            }
            res.send(`las credenciales son invalidas ${userToLogIn.username}`)

            return res.render('user/login', {
                errors: {
                    username: {
                        msg: 'Las credenciales son invalidas'
                    }
                }
            });
        };
    res.send('No se encontro mail')
        return res.render('user/login', {
            errors: {
                username: {
                    msg: 'No se encuentra este email en nuestra base de datos'
                }
            }
        });


    },

    register: (req, res) => {
        res.render("user/register");
    },

    processRegister: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.render("user/register", {

                errors: errors.mapped(),
                oldData: req.body
            });

        }

        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render("register", {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        };

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            repassword: bcryptjs.hashSync(req.body.repassword, 10),
            avatar: req.file.filename
        };

        let userCreated = User.create(userToCreate);
        return res.redirect('/user/login');
    },

    store: (req, res) => {
        const userClone = user;
        const newUser = {

            ...req.body,

            avatar: req.file.fileName,
            password: bcryptjs.hashSync(req.body.password, 10),



        };
        userClone.push(newUser);

        fs.writeFileSync(usersFilePath, JSON.stringify(userClone, null, ' '));
        res.redirect('/login');
    },

    profile: (req, res) => {
        return res.render('user/profile', {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        res.session.destroy();
        return res.redirect('/');
    }
}





module.exports = userController;





bcryptjs.compareSync("12345678","$2a$10$qXk4ciFd4x219O/q.gcb1.T4bw1zLgs32Pe/Q7AvPWv9xqzJTFXp." )
