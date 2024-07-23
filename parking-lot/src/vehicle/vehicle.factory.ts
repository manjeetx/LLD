import { Bus } from "./bus";
import { Car } from "./car";
import { ElectricCar } from "./electric.car";
import { MotorCycle } from "./motor.cycle";
import VehicleType from "./vehicle.types";


export class VehicleFactory {

    static create(vehicleType: String, registrationNumber:String, 
        phoneNumber:String) {
        switch(vehicleType) {
            case VehicleType.BUS:
                return new Bus(registrationNumber, phoneNumber);
            case VehicleType.CAR:
                return new Car(registrationNumber, phoneNumber);
            case VehicleType.ELECTRIC_CAR:
                return new ElectricCar(registrationNumber, phoneNumber);
            case VehicleType.MOTOR_CYCLE:
                return new MotorCycle(registrationNumber, phoneNumber);
            default:
                throw new Error("Vehicle does not exist.");

        }
    }
}