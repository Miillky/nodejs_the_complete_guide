const path = require('path'); // core node.js module to return paths

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

// __dirname absolute path to this project folder
// path.join will create a path to work on linux (/) and on windows (\) server paths
// .. because after __dirname we are in routes folder
router.get( '/', (req, res, next) => {
		//res.sendFile( path.join(__dirname, '..', 'views', 'shop.html') );
		//res.sendFile( path.join(rootDir, 'views', 'shop.html') );
		const products = adminData.products;
		res.render('shop', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		}); // use default template engine and return the template and data as object
});

module.exports = router;