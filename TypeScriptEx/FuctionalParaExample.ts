class BusReservation {
    booking(noofseats: number, price: number = 1500) {
        let Totalamount: number = price * noofseats;
        console.log(this.booking(8));
        console.log(Totalamount);
    }
}
class Person {
    details(id: number, name: string, emailid?: string) {
        console.log("ID:", id, " Name:", name);
        if (emailid != undefined) {
            console.log("Email-Id:", emailid);
        }
        console.log(this.details(101, "Gayathri"));
        console.log(this.details(105, "gayu", "gayu@gmail.com"));
    }
}
class NumberEx {

    public fun(...input:any) {
        let sum:any = 0;
        for (let i of input) {
            sum += i;
        }
        return sum;
    }
}
let n:NumberEx=new NumberEx();
    console.log(n.fun(1, 2));
    console.log(n.fun(1, 2, 3));
    console.log(n.fun(1, 2, 3, 4, 5));      
