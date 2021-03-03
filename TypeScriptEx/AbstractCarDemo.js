var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractCarDemo = /** @class */ (function () {
    function AbstractCarDemo(carname, carcolor, enginecapacity, noofCylinders) {
        this.carname = carname;
        this.carcolor = carcolor;
        this.enginecapacity = enginecapacity;
        this.noofCylinders = noofCylinders;
    }
    return AbstractCarDemo;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(carname, carcolor, enginecapacity, noofCylinders, carmodel, carprice) {
        var _this = _super.call(this, carname, carcolor, enginecapacity, noofCylinders) || this;
        _this.carmodel = carmodel;
        _this.carprice = carprice;
        return _this;
    }
    SUV.prototype.startCar = function () {
        console.log(this.carname + "has been started");
    };
    SUV.prototype.viewDetails = function () {
        console.log("car name:" + this.carname);
        console.log("car name:" + this.carcolor);
        console.log("car name:" + this.enginecapacity);
        console.log("car name:" + this.noofCylinders);
        console.log("car name:" + this.carmodel);
        console.log("car name:" + this.carprice);
    };
    SUV.prototype.stopCar = function () {
        console.log(this.carname + " has been stoped");
    };
    return SUV;
}(AbstractCarDemo));
var HatchBack = /** @class */ (function (_super) {
    __extends(HatchBack, _super);
    function HatchBack(carname, carcolor, enginecapacity, noofCylinders, carmodel, carprice) {
        var _this = _super.call(this, carname, carcolor, enginecapacity, noofCylinders) || this;
        _this.carmodel = carmodel;
        _this.carprice = carprice;
        return _this;
    }
    HatchBack.prototype.startCar = function () {
        console.log(this.carname + "has been started");
    };
    HatchBack.prototype.viewDetails = function () {
        console.log("car name:" + this.carname);
        console.log("car name:" + this.carcolor);
        console.log("car name:" + this.enginecapacity);
        console.log("car name:" + this.noofCylinders);
        console.log("car name:" + this.carmodel);
        console.log("car name:" + this.carprice);
    };
    HatchBack.prototype.stopCar = function () {
        console.log(this.carname + " has been stoped");
    };
    return HatchBack;
}(AbstractCarDemo));
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(carname, carcolor, enginecapacity, noofCylinders, carmodel, carprice) {
        var _this = _super.call(this, carname, carcolor, enginecapacity, noofCylinders) || this;
        _this.carmodel = carmodel;
        _this.carprice = carprice;
        return _this;
    }
    Sedan.prototype.startCar = function () {
        console.log(this.carname + "has been started");
    };
    Sedan.prototype.viewDetails = function () {
        console.log("car name:" + this.carname);
        console.log("car name:" + this.carcolor);
        console.log("car name:" + this.enginecapacity);
        console.log("car name:" + this.noofCylinders);
        console.log("car name:" + this.carmodel);
        console.log("car name:" + this.carprice);
    };
    Sedan.prototype.stopCar = function () {
        console.log(this.carname + " has been stoped");
    };
    return Sedan;
}(AbstractCarDemo));
console.log("The details of the cars are:");
var suv = new SUV("Tata Safari", "black", 100, 4, "Hyundai Creta E Petrol", 8.5);
console.log(suv.startCar());
console.log(suv.viewDetails());
console.log(suv.stopCar());
var hatch = new HatchBack("Maruti Alto.", "white", 100, 4, "Maruti Alto-800", 9);
console.log(hatch.startCar());
console.log(hatch.viewDetails());
console.log(hatch.stopCar());
var sed = new Sedan("Honda City", "golden", 100, 4, "Honda city-200", 9);
console.log(hatch.startCar());
console.log(hatch.viewDetails());
console.log(hatch.stopCar());
