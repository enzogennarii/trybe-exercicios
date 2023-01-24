// Exercícios pós Aula ao Vivo

// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])
// }

let somatoria = 0;

// for (let number of numbers) {
//   somatoria = somatoria + number;
// }
// console.log(somatoria)

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma = soma + i;
}
let mediaAritmetica = (soma / numbers.length);
console.log(soma);
