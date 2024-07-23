import { Vehicle } from "./vehicle";
import VehicleType, { VehicleHourlyCharge } from "./vehicle.types";


export class MotorCycle extends Vehicle {
    constructor( registrationNumber:String, phoneNumber:String){
        super(
            registrationNumber,
            phoneNumber,
            VehicleType.MOTOR_CYCLE,
            VehicleHourlyCharge.MOTOR_CYCLE
        );
    }
}