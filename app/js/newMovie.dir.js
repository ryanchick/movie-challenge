(function(){
	angular
		.module('coderMdb')
		.directive('newMovie', function(){
			return{
				scope:{},
				controller:'newMovieCtrl',
				controllerAs:'ctrl',
				templateUrl:'partials/searchNewMovie.html'
			};
		});

	angular
		.module('coderMdb')
		.controller('newMovieCtrl', newMovieCtrl);

	function newMovieCtrl($location){
		var newMVm = this;
		newMVm.newTitle = '';
		newMVm.toNewMovie = toNewMovie;

		function toNewMovie(title){
	  		$location.path('/new/' + title);
	  	}
	}

})();

