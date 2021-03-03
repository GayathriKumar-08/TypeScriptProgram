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
let car1: Cardemo = new Busdemo();
console.log(car1.demo());
let bus1: Busdemo = new Bikedemo();
console.log(bus1.demo());
let bike1: Bikedemo = new Cardemo();
console.log(bike1.demo);

console.log("car says: " + car.demo);
console.log("bus says: " + bus.demo);
console.log("bike says: " + bike.demo);
