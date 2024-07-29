import Atm from "../atm";
import Card from "../card";
import CashProcessor from "../cash-processor/cash.processor";
import FiveHundredCashProcessor from "../cash-processor/five.hundred.cash.processor";
import HundredCashProcessor from "../cash-processor/hundred.cash.processor";
import ThousandCashProcessor from "../cash-processor/thousand.cash.processor";
import HasCardState from "./has-card.state";
import { IdleState } from "./idle.state";
import State from "./state";


export class WidhdrawCashState extends State {
    constructor() {
        super()
        console.log("ATM IS IN WIDHDRAW CASH STATE");
    }
    withDrawCash(atm: Atm, amount: number): void {
        if (amount > atm.balance) {
           return this.unableToCompleteTransaction(atm);
        }
        const cashProcessor = new ThousandCashProcessor(
            new FiveHundredCashProcessor(
                new HundredCashProcessor( null)
            )
        );
        const money = new Map();
        cashProcessor.withdraw(atm, money, amount)
        if (money.size == 0) {
            return this.unableToCompleteTransaction(atm);
        }
        this.disparseCash(atm, money, amount);
        
    }
    
    private unableToCompleteTransaction(atm:Atm) {
        console.log(`
            Amount not available in ATM.
            Transaction can not be completed.
        `);
        return this.returnCard(atm)
    }
    returnCard(atm: Atm): void {
        console.log("Returning Card..");
        atm.removeCard();
        atm.setState(new IdleState())
    }
    disparseCash(atm: Atm, money: Map<string, number>, amount: number): void {
        for (const [moneyType, notes] of money) {
            atm.removeMoney(moneyType, notes);
        }
        const disburseMsg = `
            Transaction Successful for amount ${amount}.
            Please collect cash.
        `;
        console.log(disburseMsg);
        this.returnCard(atm);
    }
   
}