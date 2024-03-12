const VehicleModule = require('./vehicleBaseClass').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService() {
        if (this.mileage >= 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        } else {
            console.log('GET YOUR ENGINE CHECKED BOY!!!!')
        }
    }

    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel...so get some fuel...duh");
            return this.started = false;
        }
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + "," + this.make + "does not have enough space to take all poeple, passengers, and any other bodies whether foreign, domestic, or aliens from MarsS.");

            }
        } else {
            console.log(this.model + "," + this.make + " is absolutely full to the brim. Enough to where if you kept trying to fill me I would then overflow and then maybe explode. Please don't have a lighter near you when you fill my deep belly...");
        }
    }


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(4)
myCar.stop()
myCar.checkService()

console.log(myCar)