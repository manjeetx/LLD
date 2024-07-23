import { Vehicle } from "../vehicle/vehicle"

export class ParkingSpot {
    id:Number
    vehicle:Vehicle|null = null
    spotType:String
    isSpotFree:Boolean
    private static lastId: number = 0; 
   
    constructor(spotType:String) {
        this.id = ++ParkingSpot.lastId;
        this.spotType = spotType;
        this.isSpotFree = true;
    }
    parkVehicle(vehicle:Vehicle) {
        this.isSpotFree = false;
        this.vehicle = vehicle;
    }
    removeVehicle() {
        this.isSpotFree = true;
        this.vehicle = null
    }
}