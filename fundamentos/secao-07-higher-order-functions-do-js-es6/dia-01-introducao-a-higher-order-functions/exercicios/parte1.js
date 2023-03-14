const generateEmail = (fullName) => {
  const splitedNames = fullName.split(' ');
  const lowerCaseNames = splitedNames.forEach((name) => name.toLowerCase());
  console.log(lowerCaseNames);
};

generateEmail('Enzo Gennari');
