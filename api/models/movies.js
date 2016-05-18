'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movies = sequelize.define('Movies', {
    Title: DataTypes.STRING,
    Year: DataTypes.STRING,
    Rated: DataTypes.STRING,
    Released: DataTypes.STRING,
    Runtime: DataTypes.STRING,
    Genre: DataTypes.STRING,
    Director: DataTypes.STRING,
    Writer: DataTypes.STRING,
    Actors: DataTypes.TEXT,
    Plot: DataTypes.TEXT,
    Language: DataTypes.STRING,
    Country: DataTypes.STRING,
    Awards: DataTypes.TEXT,
    Poster: DataTypes.TEXT,
    Metascore: DataTypes.STRING,
    imdbRating: DataTypes.STRING,
    imdbVotes: DataTypes.STRING,
    imdbID: DataTypes.STRING,
    Type: DataTypes.STRING,
    Response: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Movies;
};