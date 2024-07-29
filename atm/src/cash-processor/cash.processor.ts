import Atm from "../atm";



export default abstract class CashProcessor {
    nextProcessor:CashProcessor|null

    constructor(nextProcessor:CashProcessor|null) {
        this.nextProcessor = nextProcessor;
    }
    
    withdraw(atm:Atm, money:Map<string, number>,remainingAmount:number)  {
        if (this.nextProcessor) {
            this.nextProcessor.withdraw(
                atm, 
                money,
                remainingAmount
            );
            return;
        }

        if (remainingAmount !== 0) {
            money.clear();
            return
        }
    }
}