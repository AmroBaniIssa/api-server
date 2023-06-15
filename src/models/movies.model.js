"use strict";
const Movies = (sequelize, DataTypes) =>
  sequelize.define("movies", {
    movieName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

module.exports = Movies;
