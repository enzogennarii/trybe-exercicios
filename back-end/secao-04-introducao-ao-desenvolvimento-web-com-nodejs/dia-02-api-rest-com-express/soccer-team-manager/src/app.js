const express = require('express');

const app = express();
app.use(express.json());

// requisição no rota raíz, exibindo mensagem de sucesso
app.get('/', (req, res) => res.status(200).json({ message: 'Hello World!' }));

// lista de times
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// requisição para buscar toda a lista de times
app.get('/teams', (req, res) => res.status(200).json({ teams }));

// requisição para buscar um time específico pelo id
app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const teamSearched = teams.find((team) => team.id === Number(id));

  if (!teamSearched) {
    return res.status(404).json({ message: 'Team not found' });
  }

  res.status(200).json({ ...teamSearched });
});

// requisição para adicionar um novo time à lista de times
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// requisição para alterar os dados de um time já existente
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
});

// requisição para deletar um time existente
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;
