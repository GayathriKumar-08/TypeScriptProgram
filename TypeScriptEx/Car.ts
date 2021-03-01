class Car
{
    carcolor:string;
    enginecapactiy:any;
    noofcylinders:any;
    constructor(carcolor:string, enginecapacity:any,noofCylinders:number)
    {
        this.carcolor=carcolor;
        this.enginecapactiy=enginecapacity;
        this.noofcylinders=noofCylinders;
    }
    public  StartCar(carcolor:string)
    {
       this.carcolor=carcolor;
       console.log("The colour of car is:"+carcolor);
       console.log("The car has been started!!!!");
    }
    public  AccelerateCar(carcolor:string,enginecapactiy:any, noofcylinders:any)
    {
       this.carcolor=carcolor;
       this.enginecapactiy=enginecapactiy;
       this.noofcylinders=noofcylinders;
       console.log("The colour of car is:"+carcolor);
       console.log("The Engine Capacity of car is:"+enginecapactiy);
       console.log("The noofcylinders of car is:"+noofcylinders);
       console.log("The car has been accelerated!!!!");
   }
    public OpenCarLock(carcolor:string)
   {
      this.carcolor=carcolor;
      console.log("The colour of car is:"+carcolor);
      console.log("The car lock has been opened!!!!");
   }
    public CloseCarLock(carcolor:string)
   {
      this.carcolor=carcolor;
      console.log("The colour of car is:"+carcolor);
      console.log("The "+carcolor+"car lock has been closed!!!!");
   }
   public Stop(carcolor:string)
   {
      this.carcolor=carcolor;
      console.log("The colour of car is:"+carcolor);
      console.log("The "+carcolor+" car has been stopped!!!!");
    }
}

let c:Car=new Car("blue","1390cc",4);
console.log(c.StartCar("blue"));
console.log(c.AccelerateCar("blue","1390cc",4));
console.log(c.OpenCarLock("blue"));
console.log(c.CloseCarLock("blue"));
console.log(c.Stop("blue"));

