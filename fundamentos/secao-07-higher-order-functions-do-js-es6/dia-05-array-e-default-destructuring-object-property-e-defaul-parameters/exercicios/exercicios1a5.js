// Exercícios pós Aula Síncrona
// Exercício 1

const myList = [5, 2, 3];

// escreva swap abaixo

const swap = ([fst, scd, trd]) => ([trd, scd, fst]);
console.log(swap(myList));


// Exercício 2

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([modelo, marca, ano]) => ({modelo, marca, ano});
console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));


// Exercício 3
// escreva greet abaixo

const greet = (nome, saudacao = 'Hi') => `${saudacao}, ${nome}`;

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'


// Exercício 4

const estudante1 = {
  name: `Claudia`,
  lastName: `Farias`,
  age: 23,
}

const estudante2 = {
  name: `Vitor`,
  age: 20,
}

// escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`

const getLastName = ({lastName = 'lastName não preenchido'}) => lastName;

console.log(getLastName(estudante1));
console.log(getLastName(estudante2));

// Exercício 5

const moreStudents = [
  'Chris', 
  ['Ahmad', 'Antigoni'], 
  ['Toby', 'Sam']
];

// Escreva seu código aqui
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);
