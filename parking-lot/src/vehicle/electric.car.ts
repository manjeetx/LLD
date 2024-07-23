import { Vehicle } from "./vehicle";
import VehicleType, { VehicleHourlyCharge } from "./vehicle.types";


export class ElectricCar extends Vehicle {
    constructor( registrationNumber:String, phoneNumber:String){
        super(
            registrationNumber,
            phoneNumber,
            VehicleType.ELECTRIC_CAR,
            VehicleHourlyCharge.ELECTRIC_CAR
        );
    }
}