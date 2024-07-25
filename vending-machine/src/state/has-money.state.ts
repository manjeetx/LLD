import Money from "../money";
import VendingMachine from "../vending.machine";
import ProductSelectionState from "./product.selection";
import IState from "./state";


export default class HasMoneyState implements IState {
    constructor() {
        console.log("This is Has Money state of machine.");
        
    }
    getChange(vendingMachine: VendingMachine, amount: number): void {
        throw new Error("Method not implemented.");
    }
    clickOnProductSelectionButton(vendingMachine: VendingMachine): void {
        vendingMachine.setState(new ProductSelectionState())
    }
    clickOnInsertCoinButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    insertCoin(vendingMachine: VendingMachine, money: Money): void {
        vendingMachine.money.push(money);
        console.log(`Added : ${money.value} Rupees.`);
    }
    selectProduct(vendingMachine: VendingMachine, code: number): void {
        throw new Error("Method not implemented.");
    }
    refund(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    disburseProduct(vendingMachine: VendingMachine, code: number): void {
        throw new Error("Method not implemented.");
    }
   
}