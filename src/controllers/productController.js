const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
    product: function(req, res){
        //TODO:Llamar los productos y pasarlos a esta vista//
        res.render('product/product');
    },

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('product/productDetail')
		// Do the magic
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product/productCreate')
		//res.redirect('/home');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		res.render('./product/productEdit')
		// Do the magic

	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = productController;

