import { machine } from "os";
import Money from "./money";
import MoneyType from "./money.type";
import ProductFactory from "./product/product.factory";
import ProductTypes from "./product/product.type";
import VendingMachine from "./vending.machine"


class Main {
    run() {
        const machine:VendingMachine = new VendingMachine()
        try {
            this.addInvontry(machine);
            
            machine.getState().clickOnInsertCoinButton(machine)
            machine.getState().insertCoin(machine, new Money(MoneyType.HUNDRED));
            machine.getState().insertCoin(machine, new Money(MoneyType.TWENTY));
            machine.getState().insertCoin(machine, new Money(MoneyType.TEN));
            machine.getState().clickOnProductSelectionButton(machine);
            machine.getState().selectProduct(machine, 5)
            
            // insufficent money case
            machine.getState().clickOnInsertCoinButton(machine)
            machine.getState().insertCoin(machine, new Money(MoneyType.FIVE));
            machine.getState().clickOnProductSelectionButton(machine);
            machine.getState().selectProduct(machine, 4)

 
            this.displayInvontry(machine);

        } catch (error) {
            console.log(error);
            
        }

    }
    addInvontry(vendingMachine:VendingMachine) {
        console.log(`ADDING INVENTORY`)
        const slots = vendingMachine.inventory.itemSlots;
        
        for (let i=0;i<slots.length;i++) {
            const slot = slots[i]
            const code = i+1;
            if(i < 5) {
                const product = ProductFactory.create(ProductTypes.CHOCOLATE.name)
                slot.setCode(code).addProduct(product)
            } else if (i >= 5 && i <10) {
                const product = ProductFactory.create(ProductTypes.JUICE.name)
                slot.setCode(code).addProduct(product)
            } else if (i >= 10 && i <15) {
                const product = ProductFactory.create(ProductTypes.CHIPS.name)
                slot.setCode(code).addProduct(product)
            } else if (i >= 15 ) {
                const product = ProductFactory.create(ProductTypes.COKE.name)
                slot.setCode(code).addProduct(product)
            }
        }
    }

    displayInvontry(vendingMachine:VendingMachine) {
        const slots = vendingMachine.inventory.itemSlots;
        for (const slot of slots) {
            console.log(` code:${slot.code}, ${slot.product?.name}, cost:${slot.product?.cost}, avaliable: ${!slot.soldOut}`);
        }
    }

}

//run
new Main().run()