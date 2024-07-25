import Product from "./product"
import ProductTypes from "./product.type"


export default class Chips extends Product {
    constructor() {
        super(
            ProductTypes.CHIPS.name,
            ProductTypes.CHIPS.cost
        )
    }
}