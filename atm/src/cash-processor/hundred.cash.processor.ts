import Atm from "../atm";
import { MoneyType } from "../money.type";
import CashProcessor from "./cash.processor";



export default class HundredCashProcessor extends CashProcessor {

    constructor(nextProcessor:CashProcessor|null) {
        super(nextProcessor);
    }
    
    withdraw(atm:Atm,money:Map<string, number>,  remainingAmount:number)  {
        const avilableNotes = atm.money.get(MoneyType.type.HUNDRED) ?? 0;
        const noteValue = MoneyType.getValue(MoneyType.type.HUNDRED);
        const neededNotes = Math.floor(remainingAmount/noteValue);
        const usedNotes = Math.min(avilableNotes, neededNotes);
       
        money.set(MoneyType.type.HUNDRED, usedNotes);
        const amountRemaining = remainingAmount - (usedNotes * noteValue);
        //console.log("100", money, avilableNotes, usedNotes, amountRemaining);
        super.withdraw(atm, money, amountRemaining);
    }
}