class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount >= 0) {
      this.#amount += amount;
    } else {
      console.log("Attenzione! Valore di deposito negativo!")
    }
  }

  withdraw(amount) {
    if (amount >= 0 && amount <= this.#amount) {
      this.#amount -= amount;
    } else if (amount > this.#amount) {
      console.log("Attenzione! Valore di prelievo superiore a quello del conto!")
    } else {
      console.log("Attenzione! E' impossibile prelevare un valore negativo!")
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();