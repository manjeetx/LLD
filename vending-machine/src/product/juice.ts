import Product from "./product"
import ProductTypes from "./product.type"


export default class Juice extends Product {
    constructor() {
        super(
            ProductTypes.JUICE.name,
            ProductTypes.JUICE.cost
        )
    }
}