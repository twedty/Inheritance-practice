//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
// You have been assigned the task of developing a new class for the new A28 Mercury sedan. The class will be written in JavaScript and will contain vehicle properties and methods that have previously been defined in the base class named vehicle.js. The new class is required to have the following properties and methods added.
//After you write the derived Car class, you should test it out.
//Note: You can code your derived Car class here or make a file named index.js and do it there.
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
//TO DO: Creating Instances and Testing Them
//You can use the same instance "v" of the Vehicle class above for the base class.
//Create at least two new instances of the Car class and test them here: