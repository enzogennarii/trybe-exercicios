const express = require('express');
const {
  getMovieByID,
  getAllMovies,
  postMovie,
  updateMovie,
  deleteMovie,
  getMovieByQuery
} = require('./controllers/movieControllers');

const app = express();
app.use(express.json());

app.listen(2912, () => console.log('Server online!'));

app.get('/movies/search', getMovieByQuery);

app.get('/movies/:id', getMovieByID);

app.get('/movies', getAllMovies);

app.post('/movies', postMovie);

app.put('/movies/:id', updateMovie);

app.delete('/movies/:id', deleteMovie);

module.exports = app;
