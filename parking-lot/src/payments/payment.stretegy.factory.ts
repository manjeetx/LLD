
import { CardPaymentStretegy } from "./card.payment.stretegy";
import { CashPaymentStretegy } from "./cash.payment.stretegy";
import PaymentStretegy from "./payment.stretegy.interface";
import { UpiPaymentStretegy } from "./upi.payment.stretegy";

export default class PaymentStrategyFactory {
    static createPaymentStrategy(type: string): PaymentStretegy {
        switch (type) {
            case 'cash':
                return new CashPaymentStretegy();
            case 'card':
                return new CardPaymentStretegy();
            case 'upi':
                return new UpiPaymentStretegy();
            default:
                throw new Error(`Unknown payment type: ${type}`);
        }
    }
}
