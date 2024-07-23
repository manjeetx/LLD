import PaymentStretegy from "./payment.stretegy.interface";


export class UpiPaymentStretegy implements PaymentStretegy {
    pay(amount: any): void {
        console.log(`Paid ${amount} using Upi.`);
    }
}