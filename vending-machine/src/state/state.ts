import Money from "../money";
import VendingMachine from "../vending.machine";


export default interface IState  {
    clickOnInsertCoinButton(vendingMachine:VendingMachine):void;
    insertCoin(vendingMachine:VendingMachine, money:Money):void;
    clickOnProductSelectionButton(vendingMachine:VendingMachine):void;
    selectProduct(vendingMachine:VendingMachine, code:number):void;
    refund(vendingMachine:VendingMachine):void;
    getChange(vendingMachine:VendingMachine,amount:number):void;
    disburseProduct(vendingMachine:VendingMachine, code:number):void;
}
