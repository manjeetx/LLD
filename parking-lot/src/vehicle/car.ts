import { Vehicle } from "./vehicle";
import VehicleType, { VehicleHourlyCharge } from "./vehicle.types";


export class Car extends Vehicle {
    constructor( registrationNumber:String, phoneNumber:String){
        super(
            registrationNumber,
            phoneNumber,
            VehicleType.CAR,
            VehicleHourlyCharge.CAR
        );
    }
}