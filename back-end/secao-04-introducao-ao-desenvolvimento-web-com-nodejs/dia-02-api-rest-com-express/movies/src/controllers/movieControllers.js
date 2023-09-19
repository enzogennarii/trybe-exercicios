const readMovies = require("../helpers/readMovies");
const writeMovies = require("../helpers/writeMovies");

const getAllMovies = async (_req, res) => {
  try {
    const movies = await readMovies();
    res.status(200).json(movies);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}

const getMovieByID = async (req, res) => {
  try {
    const movies = await readMovies();
    const { id } = req.params;
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) return res.status(404).json({ message: 'Filme não encontrado!' });

    res.status(200).json(movie);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getMovieByQuery = async (req, res) => {
  try {
    const movies = await readMovies();
    const query = req.query.q.toLowerCase();
    const searchResults = movies.filter((m) => m.movie.toLowerCase().includes(query));

    res.status(200).json(searchResults);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const postMovie = async (req, res) => {
  try {
    const movies = await readMovies();
    const newMovie = req.body;
    const nextID = movies.sort((a, b) => a.id - b.id)[movies.length - 1].id + 1;
    newMovie.id = nextID;
    const updatedMovies = [...movies, newMovie];
    await writeMovies(updatedMovies);
    res.status(200).json(newMovie);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateMovie = async (req, res) => {
  try {
    const movies = await readMovies();
    const id = Number(req.params.id);
    const { body } = req;
    const updatedMovies = movies.reduce((acc, curr) => {
      if (curr.id === id) {
        curr = { id, ...body };
      }
      acc.push(curr);
      return acc;
    }, []);
    await writeMovies(updatedMovies);
    res.status(200).end();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movies = await readMovies();
    const id = Number(req.params.id);
    const updatedMovies = movies.filter((m) => m.id !== id);
    await writeMovies(updatedMovies);
    res.status(200).end();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllMovies,
  getMovieByID,
  getMovieByQuery,
  postMovie,
  updateMovie,
  deleteMovie,
};
