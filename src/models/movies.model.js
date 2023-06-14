'use strict';
const Movies = (sequelize, DataTypes) =>
    sequelize.define("people", {
       movieName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.STRING,
        },
        overview: {
            type: DataTypes.STRING,
        }
    })


module.exports = Movies;