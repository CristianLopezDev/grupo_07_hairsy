let userController = {
    carrito: function(req, res){
        res.render("users/carrito");
    },
    login: function(req, res){
        res.render("users/login");
    },
    registro: function(req, res){
        res.render("users/registro");
    }
}

module.exports = userController;