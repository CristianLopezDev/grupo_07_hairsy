
const productController = {
    product: function(req, res){
        //TODO:Llamar los productos y pasarlos a esta vista//
        res.render('product/product');
    }
}

module.exports = productController;

