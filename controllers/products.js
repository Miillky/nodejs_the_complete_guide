//const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
		//res.sendFile(path.join(rootDir, 'views', 'add-product.html') );
		res.render('add-product', {
			pageTitle: 'Add Product',
			path: '/admin/add-product',
			// FOR HANDLEBARS
			activeAddProduct: true,
			productCSS: true,
			formsCSS: true
		});
};

exports.postAddProduct = (req, res, next) => {
	//products.push({title: req.body.title});
	const product = new Product(req.body.title); // title from form name title
	product.save();
	res.redirect('/');
};

exports.getProducts = (req, res, next) => {
		//res.sendFile( path.join(__dirname, '..', 'views', 'shop.html') );
		//res.sendFile( path.join(rootDir, 'views', 'shop.html') );
		//const products = adminData.products;
		//const products = Product.fetchAll();

		/* const products = Product.fetchAll();
		res.render('shop', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		}); */ // use default template engine and return the template and data as object

		// Executing the callback function to return all the products
		Product.fetchAll( products => {
			res.render('shop', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
			});
		});

}