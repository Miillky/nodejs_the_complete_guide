// const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);// path.dirname is / or \ for windows and joins

const getProductsFromFile = cb => {
	// cb is a callback function to return the data because return won't return the data from the function but inner functions
	fs.readFile(p, (err, fileContent) => {
		if(err){
			//return [];
			cb([]);
		} else {
			cb(JSON.parse( fileContent ));
		}
		//return JSON.parse( fileContent );
	});
}

module.exports = class Product {
	constructor(title){
		this.title = title;
	}

	/* save(){
		//products.push(this)
		const p = path.join( path.dirname(
			process.mainModule.filename),
			'data',
			'products.json'
		); // path.dirname is / or \ for windows and joins
		fs.readFile(p, (err, fileContent) => {
			let products = [];
			if(!err){
				products = JSON.parse(fileContent); // if file exists add json products to products array
			}
			products.push(this); // use arrow function so this refers to the class an not lose context
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log(err);
			}) // writes new products array to json
		});
	} */

	save(){
		getProductsFromFile(products => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), err => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb){
		getProductsFromFile(cb)
		// return products;
	}
}