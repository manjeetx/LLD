

export default class BankAccount {
    id:number;
    balance:number;
    private static lastId:number = 0;
    constructor(balance:number) {
        this.id = ++BankAccount.lastId;
        this.balance = balance;
    }
}