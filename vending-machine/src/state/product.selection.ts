import Money from "../money";
import VendingMachine from "../vending.machine";
import DisburseState from "./disburse.state";
import IdleState from "./idle.state";
import IState from "./state";


export default class ProductSelectionState implements IState {
    constructor() {
        console.log("This is Produce selection state of machine.");
        
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
        const slot = vendingMachine.inventory.findSlot(code);
        const product = slot.product;
        if (!product) {
            throw new Error("Product not found.");
        }
        let totalMoney = 0
        for (const money of vendingMachine.money) {
            totalMoney += money.value
        }
        if (totalMoney < product.cost) {
            console.log(`Cost of product is higher then total money.Full refund of ${totalMoney} iniated pleas collect.`);
            this.refund(vendingMachine)
        } else {
            if (product.cost < totalMoney) {
                this.getChange(vendingMachine, totalMoney-product.cost);
            }
            vendingMachine.setState(new DisburseState())
            vendingMachine.getState().disburseProduct(
                vendingMachine,
                code
            );
            
        }
    }
    getChange(vendingMachine: VendingMachine, amount: number): void {
        console.log(`Partial money refunded ${amount}. Please collect.`);
        
    }
    refund(vendingMachine: VendingMachine): void {
        vendingMachine.setState(new IdleState(vendingMachine));
    }
   
    disburseProduct(vendingMachine: VendingMachine, code: number): void {
        throw new Error("Method not implemented.");
    }
   
}