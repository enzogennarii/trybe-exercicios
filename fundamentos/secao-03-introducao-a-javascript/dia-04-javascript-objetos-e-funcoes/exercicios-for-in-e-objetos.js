// Exercícios pós Aula ao Vivo

// Exercícios de Objetos e For/in

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem vinda, ' + info.personagem);

// info.recorrente = 'Sim';

// console.log(info);

// for (let key in info) {
//   console.log(key);
// }

// for (let chave in info) {
//   console.log(info[chave])
// }

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// }

// let recorrencia = '';

// for (let key in info) {
//   if (key === 'recorrente' && info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
//     recorrencia = 'Ambos recorrentes';
//   };
// };

// console.log(`${info.personagem} e ${info2.personagem}\n
// ${info.origem} e ${info2.origem}\n
// ${info.nota} e ${info2.nota}\n
// ${recorrencia}`);


// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0]['titulo']}".`);

// leitor.livrosFavoritos[1] = {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// };

// console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);
