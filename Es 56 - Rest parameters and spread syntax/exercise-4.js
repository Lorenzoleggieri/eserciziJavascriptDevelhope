function sum(...entries) {
  return entries.reduce((sum, current) => sum + current, 0);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));