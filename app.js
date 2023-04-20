const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['Adam', 'Marcin', 'Eryk', 'Damian', 'Stefan', 'Stasiek'];
const femaleNames = [
  'Ewa',
  'Gosia',
  'Hanna',
  'Zuzanna',
  'Aleksandra',
  'Monika'
];
const lastNames = [
  'Olczak',
  'Kondej',
  'Nocul',
  'Marczak',
  'Dziubak',
  'Borowik',
  'Podgrzybek',
  'Prokop',
  'Lato',
  'Niedziela',
  'Lipiec',
  'Maj'
];

function randChoice(arr) {
  return Math.floor(Math.random() * arr.length);
}

const people = [];

const loopTime = 20;

for (let loop = 0; loop < loopTime; loop++) {
  const person = {};
  person.gender = genders[randChoice(genders)];
  if (person.gender === 'male') person.name = maleNames[randChoice(maleNames)];
  if (person.gender === 'female')
    person.name = femaleNames[randChoice(maleNames)];
  person.lastName = lastNames[randChoice(lastNames)];
  person.age = Math.floor(Math.random() * (78 - 18) + 18);
  person.email = `${person.name.toLowerCase()}.${person.lastName.toLowerCase()}@gmail.com`;
  person.phoneNumber = `+48 ${Math.floor(Math.random() * 1000000000)}`;
  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log(people, 'File has been generated!');
});
