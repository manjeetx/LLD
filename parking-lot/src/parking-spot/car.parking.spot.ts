
import { ParkingSpot } from "./parking.spot";
import ParkingSpotType from "./parking.spot.types";

export class CarParkingSpot extends ParkingSpot{
    constructor(){
        super(ParkingSpotType.CAR)
    }
}