const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione seu código aqui
// Ordem crescente de idade
people.sort((a, b) => a.age - b.age);
console.log(people);

// Ordem decrescente de idade
people.sort((a, b) => b.age - a.age);
console.log(people);
