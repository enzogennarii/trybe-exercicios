const fs = require('fs').promises;

const readMovies = async () => {
  const data = await fs.readFile('./src/movies.json', 'utf-8');
  return JSON.parse(data);
};

module.exports = readMovies;
