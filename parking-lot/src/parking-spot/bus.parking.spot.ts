
import { ParkingSpot } from "./parking.spot";
import ParkingSpotType from "./parking.spot.types";

export class BusParkingSpot extends ParkingSpot{
    constructor(){
        super(ParkingSpotType.BUS)
    }
}