import BankAccount from "./bank.account"


export default class Card {
    cardNumber:number
    cvv:number
    bankAccount:BankAccount
    static PIN_NUMBER:number = 1234

    constructor(bankAccount:BankAccount, cvv:number,
      cardNumber:number
    ) {
        this.bankAccount = bankAccount;
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    isPinCorrect(pin:number) {
        return pin == Card.PIN_NUMBER;
    }

    withdraw(amount:number) {
        this.bankAccount.balance -= amount;
    }
}