import Product from "./product"
import ProductTypes from "./product.type"


export default class Chocolate extends Product {
    constructor() {
        super(
            ProductTypes.CHOCOLATE.name,
            ProductTypes.CHOCOLATE.cost
        )
    }
}