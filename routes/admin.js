const path = require('path'); // core node.js module to return paths

const express = require('express');

const rootDir = require('../util/path');

// stores all routes
const router = express.Router();

// /admin/add-product => GET
router.get( '/add-product', (req, res, next) => {
		res.sendFile(path.join(rootDir, 'views', 'add-product.html') );
});

// /admin/add-product => POST
router.post( '/add-product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;