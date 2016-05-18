(function(){
	/*TODO #1: Add a dependency on the router module*/
	angular
		.module('coderMdb', ['ngRoute','ngAnimate']);

	angular
		.module('coderMdb')
		.config(function($routeProvider) {
			$routeProvider
				.when('/home',{
					templateUrl: 'partials/movieList.html',
					controller: 'MovieListCtrl as ctrl',
					resolve: {
						moviesList: function(movieSrv){
							return movieSrv.getMovies();
						}
					}
				})
				.when('/movie/:movieName',{
					templateUrl: 'partials/movieDetails.html',
					controller: 'MovieDetailsCtrl as ctrl',
					resolve: {
						movieData: function($route,movieSrv){
							console.log('params')
							console.log($route.current.params.movieName)
							return movieSrv.getMovie($route.current.params.movieName);
						}
					}
				})
				.when('/addMovie',{
					templateUrl: 'partials/movieAdd.html',
					controller: 'MovieAddCtrl as ctrl'
				})
				.when('/new/:movieTitle',{
					templateUrl: 'partials/movieGetAdd.html',
					controller: 'MovieGetAddCtrl as ctrl',
					resolve: {
						movieData: function($route,movieSrv){
							console.log('params')
							console.log($route.current.params.movieTitle)
							return movieSrv.getNewMovie($route.current.params.movieTitle)
						}
					}
				})
				.otherwise({
					redirectTo: '/home'
				})
	  /*
	  TODO #2:
	  Configure the router to:
	    -load movieList.html and use the MovieListCtrl when the url is '/home'
	    -load movieDetails.html and use the MovieDetailsCtrl when the url is '/movie/:movieId'
	  For any other url redirect the user to the home page.
	  */
		});
})();
