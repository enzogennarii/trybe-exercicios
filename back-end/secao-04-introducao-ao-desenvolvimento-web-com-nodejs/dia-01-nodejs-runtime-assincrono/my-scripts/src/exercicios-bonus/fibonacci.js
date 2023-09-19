const readline = require('readline-sync');

const fibonacci = (n) => {
  const sequence = [];

  if (!Number.isInteger(Number(n)) || n <= 0) {
    return console.log('O número informado precisa ser um número inteiro maior que zero!');
  }

  for (let i = 0; i < Number(n); i += 1) {
    if (i === 0 || i === 1) {
      sequence.push(1);
    } else {
      const nextNum = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNum);
    }
  }

  sequence.forEach((num) => console.log(num));
};

const length = readline.questionInt('Digite um valor para o tamanho da sequência de Fibonacci que deseja: ');
fibonacci(length);
