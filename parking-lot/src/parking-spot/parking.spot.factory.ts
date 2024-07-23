import { BusParkingSpot } from "./bus.parking.spot";
import { CarParkingSpot } from "./car.parking.spot";
import { ElectricCarParkingSpot } from "./electric.car.spot";
import { MotorCycleParkingSpot } from "./motor.cycle.spot";
import ParkingSpotType from "./parking.spot.types";

export class PakingSpotFactory {

    public static create(spotType:string) {
        switch (spotType) {
            case ParkingSpotType.BUS:
                return new BusParkingSpot();
            case ParkingSpotType.CAR:
                return new CarParkingSpot();
            case ParkingSpotType.ELECTRIC_CAR:
                return new ElectricCarParkingSpot();
            case ParkingSpotType.MOTOR_CYCLE:
                return new MotorCycleParkingSpot();
            default:
                throw new Error("Invalid Spot type.");
                
        }
    }
}