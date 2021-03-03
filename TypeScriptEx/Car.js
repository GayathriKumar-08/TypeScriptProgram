var Car = /** @class */ (function () {
    function Car(carcolor, enginecapacity, noofCylinders) {
        this.carcolor = carcolor;
        this.enginecapactiy = enginecapacity;
        this.noofcylinders = noofCylinders;
    }
    Car.prototype.StartCar = function (carcolor) {
        this.carcolor = carcolor;
        console.log("The colour of car is:" + carcolor);
        console.log("The car has been started!!!!");
    };
    Car.prototype.AccelerateCar = function (carcolor, enginecapactiy, noofcylinders) {
        this.carcolor = carcolor;
        this.enginecapactiy = enginecapactiy;
        this.noofcylinders = noofcylinders;
        console.log("The colour of car is:" + carcolor);
        console.log("The Engine Capacity of car is:" + enginecapactiy);
        console.log("The noofcylinders of car is:" + noofcylinders);
        console.log("The car has been accelerated!!!!");
    };
    Car.prototype.OpenCarLock = function (carcolor) {
        this.carcolor = carcolor;
        console.log("The colour of car is:" + carcolor);
        console.log("The car lock has been opened!!!!");
    };
    Car.prototype.CloseCarLock = function (carcolor) {
        this.carcolor = carcolor;
        console.log("The colour of car is:" + carcolor);
        console.log("The " + carcolor + "car lock has been closed!!!!");
    };
    Car.prototype.Stop = function (carcolor) {
        this.carcolor = carcolor;
        console.log("The colour of car is:" + carcolor);
        console.log("The " + carcolor + " car has been stopped!!!!");
    };
    return Car;
}());
var c = new Car('blue', '1390cc', 4);
console.log(c1.StartCar('blue'));
console.log(c1.AccelerateCar('blue', '1390cc', 4));
console.log(c1.OpenCarLock('blue'));
console.log(c1.CloseCarLock('blue'));
console.log(c1.Stop('blue'));
