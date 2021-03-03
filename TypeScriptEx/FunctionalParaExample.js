var BusReservation = /** @class */ (function () {
    function BusReservation() {
    }
    BusReservation.prototype.booking = function (noofseats, price) {
        if (price === void 0) { price = 1500; }
        var Totalamount = price * noofseats;
        console.log(this.booking(8));
        console.log(Totalamount);
    };
    return BusReservation;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.details = function (id, name, emailid) {
        console.log("ID:", id, " Name:", name);
        if (emailid != undefined) {
            console.log("Email-Id:", emailid);
        }
        console.log(this.details(101, "Gayathri"));
        console.log(this.details(105, "gayu", "gayu@gmail.com"));
    };
    return Person;
}());
var NumberEx = /** @class */ (function () {
    function NumberEx() {
    }
    NumberEx.prototype.fun = function () {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        var sum = 0;
        for (var _a = 0, input_1 = input; _a < input_1.length; _a++) {
            var i = input_1[_a];
            sum += i;
        }
        return sum;
    };
    return NumberEx;
}());
var n = new NumberEx();
console.log(n.fun(1, 2));
console.log(n.fun(1, 2, 3));
console.log(n.fun(1, 2, 3, 4, 5));
