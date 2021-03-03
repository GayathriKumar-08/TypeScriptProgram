var Cardemo = /** @class */ (function () {
    function Cardemo() {
    }
    Cardemo.prototype.demo = function () {
        console.log("This is a car method!!!!!");
    };
    return Cardemo;
}());
var Busdemo = /** @class */ (function () {
    function Busdemo() {
    }
    Busdemo.prototype.demo = function () {
        console.log("This is a bus method!!!!!");
    };
    return Busdemo;
}());
var Bikedemo = /** @class */ (function () {
    function Bikedemo() {
    }
    Bikedemo.prototype.demo = function () {
        console.log("This is a bike method!!!!!");
    };
    return Bikedemo;
}());
var car = new Busdemo();
console.log(car.demo());
var bus = new Bikedemo();
console.log(bus.demo());
var bike = new Cardemo();
console.log(bike.demo);
console.log("car says: " + car.demo);
console.log("bus says: " + bus.demo);
console.log("bike says: " + bike.demo);
