const express = require('express');
const {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalOf,
} = require('./cacauTrybe');

const app = express();

app.get('/chocolates', async (_req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
  const { chocolates } = await getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.params;
  console.log(name);
  res.status(200).end();
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

module.exports = app;
