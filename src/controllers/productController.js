const fs = require('fs');
const { restart } = require('nodemon');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


	//all products
const productController = {
    product: function(req, res)
	{
		const filteredProducts = products.filter(product => product.category === req.params.category);
		
		const relatedProducts = products.filter(product => product.category === req.params.category);

		
		// const care = products.filter(product => product.category === "care");
		// const color = products.filter(product => product.category === "color");
		// const styling = products.filter(product => product.category === "styling");
		// const barber = products.filter(product => product.category === "barber")
        //res.render('product/product', { care, color, styling, barber });
		res.render('product/product', {filteredProducts, relatedProducts});
    },

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = products.find(element => element.id == req.params.id);
		res.render ('detail', {product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product/productCreate')
		//res.redirect('/');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		res.send(' Producto creado con exito ')
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