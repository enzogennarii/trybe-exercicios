const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(Number(id));
  return !book ? {} : book;
};

const create = async (newBookData) => {
  const { title, author, pageQuantity } = newBookData;
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (bookId, newBookData) => {
  const { title, author, pageQuantity } = newBookData;
  const [wasItUpdated] = await Book.update(
    { title, author, pageQuantity },
    { where: { id: Number(bookId) } },
  );
  return { message: wasItUpdated ? 'Book updated!' : 'Book not found' };
};

const remove = async (bookId) => {
  const deletedRows = await Book.destroy({
    where: { id: Number(bookId) },
  });
  return { message: deletedRows ? 'Book deleted!' : 'Book not found' };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
