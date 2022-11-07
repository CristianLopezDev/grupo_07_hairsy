function authMiddleware2 (req, res, next){
    if(!req.session.userLogged) {
        return res.redirect ('../user/login')
    }
    next();
}

module.exports = authMiddleware2;
