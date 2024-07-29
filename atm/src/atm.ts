
import Card from "./card";
import { MoneyType } from "./money.type";
import { IdleState } from "./state/idle.state";
import State from "./state/state";


export default class Atm {
    private state:State
    balance:number = 0
    money:Map<string,number> = new Map()
    card !: Card | null
   
    constructor() {
        this.state = new IdleState();
        for (const moneyType in MoneyType.type) {
            this.money.set(moneyType, 0)
        }
    }
    setState(state:State) {
        this.state = state;
    }
    getState():State {
        return this.state;
    }
    setCard(card:Card) {
        this.card = card;
    }
    removeCard() {
        this.card = null;
    }
    addMoney(moneyType:string, num:number) {
        let prevNum = this.money.get(moneyType) ?? 0;
        this.money.set(moneyType, prevNum+num);
        this.balance +=  MoneyType.getValue(moneyType) * num;
        return this;
    }
    removeMoney(moneyType:string, num:number) {
        let prevNum = this.money.get(moneyType) ?? 0;
        this.money.set(moneyType, prevNum-num);
        this.balance -=  MoneyType.getValue(moneyType) * num;
        return this;
    }

}