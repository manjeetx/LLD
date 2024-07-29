import Atm from "../atm";
import Card from "../card";
import { IdleState } from "./idle.state";
import { SelectOprationState } from "./select.operation";
import State from "./state";


export default class HasCardState extends State {
    constructor() {
        super()
        console.log("ATM IS IN HAS CARD STATE")
    }

    authPin(atm:Atm, pin:number): void {
        if (!atm.card?.isPinCorrect(pin)) {
            console.log("INCORRECT PIN.")
            this.returnCard(atm);
        }
        atm.setState(new SelectOprationState())
    }
    returnCard(atm: Atm): void {
        console.log("Returning Card..");
        atm.removeCard();
        atm.setState(new IdleState())
    }
}