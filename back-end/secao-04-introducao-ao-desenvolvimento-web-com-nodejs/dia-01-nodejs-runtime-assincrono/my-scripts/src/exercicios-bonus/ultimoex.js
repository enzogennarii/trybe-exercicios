const calc = async (a, b, c) => {
  const validations = [a, b, c];
  validations.forEach(num => {
    if (typeof num !== 'number') {
      throw new Error('Informe apenas números');
    }
  });

  const calc = (a + b) * c;
  if (calc >= 50) {
    return calc;
  } else {
    throw new Error('Valor muito baixo');
  }
};

const main = async () => {
  console.log(await calc(20, 20, 50));
};
main();
