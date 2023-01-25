// Exercícios pós Aula ao Vivo

// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])
// }


// let somatoria = 0;

// for (let number of numbers) {
//   somatoria = somatoria + number;
// }
// console.log(somatoria)


// let soma = 0;
// let mediaAritmetica = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   soma = soma + numbers[i];
// };

// mediaAritmetica = (soma / numbers.length);

// if (mediaAritmetica > 20) {
//   console.log('Valor maior que 20');
// } else if (mediaAritmetica < 20) {
//   console.log('Valor menor que 20');
// } else {
//   console.log(mediaAritmetica);
// };


// let higher = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (higher < numbers[i]) {
//     higher = numbers[i];
//   } else {};
// };

// console.log(higher);


// let oddsNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     oddsNumbers.push(numbers[i]);
//   } else {};
// };

// if (oddsNumbers.length === 0){
//   console.log('nenhum valor ímpar encotrado');
// } else {};

// console.log(oddsNumbers);


// let lower = numbers[0];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (lower > numbers[i]) {
//     lower = numbers[i];
//   };
// };

// console.log(lower);


// let oneToTwentyFive = [];

// for (let i = 0; i < 25; i += 1) {
//   oneToTwentyFive[i] = i + 1;
// };

// // console.log(oneToTwentyFive);

// for (let i = 0; i < 25; i += 1) {
//   console.log((oneToTwentyFive[i] / 2));
// };


// for (let i = 0; i < numbers.length; i += 1) {
//   for (let i2 = 0; i2 < i; i2 += 1) {
//     if (numbers[i] < numbers[i2]) {
//       let position = numbers[i];
//       numbers[i] = numbers[i2];
//       numbers[i2] = position;
//     };
//   };
// };

// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   for (let i2 = 0; i2 < i; i2 += 1) {
//     if (numbers[i] > numbers[i2]) {
//       let position = numbers[i];
//       numbers[i] = numbers[i2];
//       numbers[i2] = position;
//     };
//   };
// };

// console.log(numbers);


// let multipliedNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (i === (numbers.length - 1)) {
//   multipliedNumbers.push(numbers[i] * 2);
//   } else {
//   multipliedNumbers.push(numbers[i] * numbers[i + 1]);
//   }
// };

// console.log(multipliedNumbers);