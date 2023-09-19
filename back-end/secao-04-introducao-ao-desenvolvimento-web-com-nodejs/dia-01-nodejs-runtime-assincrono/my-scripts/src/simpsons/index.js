const fs = require('fs').promises;

const readFile = async (fileName) => {
  const file = await fs.readFile(`./src/simpsons/${fileName}.json`, 'utf-8');
  return JSON.parse(file);
};

const writeFile = async (fileName, content) => {
  await fs.writeFile(`./src/simpsons/${fileName}.json`, content);
};

const getAllSimpsons = async () => {
  const data = await readFile('simpsons');
  data.forEach((c) => console.log(`${c.id} - ${c.name}`));
};

const getSimpsonByID = async (id) => {
  const data = await readFile('simpsons');
  const simpson = data.find((char) => Number(char.id) === Number(id));

  if (!simpson) {
    throw new Error('id não encontrado');
  }

  console.log(simpson);
};

const deleteSimpson = async (id) => {
  const data = await readFile('simpsons');
  const updatedData = data.filter((char) => Number(char.id) !== id);
  console.log(updatedData);
};

const createSimpsonsFamily = async () => {
  const data = await readFile('simpsons');
  const family = data.filter(({ id }) => ['1', '2', '3', '4'].includes(id));
  await writeFile('simpsonFamily', JSON.stringify(family));
};

const postCharacter = async (fileName, character) => {
  const data = await readFile(fileName) || [];

  if (data.find((c) => c.name === character)) {
    throw new Error('O personagem já existe');
  }

  const nextID = Number(data.sort((a, b) => Number(a.id) - Number(b.id))[data.length - 1].id) + 1;
  const newData = [...data, { id: `${nextID}`, name: character }];
  await writeFile(fileName, JSON.stringify(newData));
};

const patchCharacter = async (fileName, character, newCharacter) => {
  const data = await readFile(fileName) || [];
  const newData = data.reduce((acc, curr) => {
    if (curr.name === character) {
      curr.name = newCharacter;
    }
    acc.push(curr);
    return acc;
  }, []);

  await writeFile(fileName, JSON.stringify(newData));
};

const functionToTests = async () => {
  // await getAllSimpsons();
  // await getSimpsonByID(1);
  await deleteSimpson(6);
  await deleteSimpson(10);
  await createSimpsonsFamily();
  await postCharacter('simpsonFamily', 'Nelson Muntz');
  await patchCharacter('simpsonFamily', 'Nelson Muntz', 'Maggie Simpson');
};
functionToTests();
