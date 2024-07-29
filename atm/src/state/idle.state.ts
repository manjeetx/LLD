import Atm from "../atm";
import Card from "../card";
import HasCardState from "./has-card.state";
import State from "./state";


export class IdleState extends State {
    constructor() {
        super()
        console.log("ATM IS IN IDLE STATE");
    }
    insertCard(atm:Atm, card: Card): void {
        atm.setCard(card);
        atm.setState(new HasCardState())
    }
}