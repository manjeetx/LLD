import Chips from "./chips";
import Chocolate from "./chocolate";
import Coke from "./coke";
import Juice from "./juice";
import ProductTypes from "./product.type";


export default class ProductFactory {
    static create(productType:string) {
        switch(productType) {
            case ProductTypes.CHIPS.name:
                return new Chips();
            case ProductTypes.CHOCOLATE.name:
                return new Chocolate();
            case ProductTypes.JUICE.name:
                return new Juice();
            case ProductTypes.COKE.name:
                return new Coke();
            default:
                throw new Error("Product does not exist.")
        }
    }
}