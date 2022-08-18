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
		//res.redirect('/');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
        const editProduct = products.find((prod) => {
			return prod.id == req.params.id;
		})
        res.render('productEdit', {editProduct});
    },
	// Update - Method to update
	update: (req, res) => {
		const editProduct = products.find((prod) => {
			return prod.id == req.params.id
		});

		const prodIndex = products.findIndex((p) => p.id == editedProduct.id);

		const updatedProduct = {
			id: editedProduct.id,
			name: req.body.name,
			price: Number(req.body.price),
			discount: Number(req.body.discount),
			category: req.body.category,
			description: req.body.description,
			image: req.file ? req.file.filename : editedProduct.image
		}

		products[prodIndex] = updatedProduct;

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '))

		res.redirect('/product');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		const deletedProduct = products.find((prod) => {
			return prod.id == req.params.id;
		})

	const prodIndex = products.findIndex((p) = p.id == deletedProduct.id);

	products.slice(prodIndex,1);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/product');

	}
}

module.exports = productController 