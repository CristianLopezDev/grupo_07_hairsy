const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');
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

    loginProcess : (req, res) => {
        
        let userToLogIn = User.findByField('email', req.body.email);
        
        if(userToLogIn){
            let correctPassword = bcryptjs.compareSync (req.body.password, userToLogIn.password)
            
            if  (correctPassword === req.password){
                return res.send('Puedes ingresar');
          }
          return res.render('user/login', {
            errors : {
                email : {
                    msg : 'Las credenciales son invalidas'
                }
            }
        });

        };

        return res.render('user/login', {
            errors : {
                email : {
                    msg : 'No se encuentra este email en nuestra base de datos'
                }
            }
        });

    },

    register: (req, res) => {
        res.render("user/register");
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.lenght > 0) {
            return res.render("user/register", {
                errors : resultValidation.mapped(),
                oldData : req.body
            });
        }

        let userInDB = User.findByField('email', req.body.email);

        if (userInDB) {
            return res.render("user/register", {
                errors : {
                    email : {
                        msg : 'Este email ya esta registrado'
                    }
                },
                oldData : req.body
            });
        };

        //return res.send(userInDB);  

        let userToCreate = {
            ...req.body,
            password : bcryptjs.hashSync(req.body.password, 10),
            avatar : req.file.filename
        };

       let userCreated = User.create(userToCreate);
        return res.redirect('./views/user/login');
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