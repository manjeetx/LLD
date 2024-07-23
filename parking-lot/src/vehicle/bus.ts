import { Vehicle } from "./vehicle";
import VehicleType, { VehicleHourlyCharge } from "./vehicle.types";


export class Bus extends Vehicle {
    constructor( registrationNumber:String, phoneNumber:String){
        super(
            registrationNumber,
            phoneNumber,
            VehicleType.BUS,
            VehicleHourlyCharge.BUS
        );
    }
}