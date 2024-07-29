import Atm from "../atm";
import Card from "../card";
import HasCardState from "./has-card.state";
import { IdleState } from "./idle.state";
import State from "./state";


export class CheckBalanceState extends State {
    constructor(atm: Atm) {
        super()
        console.log("ATM IS IN CHECK BALANCE STATE");
        this.showBalance(atm)
    }

    showBalance(atm: Atm): void {
        console.log(`
            Your balance is ${atm.card?.bankAccount.balance} Rupees.
        `);
        this.returnCard(atm);
    }

    returnCard(atm: Atm): void {
        console.log("Returning Card..");
        atm.removeCard();
        atm.setState(new IdleState())
    }

   
}