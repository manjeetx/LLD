import Product from "./product"
import ProductTypes from "./product.type"


export default class Coke extends Product {
    constructor() {
        super(
            ProductTypes.CHOCOLATE.name,
            ProductTypes.CHOCOLATE.cost
        )
    }
}