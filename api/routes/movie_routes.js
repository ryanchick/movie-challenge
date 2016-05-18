var express = require('express');
var models = require('../models')
var router = express.Router();


//GET all movies
router.get('/', function(req, res) {
	// console.log(req.body)
	console.log('test')
	console.log(req.body)
	models.Movies.findAll().then(function(movies){
		res.json(movies);
	});
});

//get one shop
router.get('/:movieName', function(req, res) {
	// console.log(req.body)
	var where = {where:{Title:req.params.movieName}};
	models.Movies.find(where).then(function(movie){
		//findall returns a single object
		console.log(movie.dataValues);
		res.json(movie)
	})
});

//POST new movie
router.post('/', function(req, res) {
	console.log(req.body)
	//properties represent attributes in your model
	var __movie = req.body;

	models.Movies.create(__movie).then(function(movie){
			//returns an objects
			console.log(movie);
			res.json(movie);
		})
});

// //update shop
// router.put('/', function(req,res){
// 	console.log('put')
// 	console.log(req.body)

// 	var __shop = req.body;

// 	var where = {where:{id:__shop.id}};
// 	models.Shops.find(where).then(function(shop){
// 		shop.updateAttributes({
// 			name:__shop.name,
// 			address:__shop.address,
// 			rating:__shop.rating
// 		})
// 		.then(function(shop){
// 			res.json(shop)
// 		});
// 	})
// })

//delete shop
router.delete('/:id', function(req,res){
	console.log(req.params.id)

	var where = {where:{id:[req.params.id]}};

	models.Movies.find(where).then(function(movie){
		movie.destroy()
		.then(function(){
			res.send('movie #'+ req.params.id + ' deleted.')
		})
	})
})


module.exports = router;