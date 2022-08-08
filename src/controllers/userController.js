let userController = {
    cart: function(req, res){
        res.render("user/cart");
    },
    login: function(req, res){
        res.render("user/login");
    },
    register: function(req, res){
        res.render("user/register");
    }
}

module.exports = userController;