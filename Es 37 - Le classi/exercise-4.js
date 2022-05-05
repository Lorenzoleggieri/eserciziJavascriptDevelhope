class BankAccount {
constructor (value){
    this.value = value;
}
deposit(depositvalue){
    this.value += depositvalue
}
withdraw(withdrawvalue){
    this.value -= withdrawvalue;
}
view(){
    console.log(this.value);
}
}


const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();
