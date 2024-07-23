
import { ParkingSpot } from "./parking.spot";
import ParkingSpotType from "./parking.spot.types";

export class MotorCycleParkingSpot extends ParkingSpot{
    constructor(){
        super(ParkingSpotType.MOTOR_CYCLE)
    }
}