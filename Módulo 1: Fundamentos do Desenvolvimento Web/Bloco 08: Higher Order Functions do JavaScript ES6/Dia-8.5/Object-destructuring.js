
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

const dadosUsuario = {...user, ...jobInfos};
//  console.log(dadosUsuario);

const {name, age, nationality, profession, squadInitials, squad} = dadosUsuario;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as ${profession} and my squad is ${squadInitials}-${squad}`);