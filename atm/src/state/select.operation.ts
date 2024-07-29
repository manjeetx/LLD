import Atm from "../atm";
import Card from "../card";
import OpType from "../op.type";
import { CheckBalanceState } from "./check.balance.state";
import HasCardState from "./has-card.state";
import State from "./state";
import { WidhdrawCashState } from "./widhdraw.cash";


export class SelectOprationState extends State {
    constructor() {
        super()
        console.log("ATM IS IN SELECT OPERATION STATE");
    }
    selectOp(atm: Atm, op: string): void {
        switch(op) {
            case OpType.CHECK_BALANCE:
                return atm.setState(new CheckBalanceState(atm));
            case OpType.WIDHDRAW_CASH:
                return atm.setState(new WidhdrawCashState());
        }
    }
}