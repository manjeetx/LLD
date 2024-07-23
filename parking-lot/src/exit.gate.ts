import { ParkingFloor } from "./parking.floor"
import ParkingLot from "./parking.lot"
import { ParkingTicket } from "./parking.ticket"
import { Payment } from "./payments/payment"
import { Vehicle } from "./vehicle/vehicle"


export class ExitGate {
    private id : Number
    private static lastId: number = 0

    constructor() {
        this.id = ++ExitGate.lastId
    }
    calculateDurationInHours(ticket:ParkingTicket) {
        
        // Get the time difference in milliseconds
        const timeDifference = ticket.endTime.getTime() - ticket.startTime.getTime();
        
        // Convert time difference from milliseconds to hours
        const hoursDifference = timeDifference / (1000 * 60 * 60);
        
        return Math.ceil(hoursDifference);
    }

    checkout(ticket:ParkingTicket) {
        ticket.setEndTime()
        const durationInHours = this.calculateDurationInHours(ticket);
        if (!ticket.parkingSpot.vehicle) {
            throw Error("Vehile not parked.");
        }
        const amount = ticket.parkingSpot.vehicle.calculateAmount(durationInHours);
        ticket.setAmount(amount)
        ticket.parkingSpot.removeVehicle();

    }
    payment(ticket:ParkingTicket) {
        //Payment Flow
        const payment = new Payment('cash',ticket.amount)
        payment.executePayment()
    }
}