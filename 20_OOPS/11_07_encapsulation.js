class BankAccount{
    #balance=0; //private data member
    deposit(amount){
        this.#balance+=amount;
        return this.#balance;
    }

    getBalance(){

        return `$ ${this.#balance} `;
    }

}


let accountRohit=new BankAccount();
console.log(accountRohit.getBalance())
