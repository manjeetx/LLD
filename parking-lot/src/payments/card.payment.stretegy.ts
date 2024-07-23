import PaymentStretegy from "./payment.stretegy.interface";


export class CardPaymentStretegy implements PaymentStretegy {
    pay(amount: any): void {
        console.log(`Paid ${amount} using Card.`);
    }
}