// Exercícios - Academia de Lógica - Dia3.2

// Exercício 1

// let ageMarina = 27;
// let ageSilvia = 18;
// let ageIza = 63;

// if (ageMarina > ageSilvia && ageMarina > ageIza) {
//   console.log('Marina é a pessoa mais velha e possui ' + ageMarina + ' anos de idade.');
// } else if (ageSilvia > ageMarina && ageSilvia > ageIza) {
//   console.log('Silvia é a pessoa mais velha e possui ' + ageSilvia + ' anos de idade.');
// } else if (ageIza > ageMarina && ageIza > ageSilvia) {
//   console.log('Iza é a pessoa mais velha e possui ' + ageIza + ' anos de idade.');
// } else if (ageMarina === ageSilvia && ageMarina > ageIza) {
//   console.log('Marina e Silvia são as mais velhas, as duas possuem ' + ageMarina + ' anos de idade.');
// } else if (ageMarina === ageIza && ageMarina > ageSilvia) {
//   console.log('Marina e Iza são as mais velhas, as duas possuem ' + ageMarina + ' anos de idade.');
// } else if (ageSilvia === ageIza && ageSilvia > ageMarina) {
//   console.log('Silvia e Iza são as mais velhas, as duas possuem ' + ageMarina + ' anos de idade.');
// } else {
//   console.log('Erro inseperado!');
// }


// Exercício 2

let age = 28;
let sex = 'M';
let sexUpper = sex.toUpperCase();
let weight = 72;
let height = 172;
let calculoTMB = 0;

  if (age === 0 || weight === 0 || height === 0) {
    console.log('Idade, peso ou altura não podem receber o valor de 0.');
  } else if (sexUpper === 'M') {
  calculoTMB = ((height * 6.25) + (weight * 9.99) - (age * 4.92) + 5);
} else if (sex === 'F') {
  calculoTMB = ((height * 6.25) + (weight * 9.99) - (age * 4.92) - 161);
} else {
  console.log('Erro inesperado!');
};

console.log('A taxa metabólica basal é de: ' + calculoTMB + ' Kcal');


// Exercício 3

// A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.

// Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida.

// Ou seja, se o número for 2 o código deve imprimir no terminal "2 - McTrybe".

// Tabela:

// "1 - Trybe Lanche Feliz"

// "2 - McTrybe"

// "3 - TrybeWooper"

// "4 - X-Trybe"

// "5 - Triplo Trybe com JS"

// Caso a pessoa escolha uma opção inexistente, imprima no terminal:

// "Ainda não possuímos esta opção :("