// Exercício da Aula ao Vivo

let num1 = 14;
let num2 = 14;
let resultado;

if (num1 === num2) {
  resultado = num1 + num2;
} else {
  resultado = num1 * num2;
}

console.log(resultado);


// Exercício 1 pós Aula ao Vivo 

const a = 61;
const b = 14;

let soma = a + b;
let subtrai = a - b;
let multiplica = a * b;
let divide = a / b;
let sobraDaDivisao = a % b;

console.log(soma);
console.log(subtrai);
console.log(multiplica);
console.log(divide);
console.log(sobraDaDivisao);


// Exercício 2 pós Aula ao Vivo

const aa = 23;
const bb = 24;
const cc = 25;
let maiorNum;

if (aa > bb && aa > cc) {
  maiorNum = aa;
} else if (bb > aa && bb > cc) {
  maiorNum = bb;
} else {
  maiorNum = cc;
}

console.log(maiorNum);


// Exercício 3 pós Aula ao Vivo

const num = 0;
let isNegativeOrPositive;

if (num > 0) {
  isNegativeOrPositive = 'Positive';
} else if (num < 0) {
  isNegativeOrPositive = 'Negative';
} else {
  isNegativeOrPositive = 'Zero';
}

console.log(isNegativeOrPositive);


// Exercício 4 pós Aula ao Vivo

const angulo1 = -30;
const angulo2 = 60;
const angulo3 = 90;

if (angulo1 + angulo2 + angulo3 === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log('São ângulos internos de um triângulo.');
} else if (angulo1 + angulo2 + angulo3 !== 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log('Não são ângulos internos de um triângulo.');
} else {
  console.log('Ângulos negativos são inválidos.');
}


// Exercício 5 pós Aula ao Vivo

const pecaDeXadrez = 'Dama';
let pecaDeXadrezMinuscula = pecaDeXadrez.toLowerCase();
let movimentacao;

switch (pecaDeXadrezMinuscula) {
  case 'peão':
    movimentacao = 'só pode andar para a frente e atacar nas diagonais em até uma casa, exceto em seu primeiro movimento, pois pode andar duas casas pra frente.'
    break;

  case 'torre':
    movimentacao = 'pode andar e atacar nas horizontais e verticais, sem limite de casas.'
    break;

  case 'cavalo':
    movimentacao = 'só pode andar e atacar em L, sendo duas casas para vertical/horizontal e uma casa para uma das casas perpendiculares da direção inicial, e é a única peça que pode pular outras peças no caminho.';
    break;

  case 'bispo':
    movimentacao = 'pode andar e atacar somente nas diagonais, sem limite de casas.';
    break;

  case 'rainha':
    movimentacao = 'pode andar e atacar em todas as direções, sem limite de casas.'
    break;

  case 'rei':
    movimentacao = 'anda em todas as direções, mas só uma casa por vez, exceto no roque.';
    break;

  default:
    movimentacao = 'não é uma peça de xadrez.';
    break;
}

console.log(pecaDeXadrez + ' ' + movimentacao);


// Exercício 6 pós Aula ao Vivo

const notaEmPorcentagem = 61;
let notaEmLetra;

if (notaEmPorcentagem >= 0 && notaEmPorcentagem < 50) {
  notaEmLetra = 'F';
} else if (notaEmPorcentagem >= 50 && notaEmPorcentagem < 60) {
  notaEmLetra = 'E';
} else if (notaEmPorcentagem >= 60 && notaEmPorcentagem < 70) {
  notaEmLetra = 'D';
} else if (notaEmPorcentagem >= 70 && notaEmPorcentagem < 80) {
  notaEmLetra = 'C';
} else if (notaEmPorcentagem >= 80 && notaEmPorcentagem < 90) {
  notaEmLetra = 'B';
} else if (notaEmPorcentagem >= 90 && notaEmPorcentagem <= 100) {
  notaEmLetra = 'A';
} else {
  console.log('Não é uma nota válida!');
}

console.log(notaEmLetra);


// Exercício 7 pós Aula ao Vivo

const numero1 = 5;
const numero2 = 7;
const numero3 = 9;
let isAnyEven;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
  isAnyEven = true;
} else {
  isAnyEven = false;
}

console.log(isAnyEven);


// Exercício 8 pós Aula ao Vivo

const number1 = 2;
const number2 = 4;
const number3 = 8;
let isAnyOdd;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
  isAnyOdd = true;
} else {
  isAnyOdd = false;
}

console.log(isAnyOdd);


// Exercício 9 pós Aula ao Vivo

const custo = 100;
const venda = 112;
let saldo;

if (venda < 0 || custo < 0) {
  console.log('ERRO! Valor(es) negativo(s) inválido(s).');
} else if ((venda * 1000) - (custo * 1.2 * 1000) > 0) {
  saldo = (venda * 1000) - (custo * 1.2 * 1000);
  console.log('Lucro de R$ ' + saldo);
} else if ((venda * 1000) - (custo * 1.2 * 1000) === 0) {
  console.log('ficou no zero a zero');
} else if ((venda * 1000) - (custo * 1.2 * 1000) < 0) {
  saldo = (venda * 1000) - (custo * 1.2 * 1000);
  console.log('Perda de R$ ' + saldo);
} else {
  console.log('Insira um valor válido.');
}


// Exercício 10 pós Aula ao Vivo

const salarioBruto = 3000;
const minSalarioParaINSS = 1302;
const minSalarioParaIR = 1903.99;
let custoINSS;
let custoIR;
let salarioLiquido;

// Para descobrir o valor de INSS a ser pago
if (salarioBruto >= minSalarioParaINSS && salarioBruto <= 1556.94) {
  custoINSS = salarioBruto * 0.08;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  custoINSS = salarioBruto * 0.09;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  custoINSS = salarioBruto * 0.11;
} else if (salarioBruto > 5189.82) {
  custoINSS = 570.88;
} else {
  custoINSS = 0;
}

const salarioComINSS = salarioBruto - custoINSS;

// Para descobrir o valor do IR a ser pago
if (salarioComINSS >= minSalarioParaIR && salarioComINSS <= 2826.65) {
  custoIR = (salarioComINSS * 0.075) - 142.8;
} else if (salarioComINSS > 2826.65 && salarioComINSS <= 3751.05) {
  custoIR = (salarioComINSS * 0.15) - 354.8;
} else if (salarioComINSS > 3751.05 && salarioComINSS <= 4664.68) {
  custoIR = (salarioComINSS * 0.225) - 636.13;
} else if (salarioComINSS > 4664.68) {
  custoIR = (salarioComINSS * 0.275) - 869.13;
} else {
  custoIR = 0;
}

salarioLiquido = salarioComINSS - custoIR;

console.log('Se o sálario bruto for de R$' + salarioBruto + ', descontando INSS e IR, o salário líquido é de R$' + salarioLiquido);