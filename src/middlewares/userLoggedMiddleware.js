const User = require("../database/models/User")

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;
    
/*     let userInCookie = req.cookies.username;
    let userFromCookie = User.findOne("username", userInCookie)
    
    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    } */
    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next ();
}

module.exports = userLoggedMiddleware;