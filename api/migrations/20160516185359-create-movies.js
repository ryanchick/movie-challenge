'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      Year: {
        type: Sequelize.STRING
      },
      Rated: {
        type: Sequelize.STRING
      },
      Released: {
        type: Sequelize.STRING
      },
      Runtime: {
        type: Sequelize.STRING
      },
      Genre: {
        type: Sequelize.STRING
      },
      Director: {
        type: Sequelize.STRING
      },
      Writer: {
        type: Sequelize.STRING
      },
      Actors: {
        type: Sequelize.TEXT
      },
      Plot: {
        type: Sequelize.TEXT
      },
      Language: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      Awards: {
        type: Sequelize.TEXT
      },
      Poster: {
        type: Sequelize.TEXT
      },
      Metascore: {
        type: Sequelize.STRING
      },
      imdbRating: {
        type: Sequelize.STRING
      },
      imdbVotes: {
        type: Sequelize.STRING
      },
      imdbID: {
        type: Sequelize.STRING
      },
      Type: {
        type: Sequelize.STRING
      },
      Response: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Movies');
  }
};