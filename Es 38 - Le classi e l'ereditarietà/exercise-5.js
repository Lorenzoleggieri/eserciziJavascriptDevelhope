class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  get value() {
    return (this.#amount)
  }

  set value(value) {
    this.#amount = value;
  }
}

class BankAccountVip extends BankAccount {
  constructor(value) {
    super(value)
  }
  deposit(depositvalue) {
    if (this.amount >= 1000) {
      this.value = this.value + depositvalue + (depositvalue * 3 / 100)
    } else {
      this.value += depositvalue;
    }
  }
}


const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();