// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'banana', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'morango', 'manga'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
