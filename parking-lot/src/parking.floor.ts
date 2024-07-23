import { ParkingSpot } from "./parking-spot/parking.spot";


export class ParkingFloor {
    id: Number
    parkingSlots: Array<ParkingSpot> = []
    private static lastId: number = 0
    constructor() {
        this.id = ++ParkingFloor.lastId;
    }
    

    addParkingSpot(parkingSpot:ParkingSpot) {
        this.parkingSlots.push(parkingSpot)
    }
 }