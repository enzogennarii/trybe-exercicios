// Exercícios do conteúdo assíncrono - Array Destructuring
// Exercício 1

const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [ fstPrimeNumber, sndPrimeNumber, trdPrimeNumber ] = primeNumbers;

sum(fstPrimeNumber, trdPrimeNumber);


// Exercício 2

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);


// Exercício 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);
