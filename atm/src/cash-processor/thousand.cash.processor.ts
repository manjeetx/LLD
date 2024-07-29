import Atm from "../atm";
import { MoneyType } from "../money.type";
import CashProcessor from "./cash.processor";



export default class ThousandCashProcessor extends CashProcessor {

    constructor(nextProcessor:CashProcessor|null) {
        super(nextProcessor);
    }
    
    withdraw(atm:Atm,money:Map<string, number>,  remainingAmount:number)  {
        const avilableNotes = atm.money.get(MoneyType.type.THOUSAND) ?? 0;
        const noteValue = MoneyType.getValue(MoneyType.type.THOUSAND);
        const neededNotes = Math.floor(remainingAmount/noteValue);
        const usedNotes = Math.min(avilableNotes, neededNotes);
       
        money.set(MoneyType.type.THOUSAND, usedNotes);
        
        const amountRemaining = remainingAmount - (usedNotes * noteValue);
       
        super.withdraw(atm, money, amountRemaining);
    }
}