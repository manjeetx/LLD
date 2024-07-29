import Atm from "./atm";
import BankAccount from "./bank.account";
import Card from "./card";
import { MoneyType } from "./money.type";
import OpType from "./op.type";
import User from "./user";


class Main {
    static run() {
        const atm = new Atm()
            .addMoney(MoneyType.type.THOUSAND, 5)
            .addMoney(MoneyType.type.FIVE_HUNDRED, 5)
            .addMoney(MoneyType.type.HUNDRED, 15);

        //added user
        const user = new User("User 1")
            .addBankAccount(new BankAccount(5000))
            .addCard(843, 12345676);
        

        atm.getState().insertCard(atm, user.card);

        //validate pin
        atm.getState().authPin(atm,1234);
        
        //check Balance
        //atm.getState().selectOp(atm, OpType.CHECK_BALANCE);
        
        atm.getState().selectOp(atm, OpType.WIDHDRAW_CASH);
        atm.getState().withDrawCash(atm, 5600)  
        
        
    }
}

Main.run();