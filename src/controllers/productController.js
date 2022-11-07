const fs = require('fs');
const { restart } = require('nodemon');
const path = require('path');
//const Products = db.Product
const db = require("../database/models")

const productsFilePath = path.join(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//all products
const controller = {
	all: async (req, res) => {
		res.render('products/product', {
			products: await db.Product.findAll({
				where: {

				}
			})
				.then(product => {
					data = JSON.parse(JSON.stringify(product));
					return data;
				}),
			categories: await db.Category.findAll({
				where: {
					//falta completar

				}
			})
				.then(category => {
					data = JSON.parse(JSON.stringify(category));
					return data;
				}),
			nombrePagina: 'Productos'
		})
	},
	product: (req, res) => {
		const filteredProducts = products.filter(product => product.category === req.params.category);

		const relatedProducts = products.filter(product => product.category === "color1");

		res.render('product/product', { filteredProducts, relatedProducts });

	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const product = products.find(element => element.id == req.params.id);
		res.render('./product/detail', { product })
	},
	////////////////////////////////////////////////////////////////////////////

	// Create - Form to create
	create: (req, res) => {
		res.render('product/create')
	},

	// Create -  Method to store
	store: (req, res) => {
		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			image: req.file.filename
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, "  "));
		res.redirect("/")
	},

	// Update - Form to edit
	edit: (req, res) => {
		const editProduct = products.find((prod) => {
			return prod.id == req.params.id;
		})
		res.render('./product/edit', { editProduct });
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

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '))

		res.redirect('/product');
	},

	// Delete - Delete one product from DB
	delete: (req, res) => {
		const productId = req.params.id;
		db.Product
			.findAll()
			.then(products => {
				return res.render('product/delete', {
					products
				})
			})
			.catch(error => res.send(error))
	},
	destroy: (req, res) => {
		const productId = req.params.id;
		db.Product
			.destroy({ where: { id: productId }, force: true })
			.then(() => {
				return res.redirect('/product/delete')
			})
			.catch(error => res.send(error))
	}


	/* destroy: (req, res) => {
		res.render('./product/delete');

		const deletedProduct = products.find((prod) => {
			return prod.id == req.params.id;
		})

		const prodIndex = products.findIndex((p) => p.id == deletedProduct.id);

		products.slice(prodIndex, 1);

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/product');

	} */
}

module.exports = controller 