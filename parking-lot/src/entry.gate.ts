
import { ParkingSpot } from "./parking-spot/parking.spot"
import { ParkingFloor } from "./parking.floor"
import ParkingLot from "./parking.lot"
import { ParkingTicket } from "./parking.ticket"

import { Vehicle } from "./vehicle/vehicle"


export class EntryGate {
    private id : Number
    private static lastId: number = 0

    constructor() {
        this.id = ++EntryGate.lastId
    }
    private getParkingFloorAndSlot(vehicle:Vehicle) : [ParkingFloor|null, ParkingSpot|null] {
        const parkingLot = ParkingLot.getInstance();
        let ticketParkingFloor : ParkingFloor|null =null
        let ticketParkingSpot: ParkingSpot|null = null
        for(const parkingFloor of parkingLot.parkingFloors) {
            for (const parkingSpot of parkingFloor.parkingSlots) {
                if(parkingSpot.isSpotFree &&  vehicle.type == parkingSpot.spotType ) {
                    ticketParkingFloor = parkingFloor;
                    ticketParkingSpot = parkingSpot;    
                    return [ticketParkingFloor, ticketParkingSpot]
                }
            }
        }
        return [null, null]
    }
    getParkingTicket(vehicle:Vehicle) {
        const [parkingFloor,parkingSpot] = this.getParkingFloorAndSlot(vehicle);
        if (!parkingSpot) {
            throw new Error("Parking Slot Not found. ")
        }
        if (!parkingFloor) {
            throw new Error("Parking Slot Not found. ")
        }
        const ticket =  new ParkingTicket(
            parkingSpot,
            parkingFloor,
            vehicle
        );
        parkingSpot.parkVehicle(vehicle);

        return ticket;
    }
}