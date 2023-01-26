// Exercícios em Grupo durante a Aula ao Vivo

// Exercício 1
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let somaTotal = 0;

// for (let index = 1; index <= 50; index += 1) {
//   somaTotal += index;
// }

// console.log('A soma total de 1 a 50 é: ' + somaTotal);


// Exercício 2
// // Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// // Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let contador = 0;

// for (let index = 2; index <= 150; index += 1) {
//   if (index % 3 === 0) {
//     contador += 1;
//   };
// };

// console.log(contador);
// if (contador === 50) {
//   console.log('Ao infinito e além!');
// };


// Exercício 3
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let player1 = 'Tesoura';
// let player2 = 'Tesoura';
// let jogadaP1 = player1.toLowerCase();
// let jogadaP2 = player2.toLowerCase();
// let resultado = '';

// if (jogadaP1 === 'pedra') {
//   if (jogadaP2 === 'pedra') {
//     resultado = 'Empate';
//   } else if (jogadaP2 === 'papel') {
//     resultado = 'Jogador 2 vence';
//   } else if (jogadaP2 === 'tesoura') {
//     resultado = 'Jogador 1 vence';
//   } else {
//     resultado = 'Erro inesperado!';
//   };
// };
// if (jogadaP1 === 'papel') {
//   if (jogadaP2 === 'pedra') {
//     resultado = 'Jogador 1 vence';
//   } else if (jogadaP2 === 'papel') {
//     resultado = 'Empate';
//   } else if (jogadaP2 === 'tesoura') {
//     resultado = 'Jogador 2 vence';
//   } else {
//     resultado = 'Erro inesperado!';
//   };
// };
// if (jogadaP1 === 'tesoura') {
//   if (jogadaP2 === 'pedra') {
//     resultado = 'Jogador 2 vence';
//   } else if (jogadaP2 === 'papel') {
//     resultado = 'Jogador 1 vence';
//   } else if (jogadaP2 === 'tesoura') {
//     resultado = 'Empate';
//   } else {
//     resultado = 'Erro inesperado!';
//   };
// };

// console.log(resultado);


// Exercício 4
// Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.

// let age = 16;

// age >= 18 ? console.log('A pessoa é maior de idade') : console.log('A pessoa é menor de idade.');


// Exercício 5
// Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let ageCarolzita = 38;
// let ageFlavio = 40;
// let ageNoel = 38;
// let younger = '';

// if (ageCarolzita === ageFlavio && ageCarolzita < ageNoel) {
//   younger = 'Carolzita e Flavio são os mais jovens, ambos com ' + ageCarolzita + ' anos de idade.';
// } else if (ageCarolzita === ageNoel && ageCarolzita < ageFlavio) {
//   younger = 'Carolzita e Noel são os mais jovens, ambos com ' + ageCarolzita + ' anos de idade.';
// } else if (ageFlavio === ageNoel && ageFlavio < ageCarolzita) {
//   younger = 'Flavio e Noel são os mais jovens, ambos com ' + ageFlavio + ' anos de idade.';
// } else if (ageCarolzita < ageFlavio && ageCarolzita < ageNoel) {
//   younger = 'Carolzita é a mais jovem, com ' + ageCarolzita + ' anos de idade.';
// } else if (ageFlavio < ageCarolzita && ageFlavio < ageNoel) {
//   younger = 'Flavio é o mais jovem, com ' + ageFlavio + ' anos de idade.';
// } else if (ageNoel < ageCarolzita && ageNoel < ageFlavio) {
//   younger = 'Noel é o mais jovem, com ' + ageNoel + ' anos de idade.';
// }

// console.log(younger);


// Exercícios pós Aula ao Vivo

// Exercício 1
// let number = 10;
// let fatorial = 1;

// for (let i = number; i > 0; i -= 1) {
//   fatorial = fatorial * i;
// };

// console.log(fatorial);


// Exercício 2
// let word = 'tryber';

// for (let i = ;  ; i  1) {

// }


// Exercício 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i += 1) {
  if (maiorPalavra.length < array[i].length) {
    maiorPalavra = array[i];
  };
};

for (let i = 0; i < array.length; i += 1) {
  if (menorPalavra.length > array[i].length) {
    menorPalavra = array[i];
  };
};

console.log(maiorPalavra);
console.log(menorPalavra);


// Exercício 4
