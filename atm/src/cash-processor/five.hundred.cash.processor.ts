import Atm from "../atm";
import { MoneyType } from "../money.type";
import CashProcessor from "./cash.processor";



export default class FiveHundredCashProcessor extends CashProcessor {

    constructor(nextProcessor:CashProcessor|null) {
        super(nextProcessor);
    }
    
    withdraw(atm:Atm,money:Map<string, number>,  remainingAmount:number)  {
        const avilableNotes = atm.money.get(MoneyType.type.FIVE_HUNDRED) ?? 0;
        const noteValue = MoneyType.getValue(MoneyType.type.FIVE_HUNDRED);
        const neededNotes = Math.floor(remainingAmount/noteValue);
        const usedNotes = Math.min(avilableNotes, neededNotes);
       
        
        money.set(MoneyType.type.FIVE_HUNDRED, usedNotes);
        const amountRemaining = remainingAmount - (usedNotes * noteValue);
       
        super.withdraw(atm, money, amountRemaining);
    }
}