import Money from "../money";
import VendingMachine from "../vending.machine";
import IdleState from "./idle.state";
import IState from "./state";


export default class DisburseState implements IState {
    constructor() {
        console.log("This is disburse state of machine.");
    }
    getChange(vendingMachine: VendingMachine, amount: number): void {
        throw new Error("Method not implemented.");
    }
    clickOnProductSelectionButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    clickOnInsertCoinButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    insertCoin(vendingMachine: VendingMachine, money: Money): void {
        throw new Error("Method not implemented.");
    }
    selectProduct(vendingMachine: VendingMachine, code: number): void {
        throw new Error("Method not implemented.");
    }
    refund(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
   
    disburseProduct(vendingMachine: VendingMachine, code: number): void {
        console.log(`PRODUCT DISBURSED.`);
        
        const slot = vendingMachine.inventory.findSlot(code);
        slot.removeProduct()
        vendingMachine.setState(new IdleState(vendingMachine));
    }

}