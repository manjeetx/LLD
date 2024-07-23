

export class Vehicle {
    registrationNumber:String;
    phoneNumber:String
    type:String
    hourlyCharge:number;
   
    constructor(registrationNumber:String, phoneNumber:String, 
        type:String, hourlyCharge:number) {
        this.registrationNumber = registrationNumber;
        this.phoneNumber = phoneNumber;
        this.type  = type;
        this.hourlyCharge = hourlyCharge;
    }

    calculateAmount(durationInHours:number):number {
        return this.hourlyCharge * durationInHours;
    }
 }