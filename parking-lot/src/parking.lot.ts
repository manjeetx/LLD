import { EntryGate } from "./entry.gate";
import { ExitGate } from "./exit.gate";
import { ParkingFloor } from "./parking.floor";

export default class ParkingLot {
    private static instance: ParkingLot | null = null;
    private constructor() {}
    public parkingFloors: Array<ParkingFloor> = []
    public entryGates: Array<EntryGate> = []
    public exitGates: Array<ExitGate> = []

    public static getInstance(): ParkingLot {
        if (ParkingLot.instance === null) {
            ParkingLot.instance = new ParkingLot();
        }
        return ParkingLot.instance;
    }

    public addParkingFloor(parkingFloor:ParkingFloor) {
        this.parkingFloors.push(parkingFloor)
    }
    public addEntryGate(entryGate:EntryGate) {
        this.entryGates.push(entryGate)
    }
    public addExitGate(exitGate:ExitGate) {
        this.exitGates.push(exitGate)
    }
}
