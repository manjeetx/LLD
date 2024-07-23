import PaymentStretegy from "./payment.stretegy.interface";


export class CashPaymentStretegy implements PaymentStretegy {
    pay(amount: any): void {
        console.log(`Paid ${amount} using Cash.`);
    }
}