import Money from "../money";
import VendingMachine from "../vending.machine";
import HasMoneyState from "./has-money.state";
import IState from "./state";


export default class IdleState implements IState {
    constructor(vendingMachine: VendingMachine) {
        console.log("This is idle state of machine.");
        vendingMachine.money = [];
    }
    getChange(vendingMachine: VendingMachine, amount: number): void {
        throw new Error("Method not implemented.");
    }
    clickOnProductSelectionButton(vendingMachine: VendingMachine): void {
        throw new Error("Method not implemented.");
    }
    clickOnInsertCoinButton(vendingMachine: VendingMachine): void {
        vendingMachine.setState(new HasMoneyState())
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
        throw new Error("Method not implemented.");
    }
  
}