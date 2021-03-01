class Cardemo {
    demo ()
    {
        console.log("This is a car method!!!!!");
    }
    
}
class Busdemo {
    demo()
    {
    console.log("This is a bus method!!!!!");
    }
}
class Bikedemo {
    demo()
    {
    console.log("This is a bike method!!!!!");
    }
}
let car: Cardemo = new Busdemo();
console.log(car.demo());
let bus: Busdemo = new Bikedemo();
console.log(bus.demo());
let bike: Bikedemo = new Cardemo();
console.log(bike.demo);

console.log("car says: " + car.demo);
console.log("bus says: " + bus.demo);
console.log("bike says: " + bike.demo);
