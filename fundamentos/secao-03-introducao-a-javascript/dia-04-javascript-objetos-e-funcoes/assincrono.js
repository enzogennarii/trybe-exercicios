// Conteúdo Assíncrono do dia - Objetos e Funções

// Objetos

// let player = {
//   name : 'Marta',
//   lastName : 'Silva',
//   age : 34,
//   medals : { golden: 2, silver: 3 }
// };

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');


// For/in e For/of

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let i in names) {
//   console.log('Olá ' + names[i]);
// ;}


// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let key in car) {
//   console.log(key + ': ' + car[key]);
// };


// Funções

const a = 61;
const b = 14;
const c = 24;

// function soma(a, b) {
//   return a + b;
// }

// function subtrai(a, b) {
//   return a - b;
// }

// function multiplica(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// function modulo(a, b) {
//   return a % b;
// }

// console.log(modulo(a, b));


function maiorNum(x, y) {
  if (x > y) {
    return x + ' é maior que ' + y;
  } else if (y > x) {
    return y + ' é maior que ' + x;
  } else {
    return 'Os dois números são iguais';
  };
}

function maiorDe3Num(x, y, z) {
  if (x > y && x > z) {
    return x + ' é maior que ' + y + ' e ' + z;
  } else if (y > x && y > z) {
    return y + ' é maior que ' + x + ' e ' + z;
  } else if (z > x && z > y) {
    return z + ' é maior que ' + x + ' e ' + y;
  } else if (x === y && x > z) {
    return x + ' e ' + y + ' são iguais, e maiores que ' + z;
  } else if (x === z && x > y) {
    return x + ' e ' + z + ' são iguais, e maiores que ' + y;
  } else if (y === z && y > x) {
    return y + ' e ' + z + ' são iguais, e maiores que ' + x;
  } else {
    return 'Erro inesperado!';
  };
}

function isNegativeOrPositive(x) {
  if (x > 0) {
    return 'positive';
  } else if (x < 0) {
    return 'negative';
  } else {
    return 'zero';
  };
}

function isTriangle(x, y, z) {
  if (x + y + z < 0) {
    return 'Ângulo inválido!';
  }
  else if (x + y + z === 180) {
    return true;
  } else {
    return false;
  };
}
