import { BusParkingSpot } from "./parking-spot/bus.parking.spot"
import { ParkingSpot } from "./parking-spot/parking.spot";
import { ParkingFloor } from "./parking.floor"
import { Vehicle } from "./vehicle/vehicle"


export class ParkingTicket {
    public id: Number;
    public parkingSpot:BusParkingSpot;
    public parkingFloor:ParkingFloor;
    public vehicle:Vehicle;
    public startTime!:Date;
    public endTime!:Date;
    public amount!:number;
    static lastId = 0;
    
    constructor(parkingSpot: ParkingSpot, parkingFloor: ParkingFloor, 
        vehicle:Vehicle) {
        this.id = ++ParkingTicket.lastId;
        this.parkingFloor = parkingFloor;
        this.parkingSpot = parkingSpot;
        this.vehicle = vehicle;
        this.startTime = new Date();
    }

    public setEndTime(dateTime: Date = new Date()) {
        dateTime.setHours(dateTime.getHours() + 2);
        this.endTime = dateTime;
    }

    public setAmount(amount:number) {
        this.amount = amount;
    }



}