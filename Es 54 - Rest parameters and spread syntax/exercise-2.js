const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, ...otherStuff} = person

console.log(id, otherStuff);