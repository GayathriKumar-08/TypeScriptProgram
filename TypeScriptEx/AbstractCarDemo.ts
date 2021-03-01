abstract class AbstractCarDemo {
    carname: String;
    carcolor: String;
    enginecapacity: number;
    noofCylinders: number;
    constructor(carname: String, carcolor: String, enginecapacity: number, noofCylinders: number) {
        this.carname = carname;
        this.carcolor = carcolor;
        this.enginecapacity = enginecapacity;
        this.noofCylinders = noofCylinders;
    }
    abstract startCar();
    abstract stopCar();
}
class SUV extends AbstractCarDemo {
    carname: String;
    carcolor: String;
    enginecapacity: number;
    noofCylinders: number;
    carmodel: any;
    carprice: number;
    constructor(carname: String, carcolor: String, enginecapacity: number, noofCylinders: number, carmodel: any, carprice: number) {
        super(carname, carcolor, enginecapacity, noofCylinders);
        this.carmodel = carmodel;
        this.carprice = carprice;
    }
    startCar() {
        console.log(this.carname + "has been started");
    }
    viewDetails() {
        console.log("car name:" + this.carname);
        console.log("car name:" + this.carcolor);
        console.log("car name:" + this.enginecapacity);
        console.log("car name:" + this.noofCylinders);
        console.log("car name:" + this.carmodel);
        console.log("car name:" + this.carprice);

    }
    stopCar() {
        console.log(this.carname + " has been stoped");
    }
}
class HatchBack extends AbstractCarDemo {
    carname: String;
    carcolor: String;
    enginecapacity: number;
    noofCylinders: number;
    carmodel: any;
    carprice: number;
    constructor(carname: String, carcolor: String, enginecapacity: number, noofCylinders: number, carmodel: any, carprice: number) {
        super(carname, carcolor, enginecapacity, noofCylinders);
        this.carmodel = carmodel;
        this.carprice = carprice;
    }
    startCar() {
        console.log(this.carname + "has been started");
    }
    viewDetails() {
        console.log("car name:" + this.carname);
        console.log("car name:" + this.carcolor);
        console.log("car name:" + this.enginecapacity);
        console.log("car name:" + this.noofCylinders);
        console.log("car name:" + this.carmodel);
        console.log("car name:" + this.carprice);

    }
    stopCar() {
        console.log(this.carname + " has been stoped");
    }
}
class Sedan extends AbstractCarDemo {
    carname: String;
    carcolor: String;
    enginecapacity: number;
    noofCylinders: number;
    carmodel: any;
    carprice: number;
    constructor(carname: String, carcolor: String, enginecapacity: number, noofCylinders: number, carmodel: any, carprice: number) {
        super(carname, carcolor, enginecapacity, noofCylinders);
        this.carmodel = carmodel;
        this.carprice = carprice;
    }
    startCar() {
        console.log(this.carname + "has been started");
    }
    viewDetails() {
        console.log("car name:" + this.carname);
        console.log("car name:" + this.carcolor);
        console.log("car name:" + this.enginecapacity);
        console.log("car name:" + this.noofCylinders);
        console.log("car name:" + this.carmodel);
        console.log("car name:" + this.carprice);

    }
    stopCar() {
        console.log(this.carname + " has been stoped");
    }
}
console.log("The details of the cars are:");
let suv:SUV=new SUV("Tata Safari","black",100,4,"Hyundai Creta E Petrol",8.5);
console.log(suv.startCar());
console.log(suv.viewDetails());
console.log(suv.stopCar());
let hatch:HatchBack=new HatchBack("Maruti Alto.","white",100,4,"Maruti Alto-800",9);
console.log(hatch.startCar());
console.log(hatch.viewDetails());
console.log(hatch.stopCar());
let sed:Sedan=new Sedan("Honda City","golden",100,4,"Honda city-200",9);
console.log(hatch.startCar());
console.log(hatch.viewDetails());
console.log(hatch.stopCar());