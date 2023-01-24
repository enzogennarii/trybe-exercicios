// Assíncrono - Exercício 1

const myName = 'Enzo';
const birthCity = 'São Paulo';
let birthYear = 2002;

console.log(myName, birthCity, birthYear);

birthYear = 2023;

console.log(birthYear);

birthCity = 'Jundiaí';

console.log(birthCity);

// Alterar valores de variáveis só é possível quando se trata de uma variável let, const não é possível reatribuir valor.


// Assíncrono - Exercício 2

let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge); 

patientId = '50';

console.log(typeof patientId);


// Assíncrono - Exercício 3

const base = 5;
const heigth = 8;
const area = base * heigth;

console.log(area);

const perimeter = (2*base) + (2*heigth);

console.log(perimeter);


// Assíncrono - Exercício 4

const nota = 61;

if (nota >= 80 && nota <= 100) {
  console.log('Parabéns, você faz parte do grupo das pessoas aprovadas!');
} else if (nota < 80 && nota >= 60) {
  console.log('Você está na nossa lista de espera');
} else if (nota < 60 && nota >= 0) {
  console.log('Infelizmente, você reprovou.');
} else {
  console.log('Não é uma nota válida!');
}


// Assíncrono - Exercício 5

const currentHour = 20;
let message = '';

if (currentHour >= 22 && currentHour < 24) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11) {
  message = 'Hmmm, cheiro de café recém-passado';
} else if (currentHour >= 0 && currentHour < 4) {
  message = 'Não era melhor estar descansando?';
} else {
  message = 'Não é um horário válido!';
};

console.log(message);


// Assíncrono - Exercício 6

let weekDay = 'quarta-feira';

if (weekDay == 'segunda-feira' || weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay == 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay == 'sábado' || weekDay == 'domingo') {
  console.log('FINALMENTE, descanso merecido UwU');
} else {
  console.log('Não é um dia da semana válido!');
}


// Assíncrono - Exercício 7

let statusDaProva = 'reprovado';
let resultado;

switch (statusDaProva) {
  case 'aprovado':
  resultado = 'Parabéns, você foi aprovada(o)!';
  break;

  case 'lista':
  resultado = 'Você está na nossa lista de espera';
  break;

  case 'reprovado':
  resultado = 'Você foi reprovada(o)';
  break;

  default:
  resultado = 'Informação inválida'; 
}

console.log(resultado);