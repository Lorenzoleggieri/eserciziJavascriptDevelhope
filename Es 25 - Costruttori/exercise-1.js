const person = {
  get firstName(){
    return this.nome
  },
  set firstName(name){
    this.nome = name
  },
  get lastName(){
    return this.cognome
  },
  set lastName(name){
    this.cognome = name
  },
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const john = Object.create(person)
john.firstName = 'John'
john.lastName = 'Doe'

const simon = Object.create(person)

simon.firstName = 'Simon'
simon.lastName = 'Collins'

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins