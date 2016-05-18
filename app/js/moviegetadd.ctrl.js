(function(){
	angular
		.module('coderMdb')
		.controller('MovieGetAddCtrl', MovieGetAddCtrl);

	function MovieGetAddCtrl($location, $routeParams, $http, $q, movieSrv,movieData) {
		var moviegVm = this;
		moviegVm.movieSrv = movieSrv;
		console.log('moviedata:')
		console.log(movieData)
		moviegVm.movie = movieData.data;
		console.log(moviegVm.movie)

		console.log(movieSrv.movies)
		moviegVm.exists = false;
		checkMovie();
		console.log(moviegVm.exists)
	  	
	  	//public methods
	  	moviegVm.addMovie = addMovie;
	  	moviegVm.toHome = toHome;

	  	function checkMovie(){
	  		for(var i = 0; i < movieSrv.movies.length; i++){
	  			// console.log(movieSrv.movies[i].Title)
	  			if(moviegVm.movie.Title == movieSrv.movies[i].Title){
	  				moviegVm.exists = true;
	  			}
	  		}
	  	}

	  	function addMovie(){
	  		// movieSrv.movies.push(moviegVm.movie)
			// movieSrv.saveMovies();
			movieSrv.addMovie(moviegVm.movie)
				.then(function(){
					alert(moviegVm.movie.Title + ' has been added to the list.')
					moviegVm.toHome();	 
				})
			 	
	  	}

	  	function toHome(){
	  		$location.path('/home');
	  	}
	}
})();


						