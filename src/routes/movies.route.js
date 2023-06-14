const express = require('express');
const moviesRouter = express.Router();
const { Movies } = require('../models/index');
moviesRouter.get("/movies", getMovies);
moviesRouter.get("/movies/:id", getMovie);
moviesRouter.post("/movies", createMovie);
moviesRouter.put("/movies/:id", updateMovie);
moviesRouter.delete("/movies/:id", deleteMovie);
async function getMovies(req, res) {
    let moviesResult = await Movies.findAll();
    res.status(200).json(moviesResult);
}
async function getMovie(req, res) {
    const movieId = parseInt(req.params.id);
    let movie = await Movies.findOne({
        where: {
            id: movieId
        }
    })
    res.status(200).json(movie);
}
async function createMovie(req, res) {
    let newMovie = req.body;
    let movie = await Movies.create(newMovie);
    res.status(201).json(movie);
}
async function updateMovie(req, res) {
    let movieId = parseInt(req.params.id);
    let updateMovie = req.body;
    let foundMovie = await Movies.findOne({ where: { id: movieId } });
    let updatedMovie = await foundMovie.update(updateMovie);
    res.status(201).json(updatedMovie);
}
async function deleteMovie(req, res) {
    let movieId = parseInt(req.params.id);
    let deleteMovie = await Movies.destroy({ where: { id: movieId } });
    res.status(204).json(deleteMovie);
}

module.exports = moviesRouter;