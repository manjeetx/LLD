import ItemSlot from "./item.slots";
import Product from "./product/product";

export default class Inventory {
    itemSlots:ItemSlot [] 
    constructor(size:number) {
        this.itemSlots = Array.from({length:size}, () => new ItemSlot())
    }
    
    addItemSlot(itemSlot:ItemSlot)  {
        this.itemSlots.push(itemSlot)
    }

    addItemToSlot(code:number, product:Product) {
        let itemSlot  : ItemSlot = this.findSlot(code);
        itemSlot.addProduct(product);

    }

    findSlot(code:number) : ItemSlot{
        let currentItemSlot : ItemSlot|null = null
        for(const itemSlot of this.itemSlots) {
            if(itemSlot.code === code) {
                currentItemSlot = itemSlot;
                break
            }
        }
        if(!currentItemSlot) {
            throw new Error("Slot does not exist.")
        }

        return currentItemSlot;
    }

}