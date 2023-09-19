const readline = require('readline-sync');

const calcBMI = require('./bmi');

const userWeight = readline
  .questionFloat('Qual o seu peso (kg)?  ');

const userHeight = readline
  .questionFloat('Qual a sua altura (em cm)?  ');

calcBMI(userWeight, userHeight);
