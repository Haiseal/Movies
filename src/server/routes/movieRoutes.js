// movieRoutes.js
const express = require('express');
const router = express.Router();
const movieHandler = require('../handlers/movieHandler');
const userHandler = require('../handlers/userHandler');

// Route to get all movies
router.get('/movies', movieHandler.getMovies);

// Route to get a single movie by ID
router.get('/movies/:id', movieHandler.getMovieById);

// Route to add a new movie
router.post('/movies', movieHandler.addMovie);

// Route to update a movie
router.put('/movies/:id', movieHandler.updateMovie);

// Route to delete a movie
router.delete('/movies/:id', movieHandler.deleteMovie);

module.exports = router;
