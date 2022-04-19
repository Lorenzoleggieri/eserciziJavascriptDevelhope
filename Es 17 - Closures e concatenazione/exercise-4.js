function calculate() {
let value = 0;
return {
  add(ValoreAddizione) {
    value = value + ValoreAddizione
    return this;
  },
  multiply(ValoreMoltiplicazione) {
    value = value * ValoreMoltiplicazione
    return this;
  },
  sub(ValoreSottrazione) {
    value = value - ValoreSottrazione
    return this;
  },
  divide(ValoreDivisione) {
    value = value / ValoreDivisione
    return this;
  },
  printResult() {
    console.log(value)
  }
}
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7