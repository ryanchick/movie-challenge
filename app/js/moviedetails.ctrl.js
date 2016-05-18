(function(){
	angular
		.module('coderMdb')
		.controller('MovieDetailsCtrl', MovieDetailsCtrl);

	function MovieDetailsCtrl($location, $routeParams, movieSrv, movieData) {
		var moviedVm = this;
		moviedVm.movieSrv = movieSrv
		moviedVm.movie = movieData;
	  	/*TODO #4: Load the movie from the movieService using the id form the route params*/
	  	console.log(moviedVm.movie)
	  	moviedVm.toHome = toHome;

	  	function toHome(){
	  		$location.path('/home');
	  	}
	}
})();


