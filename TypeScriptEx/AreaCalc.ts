
class AreaCalc{
    
    public square1(x:any){
        var res:any=x*x;
        console.log("AREA OF SQAURE"+res.toFixed(2));
    }
    public  rectangle1(a:any,b:any,c:any){
        var res:any=2*(a*b + b*c + a*c);
        console.log("AREA OF RECTANGLE"+res.toFixed(2));
    }
    public triangle1(b:any,h:any,s1:any,s2:any,s3:any,H:any){
         var res:any=b*h+(s1+s2+s3)*H;
          console.log("SURFACE AREA OF TRIANGLE"+res.toFixed(2));
      }
}
let ac:AreaCalc= new AreaCalc();
let square=ac.square1(9.9);
console.log(square);
let rectangle=ac.rectangle1(10.8,10.4,7.5);
console.log(rectangle);
let triangle=ac.triangle1(45,45.6,30,30,30,54);
console.log(triangle);


