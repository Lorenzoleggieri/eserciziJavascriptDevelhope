function getKeys(obj) {
  let arraychiavi = [];
  for(let keys in obj){
    arraychiavi.push(keys);
  }
  return arraychiavi
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);