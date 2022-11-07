const bcryptjs = require("bcryptjs");
//const fs = require('fs');
//const path = require('path');
const db = require("../database/models");
/* const usersFilePath = path.join(__dirname, '../data/user.json');
const user = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */
const { validationResult } = require("express-validator");
const User = db.User;

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const userController = {
  cart: (req, res) => {
    res.render("user/cart");
  },
  login: (req, res) => {
    res.render("user/login");
  },

  loginProcess: async (req, res) => {
    let login = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (login) {
      let correctPassword = bcryptjs.compareSync(
        req.body.password,
        login.password
      );

      if (correctPassword) {
        delete login.password;
        req.session.userLogged = login;

        return res.redirect("profile");
      }
      res.render("user/login"); 

      return res.render("user/login", {
        errors: {
          username: {
            msg: "Las credenciales son invalidas",
          },
        },
      });
    }
    /* res.render("user/login"); */
    return res.render("user/login", {
      errors: {
        username: {
          msg: "No se encuentra este email en nuestra base de datos",
        },
      },
    });
  },

  register: (req, res) => {
    res.render("user/register");
  },

  processRegister: async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
            return res.render("user/register", {
                errors: errors.array(),
                oldData: req.body
            });
        } 
    let search = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    

    if (search) {
      return res.render("user/register", {
        errors: [ 
          {
            msg: "Este email ya esta registrado",
          },
        ],
        oldData: req.body,
      });
    } 
    try {

      let user = await User.create({
        ...req.body,
        password: bcryptjs.hashSync(req.body.password, 10),
        repassword: bcryptjs.hashSync(req.body.repassword, 10),
        avatar: req.file.filename,
      });
    } catch (err) {
      return res.json(err)
    }
  
    return res.redirect("/user/login");
  },

  store: (req, res) => {
    const userClone = user;
    const newUser = {
      ...req.body,

      avatar: req.file.fileName,
      password: bcryptjs.hashSync(req.body.password, 10),
    };
    userClone.push(newUser);

    fs.writeFileSync(usersFilePath, JSON.stringify(userClone, null, " "));
    res.redirect("/login");
  },

  profile: (req, res) => {
    return res.render("user/profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = userController;

