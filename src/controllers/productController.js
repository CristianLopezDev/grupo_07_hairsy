const fs = require('fs');
const { restart } = require('nodemon');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

	//all products
const controller = {
    product: (req, res) => {
		const filteredProducts = products.filter(product => product.category === req.params.category);
		
		const relatedProducts = products.filter(product => product.category === req.params.category);

		res.render('product/product', {filteredProducts, relatedProducts});
    },

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = products.find(element => element.id == req.params.id);
		res.render ('./product/detail', {product})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render ('product/create')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const productsClone = products;
		const newProduct = {
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			category: req.body.category,
			image: req.file?.filename,
		};
		productsClone.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(productsClone, null, ' '));
		res.redirect ('/product');
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

		const prodIndex = products.findIndex((p) => p.id == editProduct.id);

		const updatedProduct = {
			id: editProduct.id,
			name: req.body.name,
			price: Number(req.body.price),
			discount: Number(req.body.discount),
			category: req.body.category,
			description: req.body.description,
			image: req.file ? req.file.filename : editProduct.image
		}

		products[prodIndex] = updatedProduct;

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '))

		res.redirect('/product');
	},

	// Delete - Delete one product from DB
	destroy: (req, res) => {
		res.render ('./product/productDelete');

		const deletedProduct = products.find((prod) => {
			return prod.id == req.params.id;
		})

	const prodIndex = products.findIndex((p) = p.id == deletedProduct.id);

	products.slice(prodIndex,1);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/product');

	}
}

module.exports = controller 