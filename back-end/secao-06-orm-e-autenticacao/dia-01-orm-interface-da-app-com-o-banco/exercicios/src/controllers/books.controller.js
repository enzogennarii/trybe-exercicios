const { BooksService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const getById = async (req, res) => {
  try {
    const book = await BooksService.getById(req.params.id);
    return res.status(200).json(book);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const create = async (req, res) => {
  try {
    const newBook = await BooksService.create(req.body);
    return res.status(201).json(newBook);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const update = async (req, res) => {
  try {
    const updatedBook = await BooksService
      .update(req.params.id, req.body);
    return res.status(200).json(updatedBook);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const remove = async (req, res) => {
  try {
    const serviceResponse = await BooksService.remove(req.params.id);
    return res.status(200).json(serviceResponse);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
