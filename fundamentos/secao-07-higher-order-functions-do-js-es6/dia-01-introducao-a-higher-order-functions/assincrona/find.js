const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui
const divisivelPor3e5 = numbers.find((number) => {
  return number % 3 === 0 && number % 5 === 0;
});
console.log(divisivelPor3e5);


const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const primeiroNomeCom5Letras = names.find((name) => name.length === 5);
console.log(primeiroNomeCom5Letras);


const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui
const id31031685 = musicas.find((musica) => musica.id === '31031685');
console.log(id31031685);
