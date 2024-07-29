import BankAccount from "./bank.account";
import Card from "./card";


export default class User {
    card!:Card;
    bankAccount!:BankAccount;
    name:string
    constructor(name:string) {
        this.name = name;
    }

    addCard(cvv:number, cardNumber:number ) {
        if (!this.bankAccount) {
            throw new Error("Add bank acount first.")
        }

        this.card = new Card(
            this.bankAccount,
            cvv,
            cardNumber
        );
        return this;
    }
    addBankAccount(bankAccount:BankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }

}