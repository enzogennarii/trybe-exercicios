const fs = require('fs').promises;

const writeMovies = async (content) => {
  await fs.writeFile('./src/movies.json', JSON.stringify(content));
};

module.exports = writeMovies;
