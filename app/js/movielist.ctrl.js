(function(){
	angular
		.module('coderMdb')
		.controller('MovieListCtrl', MovieListCtrl);

	function MovieListCtrl($location,movieSrv,moviesList) {
		var movielVm = this;

		movielVm.movieSrv = movieSrv;
		// console.log(moviesList)

	  /*TODO #3: Load all of the movies from the movieService*/
	  	movielVm.movieData = moviesList;
	  	movielVm.filtered = movielVm.movieData;
	  	// console.log(this.movieData)

	  	movielVm.sortOptions = [
		    {label: 'Title', sortField: 'Title', reverse: false},
		    {label: 'Rating', sortField: "imdbRating", reverse: true}
		]
		movielVm.perPageOptions = [1,4,10,25];
	  	movielVm.curSort = movielVm.sortOptions[0];
	  	movielVm.moviesPerPage = movielVm.perPageOptions[1];

	  	movielVm.curPage = 0;
	  	movielVm.search = '';
	  	movielVm.newTitle = '';

	  	movielVm.toMovieDetail = toMovieDetail;
	  	movielVm.toAddMovie = toAddMovie;
	  	movielVm.toNewMovie = toNewMovie;
	  	movielVm.deleteMovie = deleteMovie;

	  	function deleteMovie(id){
	  		movieSrv.deleteMovie(id)
	  			.then(function(){
	  				return movieSrv.getMovies();
	  			})
	  			.then(function(movies){
	  				movielVm.movieData = movies;
	  			})
	  	}

	  	function toMovieDetail(movie){
	  		$location.path('/movie/' + movie.Title);
	  	}

	  	function toNewMovie(title){
	  		$location.path('/new/' + title);
	  	}

	  	function toAddMovie(){
	  		$location.path('/addMovie');
	  	}
	}
})();
