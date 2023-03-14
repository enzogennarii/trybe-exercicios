
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userAndJobs = { ...user, ...jobInfos };

const { name, age, nationality, profession, squad, squadInitials } = userAndJobs;

const textMessage = `Hi, my name is ${name}, Im ${age} years old and Im ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(textMessage);
