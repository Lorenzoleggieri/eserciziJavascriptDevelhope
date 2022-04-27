const person = {
  firstName: 'John',
  lastName: 'Doe'
};

if (person.address && person.address.city){
  console.log(person.address.city);
} else if (person.address){
  console.log("Attezione! Proprietà City non esistente all'interno di person.address");
} else {
  console.log("Attenzione! Proprietà Address non esistente all'interno di person")
}


if (person.fullName) {
console.log(person.fullName());
}  else {
  console.log("Attenzione! Metodo fullName() non esistente all'interno di person")
}