const db = require("../../database/models")
const sequelize = db.sequelize;


//all products
const productApiController = {
	list: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.json({
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products'
                    },
                    data: products
                });
            })
    },

// Detail - Detail from one product
	detail:  (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.json({
                    meta: {
                        status: 200,
                        url: req.url
                    },
                    data: product
                });
            });
    },
}

module.exports = productApiController;