import { EntryGate } from "./entry.gate";
import { ExitGate } from "./exit.gate";
import { PakingSpotFactory } from "./parking-spot/parking.spot.factory";
import ParkingSpotType from "./parking-spot/parking.spot.types";
import { ParkingFloor } from "./parking.floor";
import ParkingLot from "./parking.lot";
import { VehicleFactory } from "./vehicle/vehicle.factory";
import VehicleType from "./vehicle/vehicle.types";

const parkingLot = ParkingLot.getInstance()

// ADD 4 PARKING FLOORS  
for(let i =0;i <4;i++) {
    parkingLot.addParkingFloor(
        new ParkingFloor()
    )
}

// ADD 50 slots of each type in each floor 
for (const parkingFloor of parkingLot.parkingFloors) {
    for (const spotType of Object.values(ParkingSpotType)) {
        for(let i=0;i<50;i++) {
            parkingFloor.addParkingSpot(
                PakingSpotFactory.create(spotType)
            )
        }
    }
}
// Add 4 entry Gate & exit gates
for( let i=0;i < 4;  i++) {
    parkingLot.addEntryGate(new EntryGate());
    parkingLot.addExitGate(new ExitGate());
}


const vehicle = VehicleFactory.create(
    VehicleType.CAR,
    'ABCD',
    '8989898989'
);

const entryGate = parkingLot.entryGates[0]
const ticket  = entryGate.getParkingTicket(vehicle);

// get exit gate

const exitGate = parkingLot.exitGates[0]
exitGate.checkout(ticket)


