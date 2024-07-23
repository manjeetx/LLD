
import { ParkingSpot } from "./parking.spot";
import ParkingSpotType from "./parking.spot.types";

export class ElectricCarParkingSpot extends ParkingSpot{
    constructor(){
        super(ParkingSpotType.ELECTRIC_CAR)
    }
}