const path = require('path'); // core node.js module to return paths

const express = require('express');

const rootDir = require('../util/path');

const products = [];

// stores all routes
const router = express.Router();

// /admin/add-product => GET
router.get( '/add-product', (req, res, next) => {
		//res.sendFile(path.join(rootDir, 'views', 'add-product.html') );
		res.render('add-product', {
			pageTitle: 'Add Product',
			path: '/admin/add-product',
			// FOR HANDLEBARS
			activeAddProduct: true,
			productCSS: true,
			formsCSS: true
		});
});

// /admin/add-product => POST
router.post( '/add-product', (req, res, next) => {
	products.push({title: req.body.title});
	res.redirect('/');
});

exports.routes = router;
exports.products = products;