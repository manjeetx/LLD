import Inventory from "./inventroy";
import Money from "./money";
import IdleState from "./state/idle.state";
import IState from "./state/state";


export default class VendingMachine {
    private state: IState;
    inventory:Inventory;
    money: Money[]

    constructor() {
        this.state = new IdleState(this);
        this.inventory = new Inventory(20);  
        this.money = []
    } 
    setState(state: IState) {
        this.state = state;
    }
    getState() : IState{
        return this.state;
    }
}