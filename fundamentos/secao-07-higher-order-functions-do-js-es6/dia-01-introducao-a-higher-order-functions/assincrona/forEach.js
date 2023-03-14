const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui
emailListInData.forEach((email, index, array) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados na posição ${index + 1} de um total de ${array.length}`);
});
