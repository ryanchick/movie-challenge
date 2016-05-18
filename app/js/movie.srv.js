(function(){
    
    angular
        .module('coderMdb')
        .service('movieSrv', MovieService);

    function MovieService($http,$q) {
        var self = this;
        //In a real application this would be loaded from a server
        self.movies;
        // loadMovies();
        // getMovies();
        // self.blankMovie = MOVIE_BLANK;

        //function bindings
        self.getMovies = getMovies;
        self.getMovie = getMovie;
        // self.getBlank = getBlank;
        self.getNewMovie = getNewMovie;
        self.deleteMovie = deleteMovie;
        self.addMovie = addMovie;
        // self.saveMovies = saveMovies;
        // self.loadMovies = loadMovies;

        function getMovies(){
          return $http.get('/api/movies')
              .then(function(res){
                console.log(res.data)
                self.movies = res.data;
                return res.data;
              })

        };

        // function getBlank(){
        //   var newBlank = angular.copy(MOVIE_BLANK);
        //   //randomize imdbID
        //   newBlank[17].val = 'tt' + Math.floor(Math.random()*10000000);
        //   return newBlank;
        // }

        function getMovie(name){
          console.log(name)
          return $http.get('/api/movies/' + name)
              .then(function(res){
                console.log(res.data)
                return res.data;
              })
        };

        function getNewMovie(title){
          // console.log(title)
          title = title.replace(' ','+')
          // console.log(title)
          return $http.get('http://www.omdbapi.com/?t='+title+'&y=&plot=short&r=json');
        }

        function deleteMovie(id){
          return $http.delete('/api/movies/' + id)
        }

        function addMovie(movie){
          var __movie = JSON.stringify(movie)
          return $http.post('/api/movies/',__movie)
            .then(function(res){
              console.log(res)
            })
        }

        // function saveMovies(){
        //   localStorage.movies = JSON.stringify(self.movies)
        // }

        // function loadMovies(){
        //   // self.movies = MOVIE_DATA;
        //   self.movies = (localStorage.movies != undefined && typeof(JSON.parse(localStorage.movies))=='object' ? JSON.parse(localStorage.movies) : MOVIE_DATA);
        //   return self.movies;
        // }
    }

    var MOVIE_BLANK = [
      {key:"Title",val: ""},
      {key:"Year",val: ""},
      {key:"Rated",val: ""},
      {key:"Released",val: ""},
      {key:"Runtime",val: ""},
      {key:"Genre",val: ""},
      {key:"Director",val: ""},
      {key:"Writer",val: ""},
      {key:"Actors",val: ""},
      {key:"Plot",val: ""},
      {key:"Language",val: ""},
      {key:"Country",val: ""},
      {key:"Awards",val: ""},
      {key:"Poster",val: "img/default_poster.jpg"},
      {key:"Metascore",val: ""},
      {key:"imdbRating",val: ""},
      {key:"imdbVotes",val: ""},
      {key:"imdbID",val: ""},
      {key:"Type",val: "Movie"},
      {key:"Response",val: "True"}
    ]

})();
