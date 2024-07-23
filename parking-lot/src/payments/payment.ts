import PaymentStrategyFactory from "./payment.stretegy.factory"
import PaymentStretegy from "./payment.stretegy.interface"


export class Payment {
    id:number
    amount:number
    paymentType:string
    private static lastId:number = 0
    private stretegy:PaymentStretegy
   
    constructor(paymentType:string, amount:number) {
        this.id = ++Payment.lastId;
        this.amount = amount;
        this.paymentType = paymentType;
        this.stretegy = PaymentStrategyFactory.createPaymentStrategy(
            paymentType
        );
    }
    setStrategy(type: string): void {
        this.stretegy = PaymentStrategyFactory.createPaymentStrategy(type);
    }

    executePayment() {
        this.stretegy.pay(this.amount);
    }



}