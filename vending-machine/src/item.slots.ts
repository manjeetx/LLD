import Product from "./product/product";


export default class ItemSlot {
    product:Product|null = null;
    soldOut:boolean = true
    code!:Number

    constructor() {}

    setCode(code:number) {
        this.code = code
       
        return this
    }
    addProduct(product:Product) {
        if (!this.soldOut) {
            throw new Error("Product Already exists.");
        }
        this.product = product;
        this.soldOut = false;
       
        return this
    }
    removeProduct() {
        if (this.soldOut) {
            throw new Error("Product Does not exists.");
        }
        this.product = null;
        this.soldOut = true;
        
        return this
    }




}