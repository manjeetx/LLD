

export default class Product {
    id:number;
    name:string;
    cost:number;
    private static lastId: number = 0
    constructor(name:string, cost:number) {
        this.id = ++Product.lastId;
        this.name = name;
        this.cost = cost; 
    }
}