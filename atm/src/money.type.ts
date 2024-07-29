export class MoneyType {
    static type = {
        THOUSAND:'thousand',
        HUNDRED:'hundred',
        FIVE_HUNDRED:'five_hundred'
    }

    static getValue(type:string) {
        switch(type) {
            case MoneyType.type.THOUSAND:
                return 1000;
            case MoneyType.type.HUNDRED:
                return 100;
            case MoneyType.type.FIVE_HUNDRED:
                return 500;
            default:
                throw new Error("Not valid money type.")
        }
    }
}