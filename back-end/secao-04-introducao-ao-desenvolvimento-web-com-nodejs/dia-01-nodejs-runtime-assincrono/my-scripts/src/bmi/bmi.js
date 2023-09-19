const calcBMI = (weight, height) => {
  const bmi = weight / ((height / 100) ** 2);
  const roundedBMI = bmi.toFixed(2);

  if (bmi < 18.5) {
    console.log(`${roundedBMI}, abaixo do peso (magreza)`);
    return;
  }

  if (bmi >= 18.5 && bmi < 25) {
    console.log(`${roundedBMI}, peso normal`);
    return;
  }

  if (bmi >= 25 && bmi < 30) {
    console.log(`${roundedBMI}, acima do peso (sobrepeso)`);
    return;
  }

  if (bmi >= 30 && bmi < 35) {
    console.log(`${roundedBMI}, obesidade grau 1`);
    return;
  }

  if (bmi >= 35 && bmi < 40) {
    console.log(`${roundedBMI}, obesidade grau 2`);
    return;
  }

  console.log(`${roundedBMI}, obesidade grau 3 e 4`);
};

module.exports = calcBMI;
