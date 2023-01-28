// Exercícios pós Aula ao Vivo

// function imprimeIdade() {
//   for (let idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade);
//   };
// ;}
// imprimeIdade()


// // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
// let pessoa = {
//   nome: 'Henri',
//   idade: 20
// }
// pessoa = {
//   nome: 'Luna',
//   idade: 19
// } // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);


// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);


// const name = 'Adriana';
// const lastName = 'Soares';
// console.log(`Olá, ${name} ${lastName}!`);
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);


// const numeroAleatorio = () => Math.random();

// console.log(numeroAleatorio());


// let nome = 'Ivan';
// let hello = nome => `Olá, ${nome}!`

// console.log(hello(nome));


// let nome = 'Ivan';
// let sobrenome = 'Pires';
// let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`

// console.log(nomeCompleto(nome, sobrenome));


// let speed = 90;
// const speedCar = speed => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;

// console.log(speedCar(speed));


// Exercício Bônus

// 1

let nome = 'Enzo';

const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  
  for (let i = 0; i < frase.length; i += 1) {
    (frase[i] === 'x') ? frase[i] = nome : frase[i] === frase[i];
  };
  return frase;
};

// console.log(substituaX('Enzo'));

// 2

function minhasSkills(substituaX) {
  const skills = ['HTML5', 'CSS3', 'JavaScript'];
  let fraseSkills = `${substituaX}\nMinhas três principais habilidades são: ${skills}`;
  return fraseSkills;
};

console.log(minhasSkills(substituaX(nome)));