//const products = [];
const Product = require('../models/product');

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
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products',
			});
		});
};

exports.getIndex = (req, res, next) => {
	Product.fetchAll( products => {
		res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
		});
	});
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}