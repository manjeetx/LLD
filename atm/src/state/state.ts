import Atm from "../atm";
import Card from "../card";


export default abstract class State {
    exit(atm:Atm) {
        throw new Error("Method Not implemented");
    }
    insertCard(atm:Atm, card:Card) {
        throw new Error("Method Not implemented");
    }
    authPin(atm:Atm, pin:number) {
        throw new Error("Method Not implemented");
    }
    selectOp(atm:Atm, op:string) {
        throw new Error("Method Not implemented");
    }
    withDrawCash(atm:Atm, amount:number) {
        throw new Error("Method Not implemented");
    }
    showBalance(atm:Atm) {
        throw new Error("Method Not implemented");
    }
    returnCard(atm:Atm) {
        throw new Error("Method Not implemented");
    }
    disparseCash(atm:Atm, money:Map<string, number>, amount:number) {
        throw new Error("Method Not implemented");
    }
}